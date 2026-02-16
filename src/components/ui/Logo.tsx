import { cn } from '../../lib/utils';
import logoIcon from '../../assets/logo-icon.png';

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <div className={cn("w-10 h-10 relative flex items-center justify-center", className)}>
            <img
                src={logoIcon}
                alt="Lead Genesis Logo"
                className="w-full h-full object-contain"
            />
        </div>
    );
};

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <LogoIcon />
            <div className="text-[20px] font-montserrat tracking-[0.05em] text-white">
                <span className="font-normal">LEAD</span>
                <span className="font-bold">GENESIS</span>
            </div>
        </div>
    );
};
