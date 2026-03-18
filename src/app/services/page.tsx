import { servicesData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { ArrowRight, Box } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industrial Inventory | Solid Foundation",
    description: "Explore our range of wholesale construction materials, from Bulk Cement and Structural Steel to Industrial Infrastructure and Smart Logistics.",
};

export default function ServicesPage() {
    return (
        <main className="bg-white">
            {/* 1. Services Hero */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-brand-dark text-white min-h-[60vh] flex items-center">
                {/* Industrial Overlay Grid */}
                <div className="absolute inset-0 z-0 opacity-10" 
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px w-20 bg-brand" />
                            <span className="text-brand font-black uppercase tracking-[0.6em] text-xs">Massive Scale Supply</span>
                        </div>
                        <h1 className="text-hero mb-12">
                            INDUSTRIAL<br />
                            <span className="text-brand">INVENTORY.</span>
                        </h1>
                        <div className="max-w-2xl border-l-4 border-white/20 pl-8">
                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic">
                                "High-end wholesale construction materials tailored for large-scale structural integrity and infrastructure excellence."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
                    <Image
                        src="/images/services_hero.png"
                        alt="Our Wholesale Services"
                        fill
                        className="object-cover grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/40 to-transparent" />
                </div>
            </section>

            {/* 2. Services Grid */}
            <section className="py-section bg-white">
                <div className="container mx-auto px-6">
                    <SectionHeader
                        title="Material Categories"
                        subtitle="Explore our comprehensive wholesale inventory, categorized for industrial procurement."
                        prefix="Product range"
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {servicesData.map((service, idx) => (
                            <ProductCard 
                                key={service.id}
                                title={service.title}
                                description={service.description}
                                image={service.image}
                                category={service.tag || "In Stock"}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Methodology */}
            <section className="py-section bg-white border-t border-slate-100">
                <div className="container mx-auto px-6">
                    <SectionHeader 
                        title="Supply Methodology"
                        subtitle="Precision sourcing meets massive logistics. Our 4-step lifecycle ensures every site receives industrial-grade excellence."
                        prefix="Wholesale Flow"
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Global Source", desc: "Strategic sourcing of certified premium materials." },
                            { step: "02", title: "Site Verify", desc: "Rigorous quality testing for structural integrity on arrival." },
                            { step: "03", title: "Massive Scale", desc: "Wholesale logistics mapped to giant project timelines." },
                            { step: "04", title: "Final Supply", desc: "On-site precision delivery with industrial commitment." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-white border-l-4 border-slate-200 hover:border-brand transition-all group">
                                <span className="text-brand font-black text-xs tracking-widest uppercase mb-4 block">{item.step}</span>
                                <h4 className="text-2xl font-heading mb-4 uppercase tracking-wider text-brand-dark">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed font-light italic">"{item.desc}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Final CTA */}
            <section className="py-32 bg-brand-dark text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-hero text-white mb-12">
                        READY TO <span className="text-brand">START?</span>
                    </h2>
                    <Link
                        href="/contact#inquiry-form"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-brand text-brand-dark font-heading text-2xl tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl uppercase"
                    >
                        Secure Your Supply <ArrowRight className="w-8 h-8" />
                    </Link>
                </div>
                {/* Structural background text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap">
                    <span className="text-[20rem] font-heading leading-none">BUILDING GIANTS</span>
                </div>
            </section>
        </main>
    );
}
