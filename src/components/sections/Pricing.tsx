import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

const plans = [
    {
        type: 'Part Time',
        name: 'Starter',
        description: 'Ideal for smaller teams activating their database with AI follow ups.',
        features: ['20 hour/week', 'One-time set up fee'],
        cta: 'Apply for Access',
        popular: false,
        buttonStyle: 'outline'
    },
    {
        type: 'Full Time',
        name: 'Growth',
        description: 'For established clinics or studios needing daily pipeline flow.',
        features: ['40 hour/week', 'One-time setup fee'],
        cta: 'Join the Waitlist',
        popular: true,
        buttonStyle: 'white'
    }
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-32 bg-brand-black relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-[#111] border border-white/10 rounded-full px-4 py-1.5 mb-6">
                        <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                        <span className="type-label text-white/80">Trusted by Growth Driven Teams</span>
                    </div>

                    <h2 className="type-h2 mb-4 text-white">Pricing</h2>
                    <p className="type-body text-xl text-[#666]">By Invitation. Built for Teams Ready to Scale.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <div className="group relative" key={index}>
                            {/* Gradient Border Background Wrapper */}
                            <div
                                className={cn(
                                    "absolute inset-0 rounded-[26px] opacity-100",
                                    "bg-gradient-to-b from-[#2E8B99] via-[#000] to-[#000]",
                                    "p-[2px]"
                                )}
                            />

                            {/* Content Container */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "relative h-full w-full bg-[#0A0A0A] rounded-[24px] p-8 flex flex-col",
                                    "hover:bg-[#0F0F0F] transition-colors duration-300"
                                )}
                            >
                                <div className="mb-8">
                                    <div className="text-[#666] text-sm font-medium mb-2 font-inter">{plan.type}</div>
                                    <h3 className="type-h3 text-white mb-6">{plan.name}</h3>
                                    <p className="type-body text-[15px] min-h-[45px] text-[#888]">{plan.description}</p>
                                </div>

                                <div className="flex-1">
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-[14px]">
                                                <Check className="text-brand-cyan w-4 h-4 stroke-[3]" />
                                                <span className="text-[#DDD] font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a href="https://form.typeform.com/to/WEf158FA" target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                                    <Button
                                        variant={plan.buttonStyle === 'white' ? 'white' : 'outline'}
                                        className={cn(
                                            "w-full !rounded-full !py-6 font-bold text-[15px] tracking-wide shadow-none"
                                        )}
                                    >
                                        {plan.cta}
                                    </Button>
                                </a>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 text-[#666] text-sm font-medium">
                    Every client receives a dedicated AI Setter, fully integrated to your CRM and calendar.
                </div>
            </div>
        </section>
    );
};
