import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Logo } from '../ui/Logo';
import { useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="18" height="2" rx="1" fill="currentColor" />
        <rect x="3" y="15" width="12" height="2" rx="1" fill="currentColor" />
    </svg>
);

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isInternalPage = ['/about', '/leads', '/data'].includes(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled || (isInternalPage && mobileMenuOpen) ? "bg-brand-black/80 backdrop-blur-md border-b border-white/5 py-4" :
                    isInternalPage ? "bg-brand-black md:bg-transparent border-b border-white/5 md:border-none py-4 md:py-6" :
                        "bg-transparent py-6 border-transparent"
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
                    <button onClick={() => setMobileMenuOpen(true)} className="text-white p-2">
                        <MenuIcon />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] md:hidden"
                        />
                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-full xs:w-[80%] max-w-[400px] bg-[#000000] z-[100] md:hidden flex flex-col border-l border-white/5"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 to-transparent pointer-events-none" />
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-16 relative z-10">
                                    <Logo />
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white p-2 border border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <div className="flex flex-col gap-4 relative z-10">
                                    {navLinks.map((link, i) => (
                                        <motion.button
                                            key={link.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            onClick={() => handleNavigation(link)}
                                            className={cn(
                                                "text-left py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-between group",
                                                location.pathname === link.path
                                                    ? "bg-brand-cyan/10 text-brand-cyan"
                                                    : "text-white/60 hover:text-white hover:bg-white/5"
                                            )}
                                        >
                                            <span className="text-xl font-medium tracking-tight capitalize">
                                                {link.name}
                                            </span>
                                            {location.pathname === link.path && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(76,182,198,0.5)]" />
                                            )}
                                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </motion.button>
                                    ))}
                                </div>

                                <div className="mt-auto pt-8 border-t border-white/5 relative z-10">
                                    <a
                                        href="https://cal.com/lead-genesis/discovery"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <Button
                                            variant="white"
                                            className="w-full !rounded-full h-16 font-bold text-lg flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(76,182,198,0.2)]"
                                        >
                                            Get Leads <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
