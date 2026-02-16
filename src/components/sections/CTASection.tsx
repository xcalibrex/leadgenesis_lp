import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface CTASectionProps {
    title?: string;
    description?: string;
    buttonText?: string;
    href?: string;
}

export const CTASection = ({
    title = "Accepting Limited Applications",
    description = "Request access to the AI tool that gives your company an unfair advantage.",
    buttonText = "Apply For Access",
    href = "https://cal.com/lead-genesis/discovery"
}: CTASectionProps) => {
    return (
        <section id="contact" className="py-32 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                    className="relative rounded-[32px] overflow-hidden p-[1px] bg-gradient-to-b from-brand-cyan/50 to-transparent"
                >
                    <div className="bg-[#050505] rounded-[31px] py-24 px-6 text-center relative overflow-hidden">

                        {/* Glow effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-brand-cyan/5 blur-[100px] pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-4xl md:text-5xl font-sans font-medium bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-800 mb-6 tracking-tight">
                                {title}
                            </h2>
                            <p className="text-[#999] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-medium">
                                {description}
                            </p>

                            <a href={href} target="_blank" rel="noopener noreferrer">
                                <Button
                                    className="w-full md:w-auto relative overflow-hidden !rounded-full h-14 px-10 !bg-white !text-black font-bold text-[17px] tracking-wide transition-all hover:scale-105 shadow-[0_0_40px_rgba(76,182,198,0.4)] flex items-center justify-center gap-2 group"
                                >
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />
                                    <span className="relative z-20 flex items-center justify-center gap-2">
                                        {buttonText}
                                        <ArrowRight className="w-5 h-5 stroke-[3]" />
                                    </span>
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
