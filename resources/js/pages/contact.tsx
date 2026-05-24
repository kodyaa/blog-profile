import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Card, Button, Input, TextArea, Spinner } from '@heroui/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2 } from 'lucide-react';

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
            setFormState({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const contactDetails = [
        {
            icon: MapPin,
            title: 'Alamat Kantor',
            content: 'Sudirman Central Business District (SCBD), Tower 3A, Lt. 12, Jakarta Selatan, Indonesia 12190',
            color: 'text-indigo-500 bg-indigo-500/10'
        },
        {
            icon: Phone,
            title: 'Hubungi Kami',
            content: '+62 (21) 555-8291 / +62 812-3456-7890',
            color: 'text-purple-500 bg-purple-500/10'
        },
        {
            icon: Mail,
            title: 'Surel / Email Support',
            content: 'inquiries@kodya.com / support@kodya.com',
            color: 'text-pink-500 bg-pink-500/10'
        },
        {
            icon: Clock,
            title: 'Jam Operasional',
            content: 'Senin - Jumat: 09.00 - 18.00 WIB (Sabtu - Minggu Libur)',
            color: 'text-cyan-500 bg-cyan-500/10'
        }
    ];

    return (
        <>
            <Head title="Contact Us - Portofolia Blog by Kodya" />

            {/* Header section */}
            <section className="py-12 md:py-16 border-b border-border/40 text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 uppercase tracking-widest">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>Get In Touch</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                    Let’s Start a{' '}
                    <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        Conversation
                    </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Have questions about our custom systems or want to schedule a technical consultation? Fill out the form or reach out directly.
                </p>
            </section>

            {/* Content Section */}
            <section className="py-16 grid lg:grid-cols-12 gap-12 border-b border-border/40">
                {/* Contact Info (5 columns) */}
                <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold tracking-tight">Informasi Kontak</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Hubungi kami melalui channels berikut atau kunjungi kantor pusat kami di pusat kota Jakarta.
                        </p>
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
                                        <h4 className="text-sm font-bold text-foreground">{detail.title}</h4>
                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{detail.content}</p>
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
                                <h3 className="text-xl font-bold">Pesan Anda Berhasil Dikirim!</h3>
                                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                                    Terima kasih telah menghubungi kami. Tim kami akan segera membalas email Anda dalam waktu 1x24 jam.
                                </p>
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
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Kirim Formulir Inquiry</h3>
                                    <p className="text-xs text-muted-foreground">Tulis kebutuhan proyek Anda dan mari jadwalkan meeting awal.</p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-xs font-semibold text-foreground/80">Nama Lengkap</label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-semibold text-foreground/80">Alamat Email</label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className="text-xs font-semibold text-foreground/80">Subjek</label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Konsultasi Pengembangan Aplikasi ERP"
                                        className="w-full"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-xs font-semibold text-foreground/80">Detail Pesan / Deskripsi Proyek</label>
                                    <TextArea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tulis detail kebutuhan, timeline perkiraan, atau pertanyaan lainnya..."
                                        className="w-full"
                                    />
                                </div>

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
                            </form>
                        )}
                    </Card>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">Lokasi Kantor Kami</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Kunjungi kantor kami untuk meeting langsung (mohon konfirmasi jadwal sebelum kunjungan).
                    </p>
                </div>
                
                {/* Styled Map Placeholder using HeroUI / premium CSS */}
                <Card className="border border-border/40 bg-surface/30 overflow-hidden h-100 relative flex items-center justify-center group">
                    <div className="absolute inset-0 bg-indigo-950/20 mix-blend-multiply pointer-events-none z-10" />
                    {/* Visual mockup of Google Maps */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] bg-size-[16px_16px] opacity-80" />
                    
                    {/* Styled central beacon pointer */}
                    <div className="relative z-20 flex flex-col items-center gap-3">
                        <div className="relative flex items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-indigo-400 opacity-75"></span>
                            <div className="relative w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-lg border border-white/20">
                                <Building2 className="h-4 w-4" />
                            </div>
                        </div>
                        <div className="bg-background/90 dark:bg-background/95 border border-border/40 backdrop-blur-md px-4 py-2 rounded-lg text-center max-w-xs shadow-md">
                            <p className="text-xs font-bold">Portofolia Blog HQ</p>
                            <p className="text-[10px] text-muted-foreground mt-0.5">Sudirman Central Business District (SCBD), Jakarta</p>
                        </div>
                    </div>
                </Card>
            </section>
        </>
    );
}
