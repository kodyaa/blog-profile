import { Head, Link } from '@inertiajs/react';
import { Card, Button, Avatar, Typography } from '@heroui/react';
import { Target, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { values, team } from '@/data/about';


export default function About() {

    return (
        <>
            <Head title="About Us - Portofolia Blog by Kodya" />

            {/* Header section */}
            <section className="py-12 md:py-16 border-b border-border/40 text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-1.5">
                    <Compass className="h-3.5 w-3.5 text-indigo-500" />
                    <Typography type="body-xs" weight="semibold" className="text-indigo-500 uppercase tracking-widest">
                        Who We Are
                    </Typography>
                </div>
                <Typography type="h1" weight="bold" align="center" className="text-4xl sm:text-5xl font-black tracking-tight">
                    Shaping the Future of{' '}
                    <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        Digital Engineering
                    </span>
                </Typography>
                <Typography type="body" color="muted" align="center" className="text-lg leading-relaxed">
                    Portofolia Blog by Kodya was founded on the principle that digital tools should empower businesses to do more. We engineer software platforms that bring operational clarity and design excellence to companies worldwide.
                </Typography>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-16 border-b border-border/40 grid md:grid-cols-2 gap-12">
                <Card className="border border-border/40 bg-surface/30 p-8 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                        <Target className="h-6 w-6" />
                    </div>
                    <div className="space-y-3">
                        <Typography type="h2" weight="bold" className="tracking-tight">Visi Kami</Typography>
                        <Typography type="body" color="muted" className="leading-relaxed">
                            Menjadi mitra teknologi global utama yang mentransformasi operasi bisnis melalui inovasi perangkat lunak yang berkesinambungan, andal, dan mengedepankan kualitas desain.
                        </Typography>
                    </div>
                </Card>

                <Card className="border border-border/40 bg-surface/30 p-8 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-500 border border-purple-500/20">
                        <Sparkles className="h-6 w-6" />
                    </div>
                    <div className="space-y-3">
                        <Typography type="h2" weight="bold" className="tracking-tight">Misi Kami</Typography>
                        <ul className="space-y-2 list-disc list-inside">
                            {[
                                'Mengembangkan solusi perangkat lunak berkinerja tinggi yang disesuaikan dengan kebutuhan strategis bisnis.',
                                'Mengintegrasikan sistem desain yang ramah pengguna, berstandar tinggi, dan mudah diakses.',
                                'Menyediakan arsitektur komputasi awan yang aman, hemat biaya, dan siap berkembang di masa depan.',
                                'Membina talenta rekayasa digital berstandar internasional melalui kolaborasi proyek yang berintegritas.'
                            ].map((item, i) => (
                                <li key={i}>
                                    <Typography type="body-sm" color="muted" className="leading-relaxed inline">
                                        {item}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            </section>

            {/* Core Values Section */}
            <section className="py-16 border-b border-border/40 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <Typography type="h2" weight="bold" align="center" className="tracking-tight">
                        Nilai-Nilai Utama Kami
                    </Typography>
                    <Typography type="body" color="muted" align="center">
                        Budaya kerja kami dibentuk oleh komitmen bersama terhadap standar kualitas tertinggi.
                    </Typography>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((val, i) => {
                        const Icon = val.icon;
                        return (
                            <Card key={i} className="border border-border/40 bg-surface/50 p-6 space-y-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${val.color}`}>
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div className="space-y-2">
                                    <Typography type="h4" weight="bold">{val.title}</Typography>
                                    <Typography type="body-sm" color="muted" className="leading-relaxed">
                                        {val.description}
                                    </Typography>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <Typography type="h2" weight="bold" align="center" className="tracking-tight">
                        Kenali Tim Kami
                    </Typography>
                    <Typography type="body" color="muted" align="center">
                        Para profesional berpengalaman yang mendedikasikan keahlian mereka untuk menyukseskan proyek digital Anda.
                    </Typography>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, i) => (
                        <Card key={i} className="border border-border/40 bg-surface/30 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
                            <div className="h-56 overflow-hidden relative bg-default-100 flex items-center justify-center">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <Card.Header className="pt-5 pb-2">
                                <Card.Title className="text-lg font-bold">{member.name}</Card.Title>
                                <Card.Description className="text-xs text-primary font-semibold uppercase tracking-wider">
                                    {member.role}
                                </Card.Description>
                            </Card.Header>
                            <Card.Content className="pt-0 pb-6 flex-1">
                                <Typography type="body-xs" color="muted" className="leading-relaxed">
                                    {member.bio}
                                </Typography>
                            </Card.Content>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-12 border-t border-border/40 text-center space-y-6">
                <Typography type="h3" weight="bold" align="center">
                    Tertarik Bermitra Dengan Tim Kami?
                </Typography>
                <Typography type="body" color="muted" align="center" className="max-w-md mx-auto">
                    Diskusikan ide proyek digital Anda dengan konsultan kami dan mari buat sesuatu yang luar biasa.
                </Typography>
                <div>
                    <Link href="/contact">
                        <Button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-full px-6">
                            Hubungi Kami Sekarang
                            <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
