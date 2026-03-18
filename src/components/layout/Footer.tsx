import { config } from "@/data/config";
import { companyProfile } from "@/data/homeData";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark text-slate-300 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
                    {/* 1. Quick Links */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-white uppercase tracking-wider text-xs">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "About Us", "Services", "Contact"].map((link) => {
                                const firstword = link.split(" ")[0];
                                return (
                                    <li key={link}>
                                        <a href={`/${firstword.toLowerCase()}`} className="hover:text-brand transition-colors text-sm font-medium">
                                            {link}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* 2. Products */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-white uppercase tracking-wider text-xs">Our Products</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li className="hover:text-brand cursor-pointer transition-colors">
                                <a href="/services#premium-cement">PREMIUM CEMENT</a>
                            </li>
                            <li className="hover:text-brand cursor-pointer transition-colors">
                                <a href="/services#structural-steel">STRUCTURAL STEEL</a>
                            </li>
                            <li className="hover:text-brand cursor-pointer transition-colors">
                                <a href="/services#fine-aggregates">FINE AGGREGATES</a>
                            </li>
                            <li className="hover:text-brand cursor-pointer transition-colors">
                                <a href="/services#bulk-bricks">BULK BRICKS</a>
                            </li>
                            <li className="hover:text-brand cursor-pointer transition-colors">
                                <a href="/services#roofing-solutions">ROOFING SOLUTIONS</a>
                            </li>
                        </ul>
                    </div>

                    {/* 3. Contact Info */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-white uppercase tracking-wider text-xs">Contact Us</h4>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                                <span className="font-medium">
                                    {config.address.line1}, {config.address.line2},<br />
                                    {config.address.line3}, {config.address.line4},<br />
                                    PIN {config.address.pin}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-brand shrink-0" />
                                <a href={`tel:${config.whatsappNumber.replace(/\s/g, "")}`} className="hover:text-brand transition-colors font-medium">
                                    {config.whatsappNumber}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand shrink-0" />
                                <a href={`mailto:${config.email}`} className="hover:text-brand transition-colors font-medium">
                                    {config.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Google Map */}
                    <div className="col-span-2 md:col-span-1 space-y-6">
                        <h4 className="font-bold text-white uppercase tracking-wider text-xs">Distribution Center</h4>
                        <div className="w-full h-48 rounded-2xl overflow-hidden transition-all border border-slate-700 shadow-2xl">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31413.598185581308!2d76.16241395473483!3d10.205018029375294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081b13432bc127%3A0xac513e9f17de56fa!2sTIME%20INTERIORS%20-Interior%20Designer%2C%20Modular%20Kitchen%2C%20Building%20Contractors%2C%20Aluminium%20Fabrication%2CDoor%20Dealers%2C%20Home%20Builders!5e0!3m2!1sen!2sin!4v1773807604348!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {currentYear} {config.companyName}. All rights reserved.</p>
                    <p className="flex items-center gap-1.5 uppercase tracking-widest text-[10px] font-black">
                        Powered by <a href="https://thinkforgeglobal.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors italic">Think Forge Global</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
