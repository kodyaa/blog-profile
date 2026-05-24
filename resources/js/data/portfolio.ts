export type ProjectCategory = 'All' | 'Web' | 'Mobile' | 'DevOps' | 'Design';

export interface Project {
    title: string;
    category: Exclude<ProjectCategory, 'All'>;
    description: string;
    tech: string[];
    color: string;
    bgChar: string;
}

export const categories: ProjectCategory[] = ['All', 'Web', 'Mobile', 'DevOps', 'Design'];

export const projects: Project[] = [
    {
        title: 'AeroCloud ERP Platform',
        category: 'Web',
        description:
            'A complete inventory, supply chain, and operations hub engineered for aerospace manufacturers. Features optimistic UI and sub-second inventory sync.',
        tech: ['Laravel', 'React', 'PostgreSQL', 'Redis'],
        color: 'from-blue-600/30 to-indigo-800/30',
        bgChar: 'AC',
    },
    {
        title: 'Velo Pay Wallet',
        category: 'Mobile',
        description:
            'Cross-border digital remittance and merchant wallet. Built offline-first, incorporating biometric security and instant currency conversion APIs.',
        tech: ['React Native', 'TypeScript', 'GraphQL', 'Tailwind'],
        color: 'from-purple-600/30 to-pink-800/30',
        bgChar: 'VP',
    },
    {
        title: 'FinEdge Analytics Dashboard',
        category: 'Web',
        description:
            'High-volume transaction auditing platform for hedge funds. Features advanced SVG chart rendering, data virtualization, and custom export engines.',
        tech: ['React', 'Inertia.js', 'MySQL', 'Highcharts'],
        color: 'from-emerald-600/30 to-teal-800/30',
        bgChar: 'FE',
    },
    {
        title: 'Auto-Scaling Multi-Region Cloud',
        category: 'DevOps',
        description:
            'Migration from physical infrastructure to AWS Multi-AZ containerized setup. Implemented zero-downtime deployment workflows and security auditing.',
        tech: ['AWS', 'Docker', 'Terraform', 'GitHub Actions'],
        color: 'from-cyan-600/30 to-blue-800/30',
        bgChar: 'AS',
    },
    {
        title: 'Starlight Branding & UX System',
        category: 'Design',
        description:
            'Comprehensive brand relaunch and custom Tailwind CSS v4 design tokens for a global logistics conglomerate, increasing visual consistency by 80%.',
        tech: ['Figma', 'UX Auditing', 'Design Tokens', 'Storybook'],
        color: 'from-rose-600/30 to-orange-800/30',
        bgChar: 'SL',
    },
    {
        title: 'CareSync Medical Portal',
        category: 'Web',
        description:
            'HIPAA-compliant doctor-patient scheduling and record system. Utilizes end-to-end payload encryption and custom PDF generators.',
        tech: ['PHP 8.4', 'Laravel', 'Alpine.js', 'Tailwind'],
        color: 'from-sky-600/30 to-indigo-800/30',
        bgChar: 'CS',
    },
];
