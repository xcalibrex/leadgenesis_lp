
import { motion } from 'framer-motion';

export const AgentVisual = () => {
    return (
        <div className="relative w-full max-w-[400px] aspect-square mx-auto p-4 flex items-center justify-center">
            {/* Circle Container */}
            <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border border-brand-cyan/30 shadow-2xl bg-black">

                {/* Horizon Split - Top Half Gradient, Bottom Half Dark */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(76,182,198,0.15)_0%,rgba(76,182,198,0)_50%,rgba(0,0,0,0.8)_50%,rgba(0,0,0,1)_100%)]" />

                {/* Central AI Text */}
                <div className="absolute inset-0 flex items-center justify-center flex-col z-20">
                    <motion.span
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-5xl font-bold font-montserrat text-white tracking-tight leading-none mb-1"
                    >
                        AI
                    </motion.span>
                    <div className="bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded-[4px]">
                        <span className="text-[9px] text-brand-cyan font-bold tracking-[0.2em] uppercase">Agent Active</span>
                    </div>
                </div>

                {/* Subtle Scan Line */}
                <motion.div
                    initial={{ top: "0%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-brand-cyan/5 to-transparent pointer-events-none z-10"
                />
            </div>

            {/* Floating Notification Icon on relative orbit */}
            <motion.div
                className="absolute top-[20%] left-[10%] z-30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-10 h-10 bg-[#111] border border-white/10 rounded-xl flex items-center justify-center shadow-2xl skew-y-6">
                    <span className="text-lg">📅</span>
                </div>
            </motion.div>
        </div>
    );
};
