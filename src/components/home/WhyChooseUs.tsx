"use client";

import { whyChooseUsData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { ShieldCheck, Trophy, Layers, History } from "lucide-react";

const icons = [ShieldCheck, Trophy, Layers, History];

export function WhyChooseUs() {
    return (
        <section className="py-section bg-white relative overflow-hidden" id="why-choose-us">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="The Solid Advantage"
                    subtitle="Unwavering commitment to quality and supply chain reliability for every project."
                    prefix="Reliable Partner"
                    align="center"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
                    {whyChooseUsData.map((item, idx) => {
                        return (
                            <ProductCard 
                                key={idx}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                category="Advantage"
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
