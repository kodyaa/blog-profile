import { Head, Link } from '@inertiajs/react';
import { Card, Button, Chip } from '@heroui/react';
import { Monitor, Smartphone, Cloud, PenTool, CheckCircle2, ArrowRight, ShieldCheck, Zap, Code } from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: 'Enterprise Web Development',
            description: 'Custom back-office engines, ERP, CRM, and dashboard systems engineered with security and microservice architectures in mind.',
            icon: Monitor,
            color: 'from-blue-500 to-indigo-600 shadow-blue-500/10',
            features: [
                'Robust API & Integration Layer',
                'Optimistic UI & Real-Time Sync',
                'Advanced Access Controls (RBAC)',
                'SEO-Optimized Rendering Pipelines'
            ],
            tech: ['Laravel', 'React', 'PostgreSQL', 'Redis']
        },
        {
            title: 'Mobile Applications',
            description: 'Native-feel iOS and Android applications designed for high performance, smooth animations, and offline-first capabilities.',
            icon: Smartphone,
            color: 'from-purple-500 to-pink-600 shadow-purple-500/10',
            features: [
                'Offline Database Syncing',
                'Biometric Authentication',
                'Native Device Features Integration',
                'Unified Notification Channels'
            ],
            tech: ['React Native', 'TypeScript', 'Tailwind', 'GraphQL']
        },
        {
            title: 'Cloud Architecture & DevOps',
            description: 'Scalable cloud operations including server configuration, automated deployment pipelines, and active security firewalls.',
            icon: Cloud,
            color: 'from-cyan-500 to-blue-600 shadow-cyan-500/10',
            features: [
                'CI/CD Workflow Automation',
                'Zero-Downtime Blue-Green Deploys',
                'Kubernetes Cluster Management',
                'Auto-Scaling & Load Balancing'
            ],
            tech: ['AWS', 'Docker', 'GitHub Actions', 'Terraform']
        },
        {
            title: 'UI/UX & Design Strategy',
            description: 'Interactive wireframing, creative branding guidelines, and responsive design systems that bridge visual aesthetics with high conversion rates.',
            icon: PenTool,
            color: 'from-pink-500 to-rose-600 shadow-pink-500/10',
            features: [
                'Full Digital Brand Styling',
                'Interactive Interactive Prototypes',
                'In-Depth User Journey Auditing',
                'Reusable Component Libraries'
            ],
            tech: ['Figma', 'Adobe CC', 'Design Tokens', 'Storybook']
        }
    ];

    return (
        <>
            <Head title="Our Services - Portofolia Blog by Kodya" />

            {/* Header section */}
            <section className="py-12 md:py-16 border-b border-border/40 text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 uppercase tracking-widest">
                    <Code className="h-3.5 w-3.5" />
                    <span>Expertise & Capabilities</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                    Professional Services for{' '}
                    <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        Modern Tech Stacks
                    </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    We deliver customized, premium engineering services engineered to scale. Our team blends technical mastery with elegant presentation.
                </p>
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
                                        <h2 className="text-2xl font-bold tracking-tight">{svc.title}</h2>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
                                    </div>
                                    <div className="space-y-2 pt-2 border-t border-border/10">
                                        <span className="text-xs font-bold text-foreground/80 uppercase tracking-wider block">Key Features</span>
                                        <ul className="space-y-1.5">
                                            {svc.features.map((feat, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" />
                                                    <span>{feat}</span>
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
                    <h2 className="text-3xl font-bold tracking-tight">Our Work Workflow</h2>
                    <p className="text-muted-foreground">
                        A structured, rapid delivery cycle ensuring communication clarity, high security, and performance.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { step: '01', title: 'Research & Strategy', desc: 'Analyzing existing systems and documenting business requirements.' },
                        { step: '02', title: 'Prototype Design', desc: 'Crafting premium interactive interfaces and structural maps.' },
                        { step: '03', title: 'Agile Development', desc: 'Writing clean, thoroughly tested code in quick sprint iterations.' },
                        { step: '04', title: 'Launch & Optimize', desc: 'Deploying securely with continuous analytical reporting.' }
                    ].map((step, idx) => (
                        <Card key={idx} className="border border-border/40 bg-surface/50 p-6 space-y-4">
                            <div className="text-4xl font-black text-indigo-500/20">{step.step}</div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-base">{step.title}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
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
                <h3 className="text-2xl font-bold">Have a Custom Project in Mind?</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                    We specialize in constructing unique architectures. Let’s sit down and discuss a tailored contract for your business.
                </p>
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
