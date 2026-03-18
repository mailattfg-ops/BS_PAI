"use client";

import { testimonialsData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section className="py-section bg-white overflow-hidden" id="testimonials">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Bulk Client Reviews"
                    subtitle="Trusted by leading contractors and massive infrastructure developers across the region."
                    prefix="Client Success"
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {testimonialsData.map((t, idx) => (
                        <div 
                            key={idx}
                            className="p-10 bg-white relative group transition-all hover:bg-slate-100 border-t-8 border-brand shadow-xl"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-brand/10 transition-transform group-hover:scale-125" />
                            
                            <div className="relative z-10">
                                <p className="text-slate-600 italic mb-10 leading-relaxed text-lg font-light">
                                    "{t.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-1 w-8 bg-brand" />
                                    <div>
                                        <p className="font-heading text-xl text-brand-dark tracking-wider uppercase">{t.name}</p>
                                        <p className="text-brand text-[10px] font-black uppercase tracking-[0.3em]">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
