import { Head, Link } from '@inertiajs/react';
import { Card, Button, Avatar } from '@heroui/react';
import { Target, Compass, Sparkles, Shield, Heart, Award, ArrowRight } from 'lucide-react';

export default function About() {
    const values = [
        {
            title: 'Excellence',
            description: 'We strive for exceptional quality in every line of code and user experience we construct.',
            icon: Award,
            color: 'text-indigo-500 bg-indigo-500/10'
        },
        {
            title: 'Integrity',
            description: 'Honesty, transparency, and architectural standards are at the foundation of all our systems.',
            icon: Shield,
            color: 'text-purple-500 bg-purple-500/10'
        },
        {
            title: 'Customer-Centric',
            description: 'We build digital products that directly align with client success and end-user accessibility.',
            icon: Heart,
            color: 'text-pink-500 bg-pink-500/10'
        }
    ];

    const team = [
        {
            name: 'Ahmad Faisal',
            role: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
            bio: 'Over 15 years of technology experience leading enterprise digital transformations across SE Asia.'
        },
        {
            name: 'Sarah Lestari',
            role: 'Chief Technology Officer',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
            bio: 'Expert in cloud architectures, distributed system design, and high-volume transaction databases.'
        },
        {
            name: 'Reza Mahendra',
            role: 'VP of Product Design',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
            bio: 'Passionate about responsive component libraries, accessible design tokens, and digital ergonomics.'
        },
        {
            name: 'Nadia Putri',
            role: 'Head of Customer Success',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
            bio: 'Ensures that Portofolia Blog by Kodya clients have top-tier onboarding, execution clarity, and sustained product growth.'
        }
    ];

    return (
        <>
            <Head title="About Us - Portofolia Blog by Kodya" />

            {/* Header section */}
            <section className="py-12 md:py-16 border-b border-border/40 text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 uppercase tracking-widest">
                    <Compass className="h-3.5 w-3.5" />
                    <span>Who We Are</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                    Shaping the Future of{' '}
                    <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        Digital Engineering
                    </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Portofolia Blog by Kodya was founded on the principle that digital tools should empower businesses to do more. We engineer software platforms that bring operational clarity and design excellence to companies worldwide.
                </p>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-16 border-b border-border/40 grid md:grid-cols-2 gap-12">
                <Card className="border border-border/40 bg-surface/30 p-8 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                        <Target className="h-6 w-6" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold tracking-tight">Visi Kami</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Menjadi mitra teknologi global utama yang mentransformasi operasi bisnis melalui inovasi perangkat lunak yang berkesinambungan, andal, dan mengedepankan kualitas desain.
                        </p>
                    </div>
                </Card>

                <Card className="border border-border/40 bg-surface/30 p-8 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-500 border border-purple-500/20">
                        <Sparkles className="h-6 w-6" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold tracking-tight">Misi Kami</h2>
                        <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed list-disc list-inside">
                            <li>Mengembangkan solusi perangkat lunak berkinerja tinggi yang disesuaikan dengan kebutuhan strategis bisnis.</li>
                            <li>Mengintegrasikan sistem desain yang ramah pengguna, berstandar tinggi, dan mudah diakses.</li>
                            <li>Menyediakan arsitektur komputasi awan yang aman, hemat biaya, dan siap berkembang di masa depan.</li>
                            <li>Membina talenta rekayasa digital berstandar internasional melalui kolaborasi proyek yang berintegritas.</li>
                        </ul>
                    </div>
                </Card>
            </section>

            {/* Core Values Section */}
            <section className="py-16 border-b border-border/40 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <h2 className="text-3xl font-bold tracking-tight">Nilai-Nilai Utama Kami</h2>
                    <p className="text-muted-foreground">
                        Budaya kerja kami dibentuk oleh komitmen bersama terhadap standar kualitas tertinggi.
                    </p>
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
                                    <h3 className="text-lg font-bold">{val.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <h2 className="text-3xl font-bold tracking-tight">Kenali Tim Kami</h2>
                    <p className="text-muted-foreground">
                        Para profesional berpengalaman yang mendedikasikan keahlian mereka untuk menyukseskan proyek digital Anda.
                    </p>
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
                                <Card.Description className="text-xs text-primary font-semibold uppercase tracking-wider">{member.role}</Card.Description>
                            </Card.Header>
                            <Card.Content className="text-xs text-muted-foreground leading-relaxed pt-0 pb-6 flex-1">
                                {member.bio}
                            </Card.Content>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-12 border-t border-border/40 text-center space-y-6">
                <h3 className="text-2xl font-bold">Tertarik Bermitra Dengan Tim Kami?</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                    Diskusikan ide proyek digital Anda dengan konsultan kami dan mari buat sesuatu yang luar biasa.
                </p>
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
