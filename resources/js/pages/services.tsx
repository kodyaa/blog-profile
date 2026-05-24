import { Head, Link } from '@inertiajs/react';
import { Card, Button, Chip, Typography } from '@heroui/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Code } from 'lucide-react';
import { services, workSteps } from '@/data/services';


export default function Services() {
    return (
        <>
            <Head title="Our Services - Portofolia Blog by Kodya" />

            {/* Header section */}
            <section className="py-12 md:py-16 border-b border-border/40 text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-1.5">
                    <Code className="h-3.5 w-3.5 text-indigo-500" />
                    <Typography type="body-xs" weight="semibold" className="text-indigo-500 uppercase tracking-widest">
                        Expertise & Capabilities
                    </Typography>
                </div>
                <Typography type="h1" weight="bold" align="center" className="text-4xl sm:text-5xl font-black tracking-tight">
                    Professional Services for{' '}
                    <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        Modern Tech Stacks
                    </span>
                </Typography>
                <Typography type="body" color="muted" align="center" className="text-lg leading-relaxed">
                    We deliver customized, premium engineering services engineered to scale. Our team blends technical mastery with elegant presentation.
                </Typography>
            </section>

            {/* Services Grid */}
            <section className="py-16 border-b border-border/40">
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((svc, i) => {
                        const Icon = svc.icon;
                        return (
                            <Card key={i} className="border border-border/40 bg-surface/30 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                                <div className="space-y-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-linear-to-br ${svc.color} shadow-md`}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-3">
                                        <Typography type="h3" weight="bold" className="tracking-tight">
                                            {svc.title}
                                        </Typography>
                                        <Typography type="body-sm" color="muted" className="leading-relaxed">
                                            {svc.description}
                                        </Typography>
                                    </div>
                                    <div className="space-y-2 pt-2 border-t border-border/10">
                                        <Typography type="body-xs" weight="bold" className="text-foreground/80 uppercase tracking-wider block">
                                            Key Features
                                        </Typography>
                                        <ul className="space-y-1.5">
                                            {svc.features.map((feat, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" />
                                                    <Typography type="body-sm" color="muted">{feat}</Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-6 mt-6 border-t border-border/10 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {svc.tech.map((t) => (
                                            <Chip key={t} size="sm" variant="secondary" className="border border-border text-xs px-2.5 py-0.5 rounded-md">
                                                {t}
                                            </Chip>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Methodology section */}
            <section className="py-16 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <Typography type="h2" weight="bold" align="center" className="tracking-tight">
                        Our Work Workflow
                    </Typography>
                    <Typography type="body" color="muted" align="center">
                        A structured, rapid delivery cycle ensuring communication clarity, high security, and performance.
                    </Typography>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {workSteps.map((step, idx) => (
                        <Card key={idx} className="border border-border/40 bg-surface/50 p-6 space-y-4">
                            <div className="text-4xl font-black text-indigo-500/20">{step.step}</div>
                            <div className="space-y-1">
                                <Typography type="h5" weight="bold">{step.title}</Typography>
                                <Typography type="body-xs" color="muted" className="leading-relaxed">
                                    {step.desc}
                                </Typography>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Service CTA */}
            <section className="py-12 border-t border-border/40 text-center space-y-6">
                <div className="flex justify-center gap-2 text-indigo-500">
                    <ShieldCheck className="h-6 w-6" />
                    <Zap className="h-6 w-6" />
                </div>
                <Typography type="h3" weight="bold" align="center">
                    Have a Custom Project in Mind?
                </Typography>
                <Typography type="body" color="muted" align="center" className="max-w-md mx-auto">
                    We specialize in constructing unique architectures. Let's sit down and discuss a tailored contract for your business.
                </Typography>
                <div>
                    <Link href="/contact">
                        <Button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-full px-6">
                            Start Your Project
                            <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
