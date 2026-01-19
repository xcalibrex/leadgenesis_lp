import { cn } from '../../lib/utils';


export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div className="w-10 h-10 relative flex items-center justify-center">
                <img
                    src="/src/assets/logo-icon.png"
                    alt="Lead Genesis Logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="text-[20px] font-montserrat tracking-[0.05em] text-white">
                <span className="font-medium">LEAD</span>
                <span className="font-bold">GENESIS</span>
            </div>
        </div>
    );
};
