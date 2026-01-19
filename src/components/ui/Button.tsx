import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "bg-brand-cyan text-brand-black hover:bg-brand-cyan/90 shadow-[0_0_20px_rgba(76,182,198,0.3)]",
                secondary: "bg-brand-purple text-white hover:bg-brand-purple/90 shadow-[0_0_20px_rgba(124,58,237,0.3)]",
                outline: "border border-white/10 bg-transparent hover:bg-white/5 text-white",
                ghost: "hover:bg-white/5 text-white",
                white: "bg-white text-black hover:bg-white/90 shadow-lg", // Added white variant
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 px-4",
                lg: "h-14 px-8 text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

// We combine standard button props with framer-motion props
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> &
    HTMLMotionProps<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            >
                {children}
            </motion.button>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
