import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Card, Button, Form, TextField, Label, Input, TextArea, FieldError, Spinner, Typography } from '@heroui/react';
import { Send, CheckCircle2, Building2 } from 'lucide-react';
import { contactDetails } from '@/data/contact';


export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        // Simulate API call
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <>
            <Head title="Contact Us - Portofolia Blog by Kodya" />

            {/* Header section */}
            <section className="py-12 md:py-16 border-b border-border/40 text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-indigo-500" />
                    <Typography type="body-xs" weight="semibold" className="text-indigo-500 uppercase tracking-widest">
                        Get In Touch
                    </Typography>
                </div>
                <Typography type="h1" weight="bold" align="center" className="text-4xl sm:text-5xl font-black tracking-tight">
                    Let's Start a{' '}
                    <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        Conversation
                    </span>
                </Typography>
                <Typography type="body" color="muted" align="center" className="text-lg leading-relaxed">
                    Have questions about our custom systems or want to schedule a technical consultation? Fill out the form or reach out directly.
                </Typography>
            </section>

            {/* Content Section */}
            <section className="py-16 grid lg:grid-cols-12 gap-12 border-b border-border/40">
                {/* Contact Info (5 columns) */}
                <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-3">
                        <Typography type="h2" weight="bold" className="tracking-tight">Informasi Kontak</Typography>
                        <Typography type="body-sm" color="muted" className="leading-relaxed">
                            Hubungi kami melalui channels berikut or kunjungi kantor pusat kami di pusat kota Jakarta.
                        </Typography>
                    </div>

                    <div className="space-y-6">
                        {contactDetails.map((detail, i) => {
                            const Icon = detail.icon;
                            return (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${detail.color}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <Typography type="body-sm" weight="bold">{detail.title}</Typography>
                                        <Typography type="body-sm" color="muted" className="leading-relaxed">{detail.content}</Typography>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Form (7 columns) */}
                <div className="lg:col-span-7">
                    <Card className="border border-border/40 bg-surface/30 p-8">
                        {submitted ? (
                            <div className="text-center py-12 space-y-4">
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                                        <CheckCircle2 className="h-10 w-10" />
                                    </div>
                                </div>
                                <Typography type="h3" weight="bold" align="center">Pesan Anda Berhasil Dikirim!</Typography>
                                <Typography type="body-sm" color="muted" align="center" className="max-w-sm mx-auto">
                                    Terima kasih telah menghubungi kami. Tim kami akan segera membalas email Anda dalam waktu 1x24 jam.
                                </Typography>
                                <div className="pt-2">
                                    <Button 
                                        variant="outline" 
                                        onPress={() => setSubmitted(false)}
                                        className="rounded-full"
                                    >
                                        Kirim Pesan Lain
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <Form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Typography type="h3" weight="bold">Kirim Formulir Inquiry</Typography>
                                    <Typography type="body-xs" color="muted">Tulis kebutuhan proyek Anda dan mari jadwalkan meeting awal.</Typography>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <TextField isRequired name="name" className="w-full">
                                        <Label>Nama Lengkap</Label>
                                        <Input placeholder="John Doe" />
                                        <FieldError />
                                    </TextField>

                                    <TextField 
                                        isRequired 
                                        name="email" 
                                        type="email" 
                                        className="w-full"
                                        validate={(value) => {
                                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                                return "Alamat email tidak valid";
                                            }
                                            return null;
                                        }}
                                    >
                                        <Label>Alamat Email</Label>
                                        <Input placeholder="john@example.com" />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <TextField isRequired name="subject" className="w-full">
                                    <Label>Subjek</Label>
                                    <Input placeholder="Konsultasi Pengembangan Aplikasi ERP" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="message" className="w-full">
                                    <Label>Detail Pesan / Deskripsi Proyek</Label>
                                    <TextArea rows={5} placeholder="Tulis detail kebutuhan, timeline perkiraan, atau pertanyaan lainnya..." />
                                    <FieldError />
                                </TextField>

                                <Button 
                                    type="submit" 
                                    isPending={submitting}
                                    className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium w-full py-6 rounded-lg shadow-md shadow-indigo-500/10 flex items-center justify-center gap-2"
                                >
                                    {({ isPending }) => (
                                        <>
                                            {isPending ? <Spinner color="current" size="sm" /> : <Send className="h-4 w-4" />}
                                            Kirim Pesan Bisnis
                                        </>
                                    )}
                                </Button>
                            </Form>
                        )}
                    </Card>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 space-y-6">
                <div className="space-y-2">
                    <Typography type="h2" weight="bold" className="tracking-tight">Lokasi Kantor Kami</Typography>
                    <Typography type="body-sm" color="muted" className="leading-relaxed">
                        Kunjungi kantor kami untuk meeting langsung (mohon konfirmasi jadwal sebelum kunjungan).
                    </Typography>
                </div>
                
                {/* Styled Map Placeholder using HeroUI / premium CSS */}
                <Card className="border border-border/40 bg-surface/30 overflow-hidden h-100 relative flex items-center justify-center group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6664270098317!2d106.82496417578299!3d-6.175392360514101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2dbfb2115%3A0xa196f7136977f18b!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1716584285190!5m2!1sid!2sid"
                        title="Google map"
                        style={{ border: 0 }}
                        className="w-full h-full"
                        allowFullScreen
                        loading="lazy"
                    />
                </Card>
            </section>
        </>
    );
}
