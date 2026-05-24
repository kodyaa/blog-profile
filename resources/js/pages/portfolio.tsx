import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Card, Button, Chip, Typography } from '@heroui/react';
import { Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { categories, projects } from '@/data/portfolio';
import type { ProjectCategory } from '@/data/portfolio';


export default function Portfolio() {
    const [filter, setFilter] = useState<ProjectCategory>('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <>
            <Head title="Our Portfolio - Portofolia Blog by Kodya" />

            {/* Header section */}
            <section className="py-12 md:py-16 border-b border-border/40 text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-indigo-500" />
                    <Typography type="body-xs" weight="semibold" className="text-indigo-500 uppercase tracking-widest">
                        Our Legacy
                    </Typography>
                </div>
                <Typography type="h1" weight="bold" align="center" className="text-4xl sm:text-5xl font-black tracking-tight">
                    Case Studies &amp;{' '}
                    <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        Digital Triumphs
                    </span>
                </Typography>
                <Typography type="body" color="muted" align="center" className="text-lg leading-relaxed">
                    Explore the systems we have deployed. Each card represents a custom solution engineered to improve speed, design appeal, and operational productivity.
                </Typography>
            </section>

            {/* Filters Section */}
            <section className="py-8 flex flex-wrap items-center justify-center gap-2 border-b border-border/40">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        size="sm"
                        variant={filter === cat ? 'primary' : 'ghost'}
                        onPress={() => setFilter(cat)}
                        className={`rounded-full px-5 font-semibold transition-all ${
                            filter === cat 
                                ? 'bg-primary text-primary-foreground shadow-md' 
                                : 'hover:bg-default-hover text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        {cat}
                    </Button>
                ))}
            </section>

            {/* Projects Grid */}
            <section className="py-16 space-y-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((proj, i) => (
                        <Card 
                            key={i} 
                            className="border border-border/40 bg-surface/30 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="space-y-6">
                                {/* Simulated image with CSS gradient and large letter backdrop */}
                                <div className={`h-48 bg-linear-to-br ${proj.color} relative overflow-hidden flex items-center justify-center`}>
                                    <span className="text-6xl font-black text-white/10 uppercase tracking-widest select-none">
                                        {proj.bgChar}
                                    </span>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                    <Chip size="sm" variant="secondary" className="absolute top-4 right-4 bg-background/80 backdrop-blur-xs border border-border/20 text-xs font-semibold px-2 py-0.5 rounded-full">
                                        {proj.category}
                                    </Chip>
                                </div>

                                <div className="px-6 space-y-3">
                                    <Typography
                                        type="h4"
                                        weight="bold"
                                        className="group-hover:text-primary transition-colors flex items-center gap-1.5 justify-between"
                                    >
                                        {proj.title}
                                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all text-primary shrink-0" />
                                    </Typography>
                                    <Typography type="body-sm" color="muted" className="leading-relaxed">
                                        {proj.description}
                                    </Typography>
                                </div>
                            </div>

                            <div className="px-6 pb-6 pt-4 mt-auto">
                                <div className="flex flex-wrap gap-1 border-t border-border/10 pt-4">
                                    {proj.tech.map((t) => (
                                        <Chip key={t} size="sm" variant="secondary" className="border border-border text-xs px-2 py-0 rounded-md">
                                            {t}
                                        </Chip>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-16 space-y-3">
                        <Typography type="body" color="muted">No projects found in this category.</Typography>
                        <Button variant="outline" onPress={() => setFilter('All')} className="rounded-full">
                            Reset Filters
                        </Button>
                    </div>
                )}
            </section>

            {/* Bottom Section */}
            <section className="py-12 border-t border-border/40 text-center space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                    <Typography type="body-xs" weight="semibold" className="text-indigo-500">
                        Have a customized roadmap?
                    </Typography>
                </div>
                <Typography type="h3" weight="bold" align="center">
                    Let's Add Your Project to This Gallery
                </Typography>
                <Typography type="body" color="muted" align="center" className="max-w-md mx-auto">
                    We deliver customized development cycles with dedicated support from startup blueprints to enterprise scaling.
                </Typography>
            </section>
        </>
    );
}
