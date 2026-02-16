import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Logo } from '../ui/Logo';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    // const isAICaller = location.pathname === '/ai-caller';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (link: { name: string, path?: string, id?: string }) => {
        setMobileMenuOpen(false);
        if (link.path) {
            navigate(link.path);
            window.scrollTo(0, 0);
        } else if (link.id) {
            // If we are on the wrong page for this ID, we might need to navigate first
            // For now, assuming IDs are only relevant to current page or basic fallback
            const element = document.getElementById(link.id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Leads', path: '/leads' },
        { name: 'Data', path: '/data' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled ? "bg-black/80 backdrop-blur-md py-4 border-white/5" : "bg-transparent py-6 border-transparent"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div onClick={() => handleNavigation({ name: 'Home', path: '/' })} className="cursor-pointer">
                    <Logo />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavigation(link)}
                            className="text-[14px] font-medium text-[#999] hover:text-white transition-colors capitalize"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Sign In Button / CTA */}
                <div className="hidden md:block">
                    <a
                        href="https://cal.com/lead-genesis/discovery"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="white"
                            size="lg"
                            className="relative overflow-hidden !rounded-full h-12 px-8 font-bold text-[17px] tracking-wide transition-all hover:scale-105 shadow-[0_0_30px_rgba(76,182,198,0.3)] flex items-center gap-2 group"
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />
                            <span className="relative z-20 flex items-center gap-2">Get Leads <ArrowRight className="w-4 h-4 text-black" /></span>
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
                                onClick={() => handleNavigation(link)}
                                className="text-left text-white/80 hover:text-brand-cyan py-2 capitalize"
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
