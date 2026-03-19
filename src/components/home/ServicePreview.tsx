"use client";

import { servicesData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicePreview() {
    const previewServices = servicesData.slice(0, 3);

    return (
        <section className="py-section bg-white" id="service-preview">
            <div className="container mx-auto px-6 text-center">
                <SectionHeader
                    title="Core Inventory"
                    subtitle="Premium essential materials for high-volume construction needs, ready for bulk dispatch."
                    prefix="Material Inventory"
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12 mb-16">
                    {previewServices.map((service, idx) => (
                        <ProductCard 
                            key={idx}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            category="In Stock"
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Link
                        href="/inventory"
                        className="group relative inline-flex items-center gap-6 px-12 py-6 bg-brand-dark text-white border-l-8 border-brand transition-all hover:bg-brand hover:text-brand-dark hover:translate-x-2 active:scale-95"
                    >
                        <span className="font-heading text-xl md:text-2xl tracking-[0.2em] uppercase relative z-10 flex items-center gap-4">
                            View All Materials 
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </span>
                        
                        {/* Mechanical Accent */}
                        <div className="absolute top-0 right-0 w-4 h-4 bg-brand/10 -translate-y-2 translate-x-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
