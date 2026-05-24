import { Head, Link } from '@inertiajs/react';
import { Card, Button, Chip, Typography } from '@heroui/react';
import { ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import { coreStrengths, stats, serviceTeasers } from '@/data/welcome';
import { routePath } from '@/lib/utils';


export default function Welcome() {
    return (
        <>
            <Head title="Portofolia Blog by Kodya" />

            {/* Hero Section */}
            <section className="relative py-16 md:py-28 flex flex-col items-center text-center overflow-hidden border-b border-border/40">
                {/* Background Blobs */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/3 left-1/3 w-75 h-75 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto space-y-6 px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 animate-fade-in">
                        <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                        <Typography type="body-sm" weight="semibold" className="text-indigo-500">
                            Innovating Digital Frontiers
                        </Typography>
                    </div>
                    
                    <Typography type="h1" weight="bold" align="center" className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
                        Building the Next Generation of{' '}
                        <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Digital Enterprises
                        </span>
                    </Typography>
                    
                    <Typography type="body" color="muted" align="center" className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
                        Portofolia Blog by Kodya designs, builds, and scales custom software systems, interactive interfaces, and cloud architectures that propel businesses forward in the digital economy.
                    </Typography>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <Link href={routePath('/services')}>
                            <Button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-95 transition-opacity px-6 py-6 text-base rounded-full shadow-lg shadow-indigo-500/20">
                                Explore Services
                                <ArrowRight className="h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href={routePath('/contact')}>
                            <Button variant="outline" className="border-border hover:bg-default-hover px-6 py-6 text-base rounded-full font-medium">
                                Schedule Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 border-b border-border/40">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center space-y-1">
                            <div className="text-3xl sm:text-5xl font-black bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                                {stat.number}
                            </div>
                            <Typography type="body-sm" color="muted" weight="medium" align="center">
                                {stat.label}
                            </Typography>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Values / strengths */}
            <section className="py-16 border-b border-border/40 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <Typography type="h2" weight="bold" align="center" className="tracking-tight">
                        Why Clients Trust Portofolia Blog by Kodya
                    </Typography>
                    <Typography type="body" color="muted" align="center">
                        We blend software engineering expertise with user-centric design to solve complex business problems.
                    </Typography>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {coreStrengths.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <Card key={i} className="border border-border/40 bg-surface/30 p-6 flex flex-col gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color}`}>
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div className="space-y-2">
                                    <Typography type="h4" weight="bold">{item.title}</Typography>
                                    <Typography type="body-sm" color="muted" className="leading-relaxed">
                                        {item.description}
                                    </Typography>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Featured Services Teaser */}
            <section className="py-16 border-b border-border/40 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-1.5">
                            <Briefcase className="h-3.5 w-3.5 text-purple-500" />
                            <Typography type="body-xs" weight="semibold" className="text-purple-500 uppercase tracking-widest">
                                Our Capabilities
                            </Typography>
                        </div>
                        <Typography type="h2" weight="bold" className="tracking-tight">
                            Customized Solutions for Every Scale
                        </Typography>
                    </div>
                    <Link href={routePath('/services')}>
                        <Button variant="ghost" className="hover:bg-default-hover group flex items-center gap-1">
                            View All Services
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {serviceTeasers.map((service, index) => (
                        <Card key={index} className="border border-border/40 bg-surface/50 hover:shadow-lg transition-all duration-300 flex flex-col">
                            <Card.Header>
                                <Card.Title className="text-xl font-bold">{service.title}</Card.Title>
                            </Card.Header>
                            <Card.Content className="flex-1 leading-relaxed">
                                <Typography type="body-sm" color="muted" className="mb-6 leading-relaxed">
                                    {service.description}
                                </Typography>
                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {service.tags.map((tag) => (
                                        <Chip key={tag} size="sm" variant="secondary" className="border border-border text-xs px-2.5 py-0.5 rounded-md">
                                            {tag}
                                        </Chip>
                                    ))}
                                </div>
                            </Card.Content>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Quick Portfolio teaser */}
            <section className="py-16 border-b border-border/40 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <Typography type="h2" weight="bold" align="center" className="tracking-tight">
                        Our Work Speaks for Itself
                    </Typography>
                    <Typography type="body" color="muted" align="center">
                        Take a look at some of our recent engineering triumphs and creative design projects.
                    </Typography>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border border-border/40 bg-surface/30 overflow-hidden flex flex-col group">
                        <div className="h-64 overflow-hidden relative bg-indigo-950">
                            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 to-purple-800/40 mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-3xl font-bold text-white tracking-widest opacity-80 uppercase">AeroCloud ERP</span>
                            </div>
                        </div>
                        <Card.Header className="pt-6">
                            <Card.Title className="text-xl font-bold">AeroCloud - Next-Gen ERP Platform</Card.Title>
                            <Card.Description>Cloud Architecture & Enterprise Backend</Card.Description>
                        </Card.Header>
                        <Card.Content>
                            <Typography type="body-sm" color="muted" className="leading-relaxed">
                                A complete operations and inventory engine designed for aviation parts manufacturing, connecting legacy databases with dynamic React dashboards.
                            </Typography>
                        </Card.Content>
                    </Card>

                    <Card className="border border-border/40 bg-surface/30 overflow-hidden flex flex-col group">
                        <div className="h-64 overflow-hidden relative bg-purple-950">
                            <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-pink-800/40 mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-3xl font-bold text-white tracking-widest opacity-80 uppercase">Velo Pay</span>
                            </div>
                        </div>
                        <Card.Header className="pt-6">
                            <Card.Title className="text-xl font-bold">Velo Pay - Cross-Border Wallet</Card.Title>
                            <Card.Description>Mobile Application & Gateway API</Card.Description>
                        </Card.Header>
                        <Card.Content>
                            <Typography type="body-sm" color="muted" className="leading-relaxed">
                                A high-security financial transaction gateway enabling instantaneous regional currency conversion and tokenized merchant payouts.
                            </Typography>
                        </Card.Content>
                    </Card>
                </div>

                <div className="text-center pt-4">
                    <Link href={routePath('/portfolio')}>
                        <Button className="bg-default hover:bg-default-hover rounded-full px-6">
                            Browse Portfolio Gallery
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="py-16 md:py-24 rounded-2xl my-12 bg-linear-to-r from-indigo-500 via-purple-600 to-pink-500 text-white relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-grid-white/10 pointer-events-none" />
                <div className="relative z-10 max-w-3xl mx-auto text-center px-6 space-y-6">
                    <Typography type="h2" weight="bold" align="center" className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                        Ready to Elevate Your Digital Operations?
                    </Typography>
                    <Typography type="body" align="center" className="opacity-90 leading-relaxed max-w-xl mx-auto text-white">
                        Get in touch with our team today. Let's collaborate to construct high-impact digital systems for your organization.
                    </Typography>
                    <div className="pt-4">
                        <Link href={routePath('/contact')}>
                            <Button className="bg-white text-indigo-600 hover:bg-opacity-95 font-semibold px-8 py-6 text-base rounded-full shadow-lg">
                                Contact Us Today
                                <ArrowRight className="h-5 w-5 ml-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
