import { servicesData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/ui/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wholesale Material Inventory | BS PAI",
    description: "Explore our comprehensive range of wholesale construction materials. Specialist suppliers of Bulk Cement, Structural Steel, and Massive Supply Chain Solutions.",
};

export default function InventoryPage() {
    return (
        <main className="bg-white">
            {/* 1. Inventory Hero */}
            <PageHero 
                title="INDUSTRIAL INVENTORY."
                prefix="Massive Scale Supply"
                subtitle="High-end wholesale construction materials tailored for large-scale structural integrity and infrastructure excellence."
                imageSrc="/images/services_hero_11zon.webp"
                metadata={[
                    { label: "CATALOG", value: "V-2.0" },
                    { label: "STOCK", value: "98%" },
                    { label: "READY", value: "TRUE" }
                ]}
            />

            {/* 2. Inventory Grid */}
            <section className="py-section bg-white">
                <div className="container mx-auto px-6">
                    <SectionHeader
                        title="Material Categories"
                        subtitle="Explore our comprehensive wholesale inventory, categorized for industrial procurement."
                        prefix="Product range"
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
                        {servicesData.map((service, idx) => (
                            <ProductCard 
                                key={service.id}
                                title={service.title}
                                description={service.description}
                                image={service.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Methodology */}
            <section className="py-section bg-white border-slate-100">
                <div className="container mx-auto px-6">
                    <SectionHeader 
                        title="Supply Methodology"
                        subtitle="Precision sourcing meets massive logistics. Our 4-step lifecycle ensures every site receives industrial-grade excellence."
                        prefix="Wholesale Flow"
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
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

            <FinalCTA />
        </main>
    );
}
