import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-brand-dark py-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <div className="text-[20px] font-montserrat tracking-[0.05em] text-white mb-2">
                            <span className="font-normal">LEAD</span>
                            <span className="font-bold">GENESIS</span>
                        </div>
                        <p className="text-sm text-brand-muted">
                            &copy; {new Date().getFullYear()} Lead Genesis Inc. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-brand-muted hover:text-brand-cyan transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-brand-muted hover:text-brand-cyan transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-brand-muted hover:text-brand-cyan transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
