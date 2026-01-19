import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

interface FeatureSectionProps {
    title: string;
    description: string;
    features: string[];
    imageSrc: string;
    reversed?: boolean;
}

export const FeatureSection = ({ title, description, features, imageSrc, reversed = false }: FeatureSectionProps) => {
    return (
        <section className="py-32 overflow-hidden bg-brand-black">
            <div className="container mx-auto px-4">
                <div className={cn(
                    "flex flex-col gap-20 items-center",
                    reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                )}>
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="type-h2 mb-8 text-white leading-tight">
                            {title}
                        </h2>
                        <p className="type-body mb-10">
                            {description}
                        </p>
                        <ul className="space-y-6 mb-12">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-brand-cyan/10 flex items-center justify-center flex-shrink-0 border border-brand-cyan/20">
                                        <Check className="text-brand-cyan w-3.5 h-3.5 stroke-[3]" />
                                    </div>
                                    <span className="text-white/90 font-medium text-[17px]">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className="!px-8 !py-6 !text-lg !rounded-full shadow-[0_0_30px_rgba(76,182,198,0.2)]">
                            Learn more
                        </Button>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative w-full"
                    >
                        <div className="relative z-10 rounded-[32px] border border-white/5 bg-[#0D0D0D] p-3 shadow-2xl overflow-hidden group hover:border-white/10 transition-colors duration-500">
                            {/* Screen Glare */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />

                            <img
                                src={imageSrc}
                                alt={title}
                                className="rounded-[24px] w-full h-auto object-cover border border-white/5"
                                onError={(e) => {
                                    // Fallback visual
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    (e.target as HTMLImageElement).parentElement!.innerHTML += `
                      <div class="aspect-video bg-[#111] flex items-center justify-center rounded-[24px] border border-white/5">
                        <span class="text-white/20 font-mono text-lg">Feature Mockup</span>
                      </div>
                    `;
                                }}
                            />
                        </div>
                        {/* Decorative Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-cyan/10 rounded-full blur-[100px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
