import { motion } from 'framer-motion';
import { Target, Share2, Calendar, Rocket } from 'lucide-react';

const steps = [
    {
        icon: Target,
        title: "Define.",
        description: "We identify your ideal customer profile and target market with precision."
    },
    {
        icon: Share2,
        title: "Connect.",
        description: "Our AI agents engage leads across multiple channels with human-like conversation."
    },
    {
        icon: Calendar,
        title: "Book.", // Changed from Scale to match original flow if needed, but original said Book 
        description: "Qualified appointments are booked directly onto your sales team's calendar."
    },
    {
        icon: Rocket,
        title: "Scale.",
        description: "Ramp up volume instantly without the headaches of hiring and training."
    }
];

export const ProcessGrid = () => {
    return (
        <section id="how-it-works" className="py-32 bg-brand-black">
            <div className="container mx-auto px-4">
                {/* Changed to 2x2 grid for tablet/desktop */}
                <div className="grid md:grid-cols-2 gap-[20px] max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-12 border border-[#ffffff14] bg-[#0D0D0D] rounded-[32px] hover:border-brand-cyan/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between min-h-[300px]"
                        >
                            <div>
                                <div className="mb-6">
                                    <step.icon className="w-10 h-10 text-brand-cyan stroke-[1.5]" />
                                </div>
                                <h3 className="type-h3 text-white mb-4">{step.title}</h3>
                            </div>
                            <p className="type-body text-[16px]">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
