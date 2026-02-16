import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';
import { Testimonials } from '../components/sections/Testimonials';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import heroVideo from '../assets/video/video_2.mp4';
import dataPacksImg from '../assets/images/data_packs_img.jpg';
import leadsImg from '../assets/images/leads_2.jpg';
import leader1 from '../assets/images/leader_1.png';
import leader2 from '../assets/images/leader_2.png';
import leader3 from '../assets/images/leader_3.png';
import leader4 from '../assets/images/leader_4.png';

export const Home = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.9;
        }
    }, []);

    return (
        <div className="pt-20 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80"
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>

                    {/* Dark Overlay for readability */}
                    <div className="absolute inset-0 bg-black/70"></div>

                    {/* Top Fade Gradient */}
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-10"></div>

                    {/* Bottom Fade Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    {/* Header Group */}
                    <div className="mb-6 md:mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.45, 0.32, 0.9] }}
                            className="font-sans font-medium text-white mb-6 max-w-5xl mx-auto tracking-tight leading-[1.1]"
                        >
                            <span className="block text-[2.75rem] md:text-7xl lg:text-[5.5rem] text-gradient pb-6 md:pb-4">
                                High-Intent Leads <br />
                                for Fast Growing Teams
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.45, 0.32, 0.9] }}
                            className="font-sans text-base md:text-xl text-[#ccc] max-w-3xl mx-auto leading-relaxed font-light px-4"
                        >
                            Scale Your Growth with Live Exclusive Leads, Premium Data & AI Tools
                        </motion.p>
                    </div>

                    {/* Action Group */}
                    <div className="flex flex-col items-center">
                        {/* Trust Element */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.45, 0.32, 0.9] }}
                            className="inline-flex items-center gap-3 mb-6 bg-white/[0.03] border border-white/10 rounded-full pl-2 pr-6 py-2"
                        >
                            <div className="flex -space-x-3">
                                {[leader1, leader2, leader3, leader4].map((img, i) => (
                                    <div key={i} className="w-9 h-9 rounded-full border-2 border-brand-black bg-brand-dark overflow-hidden relative shadow-xl">
                                        <img
                                            src={img}
                                            alt={`Industry Leader ${i + 1}`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-start text-left">
                                <div className="flex items-center gap-1">
                                    <span className="text-white font-bold text-sm">4.9/5</span>
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <svg key={i} className="w-3 h-3 text-brand-cyan fill-brand-cyan" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <span className="text-[11px] font-medium text-white/60">Trusted by 500+ Reviews</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.45, 0.32, 0.9] }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4"
                        >
                            <div className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="relative overflow-hidden rounded-full h-14 px-10 w-full bg-white text-black font-bold text-[17px] tracking-wide transition-all hover:scale-105 shadow-[0_0_40px_rgba(76,182,198,0.4)] flex items-center justify-center gap-2 group"
                                >
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />
                                    <span className="relative z-20 flex items-center gap-2">Get Leads <ArrowRight className="w-5 h-5 text-black" /></span>
                                </Button>
                            </div>
                            <a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full sm:w-auto">
                                <Button variant="ghost" size="lg" className="rounded-full h-14 px-8 w-full text-white/70 hover:text-white hover:bg-white/5 font-medium text-[15px] tracking-wide border border-white/10 hover:border-white/20 transition-all">
                                    View Products
                                </Button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Verticals Section - Full Width Premium Experience */}
            <section id="products" className="py-24 bg-black relative overflow-hidden">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                    className="text-center mb-12 lg:mb-32 container mx-auto px-4 relative z-10"
                >
                    <h2 className="text-3xl md:text-6xl font-medium text-gradient mb-6 tracking-tight">
                        Our Products
                    </h2>
                    <div className="w-full max-w-xs mx-auto h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent mb-6"></div>
                    <p className="text-[#888] max-w-2xl mx-auto text-base md:text-lg font-light">
                        Precision-targeted solutions to fuel your sales pipeline.
                    </p>
                </motion.div>


                <div className="flex flex-col mb-32">
                    {/* Data Packs Section - Full Width */}
                    <div
                        className="group relative w-full overflow-hidden bg-black py-12 lg:py-32 border-b border-white/5 lg:border-none"
                    >
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="relative lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                {/* Background Image for Mobile */}
                                <div className="absolute inset-x-0 -inset-y-24 lg:hidden z-0">
                                    <img
                                        src={dataPacksImg}
                                        alt=""
                                        className="w-full h-full object-cover opacity-20"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                                    className="order-2 lg:order-1 text-left relative z-10"
                                >
                                    <h3 className="text-3xl md:text-5xl font-sans font-medium text-gradient mb-6 tracking-tight">Data Packs</h3>
                                    <p className="text-[#999] text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium lg:font-normal">
                                        Access verified, high-intent B2B data tailored to your ICP. We provide phone numbers, emails, and direct dials for decision-makers with 99% accuracy.
                                    </p>

                                    <ul className="space-y-5 mb-12 text-left">
                                        {['99% Accuracy Guarantee', 'Real-time Verification', 'Custom Segmentation'].map((item) => (
                                            <li key={item} className="flex items-center text-white/90">
                                                <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center mr-4">
                                                    <CheckCircle className="w-4 h-4 text-brand-cyan" />
                                                </div>
                                                <span className="text-lg font-medium lg:font-normal">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a href="https://cal.com/lead-genesis/discovery" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button className="w-full sm:w-auto relative overflow-hidden rounded-full h-14 px-10 bg-white text-black font-bold text-[17px] tracking-wide transition-all hover:scale-105 shadow-[0_0_40px_rgba(76,182,198,0.4)] flex items-center justify-center gap-2 group">
                                            {/* Shimmer Effect */}
                                            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />
                                            <span className="relative z-20 flex items-center justify-center gap-2">Get Data <ArrowRight className="w-6 h-6 text-black" /></span>
                                        </Button>
                                    </a>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                                    className="hidden lg:flex order-1 lg:order-2 relative h-[400px] lg:h-[500px] overflow-hidden items-center justify-center"
                                >
                                    <img
                                        src={dataPacksImg}
                                        alt="Data Packs"
                                        className="w-full h-full object-cover rounded-2xl opacity-80"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>


                    {/* Live Exclusive Leads Section - Full Width */}
                    <div
                        className="group relative w-full overflow-hidden bg-black py-12 lg:py-32"
                    >
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="relative lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                {/* Background Image for Mobile */}
                                <div className="absolute inset-x-0 -inset-y-24 lg:hidden z-0">
                                    <img
                                        src={leadsImg}
                                        alt=""
                                        className="w-full h-full object-cover opacity-20"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                                    className="hidden lg:flex relative h-[400px] lg:h-[500px] overflow-hidden items-center justify-center"
                                >
                                    <img
                                        src={leadsImg}
                                        alt="Live Exclusive Leads"
                                        className="w-full h-full object-cover rounded-2xl opacity-80"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                                    className="text-left relative z-10"
                                >
                                    <h3 className="text-3xl md:text-5xl font-medium text-gradient mb-6 tracking-tight">Live Leads</h3>
                                    <p className="text-[#999] text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium lg:font-normal">
                                        Scale your performance with our premium pay-per-lead model. We deliver 100% exclusive prospects directly into your workflow.
                                    </p>

                                    <ul className="space-y-5 mb-12 text-left">
                                        {['Pay-per-lead model', 'Direct CRM Integration', '100% Exclusivity Guaranteed'].map((item) => (
                                            <li key={item} className="flex items-center text-white/90">
                                                <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center mr-4">
                                                    <CheckCircle className="w-4 h-4 text-brand-cyan" />
                                                </div>
                                                <span className="text-lg font-medium lg:font-normal">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a href="https://cal.com/lead-genesis/discovery" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button className="w-full sm:w-auto relative overflow-hidden rounded-full h-14 px-10 bg-white text-black font-bold text-[17px] tracking-wide transition-all hover:scale-105 shadow-[0_0_40px_rgba(76,182,198,0.4)] flex items-center justify-center gap-2 group">
                                            {/* Shimmer Effect */}
                                            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />
                                            <span className="relative z-20 flex items-center justify-center gap-2">Get Leads <ArrowRight className="w-6 h-6 text-black" /></span>
                                        </Button>
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industries Section - Sophisticated Grid */}

                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto mb-16 lg:mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-medium text-gradient mb-6">Industries We Power</h2>
                            <div className="w-full max-w-xs mx-auto h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-20 text-left max-w-5xl mx-auto">
                            {[
                                {
                                    name: 'Solar & Battery',
                                    description: 'Generating high-intent residential and commercial solar leads through targeted digital outreach and pre-qualification. We deliver ready-to-close homeowners looking for sustainable energy solutions.'
                                },
                                {
                                    name: 'Mortgage Refinance',
                                    description: 'Exclusive refinance and purchase money prospects identified through predictive modeling. Connect with homeowners who are actively seeking lower rates or equity release opportunities.'
                                },
                                {
                                    name: 'Roofing',
                                    description: 'Real-time lead generation for storm restoration and replacement projects. We target high-demand areas to deliver qualified property owners with confirmed damage or immediate roofing needs.'
                                },
                                {
                                    name: 'Water Filtration',
                                    description: 'Qualified homeowners seeking advanced whole-home purification systems. Our leads are pre-vetted for interest and homeowner status, ensuring a high conversion rate for your sales team.'
                                }
                            ].map((vertical, idx) => (
                                <div key={vertical.name} className="group flex flex-col items-start">
                                    <motion.h4
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.1 * idx,
                                            ease: [0.21, 0.45, 0.32, 0.9]
                                        }}
                                        className="text-2xl md:text-3xl font-medium text-gradient tracking-tight mb-4 transition-all"
                                    >
                                        {vertical.name}
                                    </motion.h4>
                                    <motion.p
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            duration: 0.8,
                                            delay: (0.1 * idx) + 0.2,
                                            ease: [0.21, 0.45, 0.32, 0.9]
                                        }}
                                        className="text-white/50 text-base leading-relaxed max-w-md font-light"
                                    >
                                        {vertical.description}
                                    </motion.p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* AI Caller Section - Full Width */}
            < section className="py-0 bg-[#050505] relative border-t border-b border-white/5" >
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-cyan/5 via-[#050505] to-[#050505]">
                    <div className="container mx-auto px-4 py-20 lg:py-32">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                                className="flex-1 text-left relative z-10"
                            >
                                <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-8">
                                    <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
                                    <span className="text-[11px] uppercase tracking-widest font-bold text-brand-cyan">Taking Limited Applications</span>
                                </div>

                                <h3 className="text-4xl md:text-7xl font-medium text-white mb-8 tracking-tight leading-none">
                                    Meet Your New <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">AI Sales Agent.</span>
                                </h3>
                                <p className="text-[#999] text-lg md:text-xl mb-10 leading-relaxed max-w-xl font-light">
                                    Scale your outreach instantly with our proprietary AI Caller. It works 24/7 to engage leads, handle objections, and book meetings without the overhead of a human team.
                                </p>
                                <a href="https://cal.com/lead-genesis/ai-caller" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block">
                                    <Button className="w-full sm:w-auto relative overflow-hidden !rounded-full h-14 px-10 !bg-white !text-black font-bold text-[17px] tracking-wide transition-all hover:scale-105 shadow-[0_0_40px_rgba(76,182,198,0.4)] flex items-center justify-center gap-2 group">
                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />
                                        <span className="relative z-20 flex items-center justify-center gap-2">
                                            Apply here
                                            <ArrowRight className="w-5 h-5" />
                                        </span>
                                    </Button>
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                                className="flex-1 w-full relative overflow-hidden"
                            >
                                {/* Gradient Accents */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-cyan/10 blur-[100px] pointer-events-none" />
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-cyan/5 blur-[100px] pointer-events-none" />

                                {/* Abstract Visual Representation of AI */}
                                <div className="relative z-10 p-8">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex-shrink-0 flex items-center justify-center border border-white/10">
                                                <span className="text-xs text-white uppercase tracking-tighter">AI</span>
                                            </div>
                                            <div className="bg-white/5 rounded-2xl rounded-tl-none p-5 text-gray-200 text-lg leading-relaxed border border-white/5">
                                                "Hi, I noticed you were looking into solar installation for your home. Are you still interested in saving on energy?"
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 justify-end">
                                            <div className="bg-brand-cyan/10 rounded-2xl rounded-tr-none p-5 text-brand-cyan text-lg leading-relaxed border border-brand-cyan/10 max-w-[80%]">
                                                "Yes, actually. I've been seeing some high bills lately."
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black flex-shrink-0 flex items-center justify-center border border-white/10">
                                                <span className="text-xs text-gray-400">User</span>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex-shrink-0 flex items-center justify-center border border-white/10">
                                                <span className="text-xs text-white uppercase tracking-tighter">Agent</span>
                                            </div>
                                            <div className="bg-white/5 rounded-2xl rounded-tl-none p-5 text-gray-200 text-lg leading-relaxed border border-white/5">
                                                "I completely understand. We have a specialist in your area this Tuesday who can break down the potential savings. Does 2 PM work for a quick chat?"
                                            </div>
                                        </div>
                                    </div>

                                    {/* Waveform Visualization */}
                                    <div className="mt-8 flex items-center justify-center gap-1 h-12">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                                            <div key={i} className="w-1 bg-brand-cyan/50 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
                                        ))}
                                    </div>
                                </div>

                                <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/30 to-brand-cyan/10 rounded-[50px] blur-2xl -z-10 opacity-10"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            <CTASection
                title="Ready to Scale Your Sales?"
                description="Get verified data and live transfer leads delivered directly to your sales team. Stop prospecting and start closing."
                buttonText="Get Premium Leads"
            />
        </div >
    );
};
