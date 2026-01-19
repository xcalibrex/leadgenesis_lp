import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const faqs = [
    {
        question: "Does the AI really sound human?",
        answer: "Yes. Our AI uses advanced voice synthesis to create indistinguishable human-like intonation, managing pauses and interruptions naturally."
    },
    {
        question: "Do I need technical skills to set this up?",
        answer: "Not at all. We handle the technical integration. You simply define your ideal customer profile and providing the calendar link."
    },
    {
        question: "Can it integrate with my CRM?",
        answer: "We support integrations with HubSpot, Salesforce, Pipedrive, and GoHighLevel out of the box."
    },
    {
        question: "What happens if the AI doesn't know the answer?",
        answer: "The AI is trained to handle objections and unknowns gracefully, and can escalate to a human agent if a specific threshold is reached."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="py-24 bg-brand-dark">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-white/10 last:border-0"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
                            >
                                <span className={cn(
                                    "text-lg font-medium transition-colors",
                                    openIndex === index ? "text-brand-cyan" : "text-white group-hover:text-brand-cyan/80"
                                )}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={cn(
                                        "text-brand-muted transition-transform duration-300",
                                        openIndex === index ? "rotate-180 text-brand-cyan" : ""
                                    )}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-brand-muted leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
