import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import Lottie from 'lottie-react';
// @ts-ignore
import rocketAnimation from '../../assets/rocket.json';

export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
            {/* Background Glows - Reduced intensity to match original's deep black */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content - Rocket Graphic */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative flex justify-center lg:justify-end pointer-events-none order-2 lg:order-1 pr-10"
                >
                    <div className="w-full max-w-[500px] aspect-square relative">
                        <Lottie
                            animationData={rocketAnimation}
                            loop={true}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </motion.div>

                {/* Right Content - Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left z-10 max-w-xl order-1 lg:order-2"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-white/5 rounded-full pl-1 pr-4 py-1.5 mb-8 cursor-default"
                    >
                        <span className="relative flex h-2.5 w-2.5 mx-2">
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan"></span>
                        </span>
                        <span className="text-[10px] font-semibold tracking-wide text-[#CCC]">Now Accepting Limited Client Applications</span>
                    </motion.div>

                    {/* Standardized Typography */}
                    <h1 className="type-h1 mb-6 text-white">
                        <span className="text-brand-cyan">Your</span> Calendar. <br />
                        Fully Booked <br />
                        by <span className="text-brand-cyan">AI.</span>
                    </h1>

                    <p className="type-body max-w-md mb-10">
                        Your calendar filled by AI. No hiring. No burnout. Just bookings.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-14">
                        <a href="https://cal.com/lead-genesis/discovery" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="group !rounded-full !px-8 !py-6 !text-[16px] !font-bold bg-brand-cyan text-brand-black hover:bg-brand-cyan/90 shadow-none">
                                Activate Agent
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform stroke-[3]" />
                            </Button>
                        </a>

                        <Button
                            variant="ghost"
                            size="lg"
                            className="!rounded-full !px-8 !py-6 !text-[16px] !font-bold text-white hover:bg-white/5"
                            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            How it works
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
