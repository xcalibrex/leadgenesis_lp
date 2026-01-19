import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface ScaleOnScrollProps {
    children: ReactNode;
    className?: string;
    startScale?: number;
}

export const ScaleOnScroll = ({ children, className = "", startScale = 0.85 }: ScaleOnScrollProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [startScale, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

    // Add physics spring for smoother feel matching the original
    const smoothScale = useSpring(scale, { stiffness: 100, damping: 20, mass: 0.5 });
    const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });

    return (
        <motion.div
            ref={ref}
            style={{ scale: smoothScale, opacity: smoothOpacity }}
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    );
};
