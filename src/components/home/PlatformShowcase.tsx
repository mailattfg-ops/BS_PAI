"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { 
    Truck, 
    ShieldCheck, 
    MapPin, 
    Factory 
} from "lucide-react";
import { StatCounter } from "@/components/ui/StatCounter";

const showcaseItems = [
    {
        title: "Logistics Fleet",
        description: "Massive fleet of heavy-duty vehicles for rapid bulk delivery of construction materials.",
        image: "/images/Logistics Fleet_11zon.webp",
        category: "Distribution"
    },
    {
        title: "Quality Control",
        description: "Rigorous testing and inspection on all materials ensuring industry leading structural integrity.",
        image: "/images/Quality Control.avif",
        category: "Standards"
    },
    {
        title: "Regional Reach",
        description: "Established supply chain network across major infrastructure development hubs.",
        image: "/images/Regional Reach_11zon.webp",
        category: "Network"
    }
];

export function PlatformShowcase() {
    return (
        <section className="py-section bg-white overflow-hidden" id="showcase">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Industrial Infrastructure"
                    subtitle="Our wholesale operations are designed for high-volume supply chain operations, ensuring your project never stops."
                    prefix="Supply Network"
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
                    {showcaseItems.map((item, idx) => (
                        <div key={idx} className="flex flex-col">
                            <ProductCard
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                category={item.category}
                            />
                        </div>
                    ))}
                </div>

                {/* Industrial Stats Bar */}
                <div className="mt-12 md:mt-24 relative">
                    {/* Decorative Outside Accents */}
                    <div className="absolute -top-1 left-0 w-12 h-1 bg-brand" />
                    <div className="absolute -top-1 right-0 w-12 h-1 bg-brand" />
                    <div className="absolute -bottom-1 left-0 w-12 h-1 bg-brand" />
                    <div className="absolute -bottom-1 right-0 w-12 h-1 bg-brand" />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 py-8 sm:py-12 md:py-16 border-y border-brand/30 relative overflow-hidden group/stats">
                        {/* Decorative background scanline or grid could go here */}
                        <div className="absolute inset-0 bg-linear-to-b from-brand/5 to-transparent pointer-events-none" />

                        <div className="text-center px-4 sm:px-8 border-r border-brand/10 group">
                            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-brand mb-3 transition-transform group-hover:-translate-y-2">
                                <StatCounter end={500} suffix="K+" />
                            </div>
                            <div className="text-[8px] sm:text-xs font-black uppercase tracking-[0.3em] text-slate-400">Tons Dispatched</div>
                        </div>
                        
                        <div className="text-center px-4 sm:px-8 lg:border-r border-brand/10 group">
                            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-brand mb-3 transition-transform group-hover:-translate-y-2">
                                <StatCounter end={120} suffix="+" />
                            </div>
                            <div className="text-[8px] sm:text-xs font-black uppercase tracking-[0.3em] text-slate-400">Fleet Vehicles</div>
                        </div>

                        <div className="text-center px-4 sm:px-8 border-r lg:border-r border-brand/10 group">
                            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-brand mb-3 transition-transform group-hover:-translate-y-2">
                                <StatCounter end={15} />
                            </div>
                            <div className="text-[8px] sm:text-xs font-black uppercase tracking-[0.3em] text-slate-400">Supply Hubs</div>
                        </div>

                        <div className="text-center px-4 sm:px-8 group">
                            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-brand mb-3 transition-transform group-hover:-translate-y-2">
                                24/7
                            </div>
                            <div className="text-[8px] sm:text-xs font-black uppercase tracking-[0.3em] text-slate-400">Logistics Ops</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
