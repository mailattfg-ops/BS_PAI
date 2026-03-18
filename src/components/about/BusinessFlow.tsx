"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { UserSearch, Cpu, HardHat, ArrowRight, ArrowLeft, RefreshCcw } from "lucide-react";

export function BusinessFlow() {
    return (
        <section className="py-section bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <SectionHeader
                        title="Industrial Stack"
                        subtitle="A vertical integration of sourcing, quality assurance, and massive scale deployment."
                        prefix="Operational Stack"
                        align="center"
                    />
                </ScrollReveal>

                <div className="mt-24 space-y-0 max-w-5xl mx-auto border-x border-slate-100 relative">
                    {/* Central Vertical Connector */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full bg-slate-50 -z-10 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-transparent via-brand to-transparent animate-scan-pulse-slow" />
                    </div>

                    {/* Step 01 - SOURCE (Staggered Left) */}
                    <ScrollReveal delay={0.1} className="relative py-12">
                        <div className="flex flex-col lg:flex-row items-center gap-12 group">
                            <div className="lg:w-1/2 lg:pr-12 text-center lg:text-right">
                                <div className="inline-block px-4 py-1 bg-brand-dark text-white text-[10px] font-black uppercase tracking-[0.4em] mb-4">Stage 01</div>
                                <h3 className="text-4xl font-heading text-brand-dark mb-6 uppercase tracking-tight">Material<br/><span className="text-brand">Strategy.</span></h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-light italic">
                                    "Project-specific material procurement based on heavy-duty specifications and industrial volume requirements."
                                </p>
                            </div>
                            <div className="relative">
                                <div className="w-24 h-24 bg-white border-8 border-slate-100 flex items-center justify-center shadow-xl group-hover:border-brand transition-colors duration-500 relative z-10">
                                    <UserSearch className="w-10 h-10 text-brand-dark" />
                                </div>
                                <div className="absolute -inset-4 bg-brand/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full -z-0" />
                            </div>
                            <div className="lg:w-1/2 hidden lg:block" />
                        </div>
                    </ScrollReveal>

                    {/* Step 02 - LOGISTICS (Center / Heavy) */}
                    <ScrollReveal delay={0.3} className="relative py-12 bg-slate-50/50 border-y border-slate-100">
                        <div className="flex flex-col lg:flex-row items-center gap-12 group">
                            <div className="lg:w-1/2 hidden lg:block" />
                            <div className="relative order-first lg:order-none">
                                <div className="w-32 h-32 bg-brand-dark flex items-center justify-center shadow-2xl relative z-10 rotate-45 group-hover:rotate-0 transition-transform duration-700">
                                    <Cpu className="w-12 h-12 text-brand -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
                                </div>
                                <div className="absolute -top-6 -right-6 px-4 py-1 bg-brand text-brand-dark text-[10px] font-black uppercase tracking-widest z-20 shadow-xl">CORE HUB</div>
                            </div>
                            <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
                                <div className="inline-block px-4 py-1 bg-brand text-brand-dark text-[10px] font-black uppercase tracking-[0.4em] mb-4">Stage 02</div>
                                <h3 className="text-4xl font-heading text-brand-dark mb-6 uppercase tracking-tight">Supply<br/><span className="text-brand">Mobilization.</span></h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-light italic">
                                    "The central logistics hub where inventory is quality-checked and prepared for wide-scale distribution."
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Step 03 - DELIVERY (Staggered Left) */}
                    <ScrollReveal delay={0.5} className="relative py-12">
                        <div className="flex flex-col lg:flex-row items-center gap-12 group">
                            <div className="lg:w-1/2 lg:pr-12 text-center lg:text-right">
                                <div className="inline-block px-4 py-1 bg-brand-dark text-white text-[10px] font-black uppercase tracking-[0.4em] mb-4">Stage 03</div>
                                <h3 className="text-4xl font-heading text-brand-dark mb-6 uppercase tracking-tight">Final<br/><span className="text-brand">Deployment.</span></h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-light italic">
                                    "On-site material injection with unyielding commitment to mill-certification and structural standards."
                                </p>
                            </div>
                            <div className="relative">
                                <div className="w-24 h-24 bg-white border-8 border-slate-100 flex items-center justify-center shadow-xl group-hover:border-brand transition-colors duration-500 relative z-10">
                                    <HardHat className="w-10 h-10 text-brand-dark" />
                                </div>
                                <div className="absolute -inset-4 bg-brand/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full -z-0" />
                            </div>
                            <div className="lg:w-1/2 hidden lg:block" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
