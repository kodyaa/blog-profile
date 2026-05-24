import { Cpu, ShieldCheck, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface CoreStrength {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
}

export interface Stat {
    number: string;
    label: string;
}

export interface ServiceTeaser {
    title: string;
    description: string;
    tags: string[];
}

export const coreStrengths: CoreStrength[] = [
    {
        title: 'Innovation-First',
        description: 'We leverage cutting-edge technologies to build future-proof products.',
        icon: Cpu,
        color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    },
    {
        title: 'Secure & Scalable',
        description: 'Our cloud architectures are designed with enterprise-grade security first.',
        icon: ShieldCheck,
        color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    },
    {
        title: 'Global Delivery',
        description: 'Serving clients worldwide with top-tier engineering talent and support.',
        icon: Globe,
        color: 'text-pink-500 bg-pink-500/10 border-pink-500/20',
    },
];

export const stats: Stat[] = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Global Clients' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '8+', label: 'Years of Excellence' },
];

export const serviceTeasers: ServiceTeaser[] = [
    {
        title: 'Enterprise Software',
        description:
            'Custom ERPs, CRMs, and robust backend ecosystems tailored for high-volume transactions and seamless operations.',
        tags: ['Laravel', 'Node.js', 'PostgreSQL'],
    },
    {
        title: 'High-Fidelity Frontends',
        description:
            'Beautiful, accessible, and fast single-page applications built using modern frameworks and responsive component engines.',
        tags: ['React', 'Inertia.js', 'Tailwind CSS'],
    },
    {
        title: 'UI/UX & Design Systems',
        description:
            'Strategic visual designs, interactive wireframes, and scalable component systems designed to maximize user engagement.',
        tags: ['Figma', 'Prototyping', 'Design Tokens'],
    },
];
