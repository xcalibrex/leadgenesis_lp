import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { cn } from '../../lib/utils';
import demoAudioSrc from '../../assets/audio/demo.mp3';
// @ts-ignore
import solarAudioSrc from '../../assets/audio/solar.mp3';

// Using demo audio for Real Estate as placeholder since site didn't have a distinct one available
const industries = [
    { id: 'dentist', label: 'Dentist', src: demoAudioSrc },
    { id: 'solar', label: 'Solar', src: solarAudioSrc },
    { id: 'realestate', label: 'Real Estate', src: demoAudioSrc },
];

export const DemoWidget = () => {
    const [activeTab, setActiveTab] = useState('dentist');
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const currentAudioSrc = industries.find(i => i.id === activeTab)?.src;

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    }, [activeTab]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section id="demo" className="py-32 bg-brand-black relative">
            <audio
                ref={audioRef}
                src={currentAudioSrc}
                onEnded={() => setIsPlaying(false)}
            />

            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="type-h2 mb-20 text-white"
                >
                    Listen to a <span className="text-brand-cyan">Demo</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-[#181818] border border-white/5 rounded-[32px] p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl"
                >
                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mb-16">
                        {industries.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative tracking-wide",
                                    activeTab === tab.id ? "text-white" : "text-brand-muted hover:text-white"
                                )}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-[#333] border border-white/10 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Player Visualizer */}
                    <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
                        <button
                            onClick={togglePlay}
                            className="w-20 h-20 rounded-full bg-cyan-gradient flex items-center justify-center shadow-[0_0_30px_rgba(76,182,198,0.3)] hover:shadow-[0_0_50px_rgba(76,182,198,0.5)] hover:scale-105 transition-all duration-300 group"
                        >
                            <AnimatePresence mode="wait">
                                {isPlaying ? (
                                    <motion.div
                                        key="pause"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >
                                        <Pause fill="white" className="text-white w-8 h-8" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="play"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >
                                        <Play fill="white" className="text-white w-8 h-8 ml-1" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* Audio Waveform Animation Mock */}
                        <div className="h-16 flex items-center gap-[3px] justify-center opacity-80">
                            {[...Array(40)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        height: isPlaying ? [
                                            Math.random() * 30 + 10,
                                            Math.random() * 60 + 20,
                                            Math.random() * 30 + 10
                                        ] : 8,
                                        backgroundColor: isPlaying ? '#4CB6C6' : '#333'
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: i * 0.02
                                    }}
                                    className="w-1.5 rounded-full bg-brand-muted/20"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
