import { config } from "@/data/config";
import { companyProfile } from "@/data/homeData";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark text-slate-300 pt-6 pb-3 md:pt-12 md:pb-6 lg:pt-24 lg:pb-12 relative overflow-hidden border-t border-brand/20">
            {/* 1. Industrial Background Elements */}
            <div className="absolute inset-0 z-0 opacity-10" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
            <div className="absolute inset-0 bg-linear-to-b from-brand/5 via-transparent to-brand/5 pointer-events-none" />
            
            {/* Glowing Top Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-brand shadow-[0_0_15px_rgba(212,175,55,1)] animate-pulse" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-4 md:mb-10 lg:mb-20">
                    {/* 1. Brand Legacy Column */}
                    <div className="space-y-4 md:space-y-6 lg:space-y-8">
                        <div>
                            <span className="text-2xl font-heading text-white tracking-widest uppercase">BS <span className="text-brand text-3xl italic">PAI</span></span>
                            <div className="h-px w-20 bg-brand mt-2" />
                        </div>
                        <p className="text-sm font-medium leading-relaxed italic pr-4">
                            "Certified industrial scale supply for large-scale structural infrastructure projects. Rooted in integrity, built on performance."
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand hover:text-brand-dark hover:border-brand transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Quick Links Column */}
                    <div className="space-y-4 md:space-y-6 lg:space-y-8">
                        <h4 className="font-black text-white uppercase tracking-[0.4em] text-[10px] border-b border-white/10 pb-4">Quick Links</h4>
                        <ul className="grid grid-cols-1 gap-4">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About", path: "/about" },
                                { name: "Inventory", path: "/inventory" },
                                { name: "Contact", path: "/contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <a href={link.path} className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest hover:text-brand transition-colors">
                                        <div className="w-1.5 h-1.5 bg-brand scale-0 group-hover:scale-100 transition-transform" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Contact Us Column */}
                    <div className="space-y-4 md:space-y-6 lg:space-y-8">
                        <h4 className="font-black text-white uppercase tracking-[0.4em] text-[10px] border-b border-white/10 pb-4">Contact Us</h4>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start gap-4 group cursor-help">
                                <div className="p-2 bg-white/5 border border-white/10 group-hover:border-brand transition-colors">
                                    <MapPin className="w-4 h-4 text-brand" />
                                </div>
                                <span className="font-medium leading-relaxed hover:text-white transition-colors">
                                    {config.address.line1}, {config.address.line2},<br />
                                    {config.address.line3}, {config.address.line4},<br />
                                    PIN {config.address.pin}
                                </span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 bg-white/5 border border-white/10 group-hover:border-brand transition-colors">
                                    <Phone className="w-4 h-4 text-brand" />
                                </div>
                                <a href={`tel:${config.whatsappNumber.replace(/\s/g, "")}`} className="font-black tracking-widest hover:text-brand transition-colors">
                                    {config.whatsappNumber}
                                </a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 bg-white/5 border border-white/10 group-hover:border-brand transition-colors">
                                    <Mail className="w-4 h-4 text-brand" />
                                </div>
                                <a href={`mailto:${config.email}`} className="font-medium italic border-b border-transparent hover:border-brand hover:text-brand transition-all">
                                    {config.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Our Location Column */}
                    <div className="space-y-4 md:space-y-6 lg:space-y-8">
                        <h4 className="font-black text-white uppercase tracking-[0.4em] text-[10px] border-b border-white/10 pb-4">Our Location</h4>
                        <div className="relative group h-40 border border-white/10 overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31413.598185581308!2d76.16241395473483!3d10.205018029375294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081b13432bc127%3A0xac513e9f17de56fa!2sTIME%20INTERIORS%20-Interior%20Designer%2C%20Modular%20Kitchen%2C%20Building%20Contractors%2C%20Aluminium%20Fabrication%2CDoor%20Dealers%2C%20Home%20Builders!5e0!3m2!1sen!2sin!4v1773807604348!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                            />
                            <div className="absolute inset-0 bg-brand/5 pointer-events-none group-hover:bg-transparent transition-all" />
                        </div>
                    </div>
                </div>

                {/* Technical Bottom Bar (Refined) */}
                <div className="pt-4 md:pt-6 lg:pt-8 xl:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 overflow-hidden uppercase tracking-widest">
                    <p className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-black text-slate-500">
                        Engineered by <a href="https://thinkforgeglobal.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors italic">Think Forge Global</a>
                    </p>

                    <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
                        <p className="text-[10px] font-black text-slate-400">
                            © {currentYear} {config.companyName.toUpperCase()}. <span className="hidden sm:inline">Certified Supply.</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
