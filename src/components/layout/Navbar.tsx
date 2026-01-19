import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Logo } from '../ui/Logo';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'How It Works', id: 'how-it-works' },
        { name: 'Pricing', id: 'pricing' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-brand-black/90 backdrop-blur-md py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div onClick={() => scrollToSection('hero')} className="cursor-pointer">
                    <Logo />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="text-[14px] font-medium text-[#999] hover:text-white transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Sign In Button / CTA */}
                <div className="hidden md:block">
                    <a
                        href="https://form.typeform.com/to/WEf158FA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="white"
                            size="sm"
                            className="!rounded-full px-6 font-semibold"
                        >
                            Sign In
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-brand-black border-b border-white/10 overflow-hidden"
                >
                    <div className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className="text-left text-white/80 hover:text-brand-cyan py-2"
                            >
                                {link.name}
                            </button>
                        ))}
                        <Button variant="white" className="w-full !rounded-full">Sign In</Button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};
