import { Award, Shield, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Value {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
}

export const values: Value[] = [
    {
        title: 'Excellence',
        description: 'We strive for exceptional quality in every line of code and user experience we construct.',
        icon: Award,
        color: 'text-indigo-500 bg-indigo-500/10',
    },
    {
        title: 'Integrity',
        description: 'Honesty, transparency, and architectural standards are at the foundation of all our systems.',
        icon: Shield,
        color: 'text-purple-500 bg-purple-500/10',
    },
    {
        title: 'Customer-Centric',
        description: 'We build digital products that directly align with client success and end-user accessibility.',
        icon: Heart,
        color: 'text-pink-500 bg-pink-500/10',
    },
];

export const team: TeamMember[] = [
    {
        name: 'Ahmad Faisal',
        role: 'CEO & Founder',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
        bio: 'Over 15 years of technology experience leading enterprise digital transformations across SE Asia.',
    },
    {
        name: 'Sarah Lestari',
        role: 'Chief Technology Officer',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
        bio: 'Expert in cloud architectures, distributed system design, and high-volume transaction databases.',
    },
    {
        name: 'Reza Mahendra',
        role: 'VP of Product Design',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
        bio: 'Passionate about responsive component libraries, accessible design tokens, and digital ergonomics.',
    },
    {
        name: 'Nadia Putri',
        role: 'Head of Customer Success',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
        bio: 'Ensures that Portofolia Blog by Kodya clients have top-tier onboarding, execution clarity, and sustained product growth.',
    },
];
