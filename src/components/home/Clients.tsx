"use client";

import { prestigiousClients } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";

export function Clients() {
    return (
        <section className="py-section bg-white relative overflow-hidden" id="clients">
            {/* Structural Graphic Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 translate-x-1/2 opacity-20" />
            
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader
                    title="Wholesale Network"
                    subtitle="Trusted by leading developers and infrastructure giants across the region for over two decades."
                    prefix="Trusted Partners"
                    align="center"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {prestigiousClients.map((client, idx) => (
                        <div 
                            key={idx} 
                            className="group h-44 bg-white border-l-4 border-slate-200 flex flex-col items-center justify-center p-8 transition-all hover:border-brand hover:shadow-2xl relative"
                        >
                            <div className="relative h-20 w-full mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                                {client.image ? (
                                    <Image
                                        src={client.image}
                                        alt={client.name}
                                        fill
                                        className="object-contain opacity-40 group-hover:opacity-100 transition-opacity"
                                    />
                                ) : (
                                    <div className="w-16 h-16 bg-brand-dark/5 rounded-full flex items-center justify-center text-brand-dark opacity-30 group-hover:opacity-100 transition-opacity">
                                        <span className="font-heading text-3xl">SF</span>
                                    </div>
                                )}
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-hover:text-brand-dark transition-colors">
                                {client.name}
                            </span>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-2 h-2 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
