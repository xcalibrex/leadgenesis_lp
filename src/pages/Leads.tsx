import { Funnel, Zap, ChevronDown } from 'lucide-react';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { CTASection } from '../components/sections/CTASection';
import { PageHero } from '../components/layout/PageHero';

export const Leads = () => {
    return (
        <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-black">
            {/* Hero Section */}
            {/* Hero Section */}
            <PageHero
                Icon={Funnel}
                title="Live Leads"
                description="Connect instantly with high-intent prospects ready to speak with someone. Our direct integration service delivers pre-qualified leads directly to your sales team."
            />

            {/* Performance Section */}
            <section className="h-screen snap-start px-4 bg-black flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    {/* Bolt Icon with Glow */}
                    <div className="relative mb-8 inline-block">
                        <div className="absolute inset-0 bg-brand-cyan/20 blur-2xl rounded-full" />
                        <div className="relative w-16 h-16 bg-[#0A0A0A] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
                            <Zap className="w-8 h-8 text-brand-cyan fill-brand-cyan/20" />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient tracking-tight">Performance Driven Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        {[
                            { label: 'Monthly Leads', value: '10,000' },
                            { label: 'Lead to Appt', value: '24%' },
                            { label: 'Avg ROI', value: '3x' }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
                                <div className="text-4xl font-bold text-brand-cyan mb-2">{stat.value}</div>
                                <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Background Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] pointer-events-none rounded-full" />

                {/* Section Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:hidden text-white/30 animate-bounce">
                    <ChevronDown className="w-6 h-6" />
                </div>
            </section>

            {/* Verticals Section (From Index) */}
            <section className="snap-start py-32 bg-black border-t border-white/5">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-3xl md:text-6xl font-medium text-gradient mb-6 tracking-tight">Verticals</h2>
                        <div className="w-full max-w-xs mx-auto h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent mb-6"></div>
                        <p className="text-[#888] max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Precision-targeted lead generation across high-growth industries.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12 lg:gap-y-20 text-left max-w-5xl mx-auto">
                        {[
                            {
                                name: 'Solar & Battery',
                                description: 'Generating high-intent residential and commercial solar leads through targeted digital outreach and pre-qualification.'
                            },
                            {
                                name: 'Mortgage Refinance',
                                description: 'Exclusive refinance and purchase money prospects identified through predictive modeling and credit-vetting.'
                            },
                            {
                                name: 'Roofing',
                                description: 'Real-time lead generation for storm restoration and replacement projects. We target high-demand regions.'
                            },
                            {
                                name: 'Water Filtration',
                                description: 'Qualified homeowners seeking advanced whole-home purification systems. Pre-vetted for interest and ownership.'
                            }
                        ].map((vertical, idx) => (
                            <motion.div
                                key={vertical.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.21, 0.45, 0.32, 0.9] }}
                                className="group flex flex-col items-start"
                            >
                                <h4 className="text-2xl md:text-3xl font-medium text-gradient tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                    {vertical.name}
                                </h4>
                                <p className="text-gray-400 text-lg leading-relaxed font-light">
                                    {vertical.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:hidden text-white/30 animate-bounce">
                    <ChevronDown className="w-6 h-6" />
                </div>
            </section>

            {/* CTA Section */}
            <section className="snap-start bg-black">
                <CTASection
                    title="Ready to Capture High-Intent Leads?"
                    description="Join the top performing companies using our live transfer network to scale their revenue."
                    buttonText="Apply For Leads"
                />
            </section>

            {/* Footer Section */}
            <section className="snap-start pt-20">
                <Footer />
            </section>
        </div>
    );
};
