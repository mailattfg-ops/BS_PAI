"use client";

import { useMemo } from "react";
import { servicesData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Services() {
    // Show top 6 services for the grid
    const topServices = useMemo(() => servicesData.slice(0, 6), []);

    return (
        <section className="py-section bg-white" id="services">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Industrial Inventory"
                    subtitle="Certified wholesale materials for professional construction and infrastructure giants."
                    prefix="Full Catalog"
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:mb-12 lg:mb-8 md:mb-6 mb-4">
                    {topServices.map((service) => (
                        <ProductCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            category={service.tag || "In Stock"}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="group relative inline-flex items-center gap-6 px-12 py-6 bg-brand-dark text-white border-l-8 border-brand transition-all hover:bg-brand hover:text-brand-dark hover:translate-x-2 active:scale-95 shadow-2xl"
                    >
                        <span className="font-heading text-xl md:text-2xl tracking-[0.2em] uppercase relative z-10 flex items-center gap-4">
                            Explore Full Inventory 
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
