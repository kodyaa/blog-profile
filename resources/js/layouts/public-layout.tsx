import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import ThemeToggle from '@/components/theme-toggle';
import { Button } from '@heroui/react';
import { Menu, X, Home, Briefcase, Layers, Users2, Mail, Building2 } from 'lucide-react';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Services', href: '/services', icon: Briefcase },
        { name: 'Portfolio', href: '/portfolio', icon: Layers },
        { name: 'About Us', href: '/about', icon: Users2 },
        { name: 'Contact', href: '/contact', icon: Mail },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
            {/* Header / Navbar */}
            <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
                <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo / Brand */}
                    <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
                        <img src="/Logo2.png" alt="Logo" className="h-8 w-auto object-contain" />
                        <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
                            Portofolia Blog by Kodya
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = url === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'text-primary font-semibold'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />
                        
                        <Link href="/contact">
                            <Button size="sm" className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity rounded-full px-5">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex md:hidden items-center gap-2">
                        <ThemeToggle />
                        <Button
                            isIconOnly
                            variant="ghost"
                            size="sm"
                            onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                            className="hover:bg-default-hover text-foreground"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-200">
                        <div className="space-y-1 px-4 py-4">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = url === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                                            isActive
                                                ? 'bg-primary/10 text-primary font-semibold'
                                                : 'text-muted-foreground hover:bg-default-hover hover:text-foreground'
                                        }`}
                                    >
                                        <Icon className="h-5 w-5" />
                                        {link.name}
                                    </Link>
                                );
                            })}
                            
                            <hr className="my-3 border-border/40" />

                            <div className="px-3">
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                                    <Button fullWidth className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium">
                                        Get in Touch
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-1 container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-border/40 py-8 bg-default-50/50 mt-auto">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Portofolia Blog by Kodya. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <a href="https://github.com/kodyaa/blog-profile" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-foreground">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
