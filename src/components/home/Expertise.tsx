"use client";

import { expertiseData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCounter } from "@/components/ui/StatCounter";
import { CheckCircle2, Factory } from "lucide-react";
import { cn } from "@/lib/utils";

export function Expertise() {
    return (
        <section className="py-section bg-white overflow-hidden" id="expertise">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-stretch">
                    <div className="lg:w-7/12">
                        <SectionHeader
                            title="Material Mastery"
                            subtitle="Premium material supply for large-scale construction enterprises and infrastructure projects."
                            prefix="Industrial Scale"
                            align="left"
                            className="xl:mb-12 lg:mb-8 md:mb-6 mb-4"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {expertiseData.map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className="p-8 bg-white border-l-4 border-slate-200 transition-all hover:border-brand hover:bg-slate-100 group"
                                >
                                    <div className="flex gap-4 items-center mb-4">
                                        <div className="h-8 w-8 bg-brand text-brand-dark flex items-center justify-center -skew-x-12">
                                            <CheckCircle2 className="w-5 h-5 skew-x-12" />
                                        </div>
                                        <h4 className="font-heading text-xl text-brand-dark uppercase tracking-widest">{item.title}</h4>
                                    </div>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed italic">"{item.description}"</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-5/12">
                        <div className="h-full bg-brand-dark p-12 relative flex flex-col justify-center border-8 border-brand/20 shadow-2xl">
                            {/* Decorative Icon */}
                            <Factory className="absolute top-8 right-8 w-16 h-16 text-brand opacity-10" />
                            
                            <div className="relative z-10 text-center lg:text-left">
                                <div className="text-8xl font-heading text-brand mb-4">
                                    <StatCounter end={25} suffix="+" />
                                </div>
                                <div className="h-1 w-24 bg-brand mb-8 mx-auto lg:mx-0" />
                                <h3 className="text-3xl font-heading text-white mb-6 uppercase tracking-widest leading-none">
                                    Years of Supply<br />Chain Excellence
                                </h3>
                                <p className="text-slate-400 font-light text-sm max-w-xs mx-auto lg:mx-0">
                                    A legacy of reliability in every bulk shipment, serving the nation's biggest build sites.
                                </p>
                            </div>
                            
                            {/* Structural accent */}
                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-brand/10 -translate-x-4 -translate-y-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
