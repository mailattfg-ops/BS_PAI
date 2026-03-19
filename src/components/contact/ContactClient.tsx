"use client";

import { config } from "@/data/config";
import { Mail, Phone, MapPin, Zap, Truck, Box } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/ui/PageHero";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { servicesData } from "@/data/homeData";

export function ContactClient() {
    const searchParams = useSearchParams();
    const serviceParam = searchParams.get("service");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Bulk Cement", // Default industrial service
        message: ""
    });

    useEffect(() => {
        if (serviceParam) {
            const decodedService = decodeURIComponent(serviceParam);
            const serviceExists = servicesData.some(s => s.title === decodedService);
            if (serviceExists) {
                setFormData(prev => ({ ...prev, service: decodedService }));
            }
        }
    }, [serviceParam]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `*New Bulk Inquiry - BS PAI*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Service:* ${formData.service}\n` +
            `*Message:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleFieldChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen bg-white">
            {/* 1. Contact Hero */}
            <PageHero 
                title="LET'S CONNECT."
                prefix="Direct Logistics"
                subtitle="Our expert logistics team is ready to deliver industrial strength and precision supply to your site."
                imageSrc="/images/contact_hero_11zon.webp"
                metadata={[
                    { label: "SUPPORT", value: "24/7" },
                    { label: "SLA", value: "48H" },
                    { label: "ACTIVE", value: "TRUE" }
                ]}
            />

            <section className="py-section">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Form */}
                        <div id="inquiry-form" className="bg-white p-6 md:p-12 lg:p-16 border-l-8 md:border-l-12 border-brand shadow-2xl relative group">
                            <h2 className="text-3xl md:text-5xl font-heading mb-8 md:mb-12 text-brand-dark uppercase tracking-widest">Project Inquiry</h2>
                            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => handleFieldChange("name", e.target.value)}
                                            className="w-full px-8 py-6 bg-white border border-slate-200 focus:border-brand-dark focus:ring-4 focus:ring-brand/5 transition-all outline-none font-medium"
                                            placeholder="Ex: Rahul S."
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => handleFieldChange("email", e.target.value)}
                                            className="w-full px-8 py-6 bg-white border border-slate-200 focus:border-brand-dark focus:ring-4 focus:ring-brand/5 transition-all outline-none font-medium"
                                            placeholder="procurement@corp.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-1">Material Category</label>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => handleFieldChange("service", e.target.value)}
                                        className="w-full px-8 py-6 bg-white border border-slate-200 focus:border-brand-dark focus:ring-4 focus:ring-brand/5 transition-all outline-none font-black text-brand-dark uppercase tracking-widest appearance-none"
                                    >
                                        {servicesData.map((service) => (
                                            <option key={service.id} value={service.title}>{service.title}</option>
                                        ))}
                                        <option value="Special Orders">Special Industrial Order</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-1">Inquiry Details</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => handleFieldChange("message", e.target.value)}
                                        className="w-full px-8 py-6 bg-white border border-slate-200 focus:border-brand-dark focus:ring-4 focus:ring-brand/5 transition-all outline-none font-medium resize-none text-slate-600"
                                        placeholder="Describe your project tonnage and delivery timelines..."
                                    />
                                </div>
                                <button type="submit" className="w-full py-5 md:py-8 bg-brand-dark text-white font-heading text-xl md:text-2xl tracking-widest hover:bg-brand hover:text-brand-dark transition-all flex items-center justify-center gap-4 group/btn shadow-xl uppercase">
                                    Dispatch Request <Truck className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Details */}
                        <div className="flex flex-col justify-center gap-8 md:gap-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-heading text-brand-dark leading-none uppercase tracking-widest">
                                    "Precision in every ton.<br />
                                    <span className="text-brand">Excellence in every lot.</span>"
                                </h2>
                                <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px]">— BS PAI Supply Code</p>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                <div className="p-6 md:p-10 bg-white border-l-4 border-brand-dark">
                                    <div className="flex items-center gap-6 md:gap-8">
                                        <Phone className="w-10 h-10 md:w-12 md:h-12 text-brand" />
                                        <div>
                                            <h4 className="font-heading text-xl md:text-2xl text-brand-dark uppercase tracking-widest mb-1 md:mb-2">Logistics Line</h4>
                                            <p className="text-slate-500 font-light italic text-lg md:text-xl">{config.whatsappNumber}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-10 bg-white border-l-4 border-brand-dark">
                                    <div className="flex items-center gap-6 md:gap-8">
                                        <Mail className="w-10 h-10 md:w-12 md:h-12 text-brand" />
                                        <div>
                                            <h4 className="font-heading text-xl md:text-2xl text-brand-dark uppercase tracking-widest mb-1 md:mb-2">Procurement Email</h4>
                                            <p className="text-slate-500 font-light italic text-lg md:text-xl">{config.email}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-10 bg-white border-l-4 border-brand-dark">
                                    <div className="flex items-center gap-6 md:gap-8">
                                        <MapPin className="w-10 h-10 md:w-12 md:h-12 text-brand" />
                                        <div>
                                            <h4 className="font-heading text-xl md:text-2xl text-brand-dark uppercase tracking-widest mb-1 md:mb-2">Supply Hub HQ</h4>
                                            <p className="text-slate-500 font-light italic text-base md:text-lg leading-relaxed">{config.fullAddress}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational Excellence */}
            <section className="py-section bg-brand-dark text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <SectionHeader 
                        title="Operational Excellence"
                        subtitle="Quality assurance and management protocols that define our service delivery."
                        prefix="Supply Standards"
                        align="center"
                        dark
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12 mt-10 lg:mt-20">
                        {[
                            { title: "24/7 Supply", desc: "Round-the-clock logistics support for critical construction timelines.", icon: Zap },
                            { title: "Regional Depots", desc: "Strategically located distribution centers for rapid on-site delivery.", icon: MapPin },
                            { title: "Quality Audit", desc: "Certified material testing and quality assurance for all batch supplies.", icon: Box }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-12 border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-center">
                                <feature.icon className="w-16 h-16 text-brand mb-8 mx-auto" />
                                <h4 className="text-2xl font-heading mb-6 uppercase tracking-widest">{feature.title}</h4>
                                <p className="text-slate-400 font-light text-sm leading-relaxed italic">"{feature.desc}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
