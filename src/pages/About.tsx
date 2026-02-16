import { ChevronDown, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { LogoIcon } from '../components/ui/Logo';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/layout/PageHero';

export const About = () => {
    return (
        <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-black">
            {/* Hero Section */}
            <PageHero
                Icon={LogoIcon}
                title="About Lead Genesis"
                description="We are a data-driven agency committed to fueling the growth of ambitious companies through high-intent leads and cutting-edge AI solutions."
            />

            {/* Our Vision Section */}
            <section className="h-screen snap-start px-4 bg-black flex flex-col items-center justify-center border-t border-white/5 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold mb-8 text-gradient uppercase tracking-widest">Our Vision</h2>
                    <p className="text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed font-light">
                        To revolutionize how businesses connect with their customers by providing high-fidelity data and the world's most efficient lead generation systems.
                    </p>
                    <div className="flex flex-wrap justify-center gap-12">
                        {['Innovation', 'Transparency', 'Excellence', 'Partnership'].map((value, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full bg-brand-cyan/5 flex items-center justify-center mb-4 border border-brand-cyan/10 group-hover:border-brand-cyan/30 transition-colors duration-500">
                                    <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_15px_rgba(76,182,198,0.6)] animate-pulse" />
                                </div>
                                <span className="text-white/80 font-medium tracking-wide group-hover:text-white transition-colors">{value}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
                {/* Bottom Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up">
                    <span className="text-[10px] font-medium text-gray-600 tracking-[0.2em] uppercase">Scroll to Team</span>
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
            </section>

            {/* Our Team Title Section */}
            <section className="h-screen snap-start px-4 bg-[#050505] flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-cyan/5 via-transparent to-transparent opacity-50"></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5">
                        <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest leading-none">Leadership</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient tracking-tight">Meet the Team</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                        The minds behind Lead Genesis. Bridging the gap between raw data and scalable revenue.
                    </p>
                </motion.div>
                {/* Bottom Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up">
                    <ChevronDown className="w-6 h-6 text-brand-cyan animate-bounce" />
                </div>
            </section>

            {/* Dylan - Director & Co-Founder */}
            <section className="h-screen snap-start px-4 md:px-20 bg-black flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                    className="container mx-auto"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h3 className="text-brand-cyan font-bold uppercase tracking-[0.3em] text-xs mb-4">Director & Co-Founder</h3>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient italic pr-4">Dylan</h2>

                            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed max-w-xl">
                                <p>
                                    From door knocking solar lead gen to closing to marketing to product development, Dylan's extensive career has given him an unique and contrarian approach to business.
                                </p>
                                <p className="italic text-white/90 border-l-2 border-brand-cyan pl-6 py-2 bg-white/[0.02]">
                                    "In a world of noise, the most powerful marketing isn't the loudest, it's the most relevant."
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                                        <Linkedin className="w-4 h-4 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-brand-cyan/20 rounded-[20px] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                                <div className="w-[280px] h-[380px] md:w-[350px] md:h-[450px] bg-gradient-to-br from-[#111] to-black rounded-[20px] border border-white/10 relative z-10 overflow-hidden flex items-center justify-center">
                                    <div className="text-gray-800 text-6xl md:text-7xl font-bold opacity-10">DYLAN</div>
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* Scroll hint for next founder */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
            </section>

            {/* David - Director & Co-Founder */}
            <section className="h-screen snap-start px-4 md:px-20 bg-[#020202] flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                    className="container mx-auto"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-brand-cyan/20 rounded-[20px] blur-3xl opacity-10 group-hover:opacity-40 transition-opacity duration-700"></div>
                                <div className="w-[280px] h-[380px] md:w-[350px] md:h-[450px] bg-gradient-to-br from-[#0A0A0A] to-black rounded-[20px] border border-white/10 relative z-10 overflow-hidden flex items-center justify-center">
                                    <div className="text-gray-800 text-6xl md:text-7xl font-bold opacity-10 uppercase">DAVID</div>
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-left">
                            <h3 className="text-brand-cyan font-bold uppercase tracking-[0.3em] text-sm mb-4">Director & Co-Founder</h3>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient italic pr-4">David</h2>

                            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed max-w-xl">
                                <p>
                                    After a vast and successful career in the corporate sector handling data analytics and backend architecture, David's resourcefulness is a key part of what keeps the wheels rolling at Lead Genesis.
                                </p>
                                <p className="text-white/80 font-light">
                                    His expertise in architecting complex data pipelines ensures that Lead Genesis remains at the cutting edge.
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                                        <Linkedin className="w-4 h-4 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Footer Section */}
            <section className="snap-start pt-20">
                <Footer />
            </section>
        </div >
    );
};
