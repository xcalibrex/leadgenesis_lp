import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PageHeroProps {
    Icon: LucideIcon | React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    showScrollIndicator?: boolean;
}

export const PageHero = ({
    Icon,
    title,
    description,
    showScrollIndicator = true
}: PageHeroProps) => {
    return (
        <section className="h-screen snap-start pt-32 pb-20 px-4 flex flex-col items-center justify-center relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="flex flex-col items-center flex-grow justify-center"
            >
                <div className="w-16 h-16 mb-8 bg-[#0A0A0A] border border-white/5 rounded-[12px] flex items-center justify-center shadow-2xl">
                    <Icon className="w-8 h-8 text-brand-cyan" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center tracking-tight leading-[1.1] text-gradient">
                    {title}
                </h1>

                <p className="text-lg text-gray-400 max-w-2xl text-center leading-relaxed font-light">
                    {description}
                </p>
            </motion.div>

            {showScrollIndicator && (
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group hover:opacity-80 transition-opacity animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <span className="text-[11px] font-medium text-gray-500 tracking-[0.2em] uppercase">See More</span>
                    <ChevronDown className="w-5 h-5 text-white animate-bounce" />
                </div>
            )}
        </section>
    );
};
