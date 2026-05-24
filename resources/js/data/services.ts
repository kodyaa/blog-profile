import { Monitor, Smartphone, Cloud, PenTool } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    features: string[];
    tech: string[];
}

export interface WorkStep {
    step: string;
    title: string;
    desc: string;
}

export const services: Service[] = [
    {
        title: 'Enterprise Web Development',
        description:
            'Custom back-office engines, ERP, CRM, and dashboard systems engineered with security and microservice architectures in mind.',
        icon: Monitor,
        color: 'from-blue-500 to-indigo-600 shadow-blue-500/10',
        features: [
            'Robust API & Integration Layer',
            'Optimistic UI & Real-Time Sync',
            'Advanced Access Controls (RBAC)',
            'SEO-Optimized Rendering Pipelines',
        ],
        tech: ['Laravel', 'React', 'PostgreSQL', 'Redis'],
    },
    {
        title: 'Mobile Applications',
        description:
            'Native-feel iOS and Android applications designed for high performance, smooth animations, and offline-first capabilities.',
        icon: Smartphone,
        color: 'from-purple-500 to-pink-600 shadow-purple-500/10',
        features: [
            'Offline Database Syncing',
            'Biometric Authentication',
            'Native Device Features Integration',
            'Unified Notification Channels',
        ],
        tech: ['React Native', 'TypeScript', 'Tailwind', 'GraphQL'],
    },
    {
        title: 'Cloud Architecture & DevOps',
        description:
            'Scalable cloud operations including server configuration, automated deployment pipelines, and active security firewalls.',
        icon: Cloud,
        color: 'from-cyan-500 to-blue-600 shadow-cyan-500/10',
        features: [
            'CI/CD Workflow Automation',
            'Zero-Downtime Blue-Green Deploys',
            'Kubernetes Cluster Management',
            'Auto-Scaling & Load Balancing',
        ],
        tech: ['AWS', 'Docker', 'GitHub Actions', 'Terraform'],
    },
    {
        title: 'UI/UX & Design Strategy',
        description:
            'Interactive wireframing, creative branding guidelines, and responsive design systems that bridge visual aesthetics with high conversion rates.',
        icon: PenTool,
        color: 'from-pink-500 to-rose-600 shadow-pink-500/10',
        features: [
            'Full Digital Brand Styling',
            'Interactive Prototypes',
            'In-Depth User Journey Auditing',
            'Reusable Component Libraries',
        ],
        tech: ['Figma', 'Adobe CC', 'Design Tokens', 'Storybook'],
    },
];

export const workSteps: WorkStep[] = [
    { step: '01', title: 'Research & Strategy', desc: 'Analyzing existing systems and documenting business requirements.' },
    { step: '02', title: 'Prototype Design', desc: 'Crafting premium interactive interfaces and structural maps.' },
    { step: '03', title: 'Agile Development', desc: 'Writing clean, thoroughly tested code in quick sprint iterations.' },
    { step: '04', title: 'Launch & Optimize', desc: 'Deploying securely with continuous analytical reporting.' },
];
