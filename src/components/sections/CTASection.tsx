import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const CTASection = () => {
    return (
        <section id="contact" className="py-32 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[32px] overflow-hidden p-[1px] bg-gradient-to-b from-brand-cyan/50 to-transparent"
                >
                    <div className="bg-[#050505] rounded-[31px] py-24 px-6 text-center relative overflow-hidden">

                        {/* Glow effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-brand-cyan/5 blur-[100px] pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-6 tracking-tight">
                                Accepting Limited Applications
                            </h2>
                            <p className="text-[#999] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-inter font-medium">
                                Request access to the AI tool that gives your company an unfair advantage.
                            </p>

                            <a href="https://form.typeform.com/to/WEf158FA" target="_blank" rel="noopener noreferrer">
                                <Button
                                    className="!bg-brand-cyan !text-black hover:!bg-brand-cyan/90 !rounded-full px-8 py-6 text-[15px] font-bold tracking-wide flex items-center gap-2"
                                >
                                    Apply For Access
                                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
