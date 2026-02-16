import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "LeadGenesis delivered more qualified leads in one month than our previous provider did in six.",
        author: "Sarah Watkins",
        role: "Director, Solar Growth Agency"
    },
    {
        quote: "The exclusivity of these leads is a game changer. Our closing rate jumped 40% in the first quarter.",
        author: "Mark Thompson",
        role: "Head of Operations, Premier Solar"
    },
    {
        quote: "The AI Caller pre-vetting is incredible. My team only talks to people who are ready to move.",
        author: "David Chen",
        role: "Mortgage Broker"
    },
    {
        quote: "Simple, transparent, and high-quality. The data packs are accurate and easy to integrate into our CRM.",
        author: "Elena Rodriguez",
        role: "CEO, FinTech Solutions"
    },
    {
        quote: "Real-time leads sorted by zip code. Finally, a provider that understands our local business needs.",
        author: "James Miller",
        role: "Roofing Contractor"
    },
    {
        quote: "The quality of the B2B data packs is unmatched. We've seen a 3x increase in meeting set rates.",
        author: "Robert Wilson",
        role: "Sales Director, Enterprise SaaS"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 bg-black overflow-hidden relative">
            <div className="container mx-auto px-4 mb-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-800 mb-6 font-sans">
                        Trusted by Industry Leaders
                    </h2>
                    <div className="w-full max-w-xs mx-auto h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent"></div>
                </div>
            </div>

            <div className="relative">
                {/* Left Gradient Overlay */}
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

                {/* Right Gradient Overlay */}
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                {/* Ticker Container */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 py-4 px-4 shrink-0"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {/* First set of testimonials */}
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="w-[350px] md:w-[450px] p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col justify-between"
                            >
                                <p className="text-white/80 text-lg leading-relaxed mb-8 italic font-light">
                                    "{t.quote}"
                                </p>
                                <div>
                                    <p className="text-white font-bold text-base">{t.author}</p>
                                    <p className="text-white/40 text-sm uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for infinite loop */}
                        {testimonials.map((t, i) => (
                            <div
                                key={`dup-${i}`}
                                className="w-[350px] md:w-[450px] p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col justify-between"
                            >
                                <p className="text-white/80 text-lg leading-relaxed mb-8 italic font-light">
                                    "{t.quote}"
                                </p>
                                <div>
                                    <p className="text-white font-bold text-base">{t.author}</p>
                                    <p className="text-white/40 text-sm uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Second motion div for seamless tiling */}
                    <motion.div
                        className="flex gap-8 py-4 px-4 shrink-0"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {testimonials.map((t, i) => (
                            <div
                                key={`tile-${i}`}
                                className="w-[350px] md:w-[450px] p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col justify-between"
                            >
                                <p className="text-white/80 text-lg leading-relaxed mb-8 italic font-light">
                                    "{t.quote}"
                                </p>
                                <div>
                                    <p className="text-white font-bold text-base">{t.author}</p>
                                    <p className="text-white/40 text-sm uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        ))}
                        {testimonials.map((t, i) => (
                            <div
                                key={`tile-dup-${i}`}
                                className="w-[350px] md:w-[450px] p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col justify-between"
                            >
                                <p className="text-white/80 text-lg leading-relaxed mb-8 italic font-light">
                                    "{t.quote}"
                                </p>
                                <div>
                                    <p className="text-white font-bold text-base">{t.author}</p>
                                    <p className="text-white/40 text-sm uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
