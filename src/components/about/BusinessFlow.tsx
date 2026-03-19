"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { UserSearch, Cpu, HardHat, ShieldCheck, Box, Boxes } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
    {
        id: "01",
        title: "Material Strategy",
        subtitle: "Sourcing & Specifications",
        description: "Project-specific material procurement based on heavy-duty specifications and industrial volume requirements.",
        icon: UserSearch,
        tags: ["Mill-Cert", "Volume Prep"]
    },
    {
        id: "02",
        title: "Supply Mobilization",
        subtitle: "Logistics & Quality Hub",
        description: "The central logistics hub where inventory is quality-checked and prepared for wide-scale distribution.",
        icon: Cpu,
        tags: ["QC Check", "Hub Ops"]
    },
    {
        id: "03",
        title: "Final Deployment",
        subtitle: "On-Site Injection",
        description: "On-site material injection with unyielding commitment to mill-certification and structural standards.",
        icon: HardHat,
        tags: ["Site Entry", "Certification"]
    }
];

export function BusinessFlow() {
    return (
        <section className="py-section bg-brand-dark relative overflow-hidden">
            {/* Industrial Background Grid */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: 'radial-gradient(circle, #C5A059 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <SectionHeader
                        title="Industrial Stack"
                        subtitle="A vertical integration of sourcing, quality assurance, and massive scale deployment."
                        prefix="Operational Stack"
                        align="center"
                        dark
                    />
                </ScrollReveal>

                <div className="mt-16 sm:mt-24 lg:mt-32 max-w-5xl mx-auto relative group/flow">
                    {/* Glowing Supply Line Connector (Desktop only) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-brand/20 via-brand to-brand/20 hidden lg:block overflow-hidden">
                         <div className="absolute top-0 left-0 w-full h-40 bg-white/40 blur-sm animate-scan-pulse-slow opacity-50" />
                    </div>

                    <div className="space-y-24 lg:space-y-0 lg:py-12">
                        {stages.map((stage, idx) => (
                            <ScrollReveal key={stage.id} delay={idx * 0.2}>
                                <div className={cn(
                                    "flex flex-col lg:flex-row items-center gap-8 lg:gap-24 relative lg:mb-32 last:mb-0",
                                    idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                )}>
                                    {/* Content Module */}
                                    <div className="w-full lg:w-1/2">
                                        <div className={cn(
                                            "p-8 sm:p-12 border border-brand/20 bg-brand-dark/50 backdrop-blur-xl relative group overflow-hidden transition-all duration-500 hover:border-brand/40 hover:bg-brand-dark/80",
                                            idx % 2 === 0 ? "lg:text-right" : "lg:text-left",
                                            "text-center"
                                        )}>
                                            {/* Decorative Corner Accents */}
                                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand/50 group-hover:border-brand" />
                                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand/20" />
                                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand/20" />
                                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand/50 group-hover:border-brand" />
                                            
                                            <div className={cn(
                                                "flex items-center gap-4 mb-6",
                                                idx % 2 === 0 ? "justify-center lg:justify-end" : "justify-center lg:justify-start"
                                            )}>
                                                <span className="text-4xl font-heading text-brand/30">0{idx + 1}</span>
                                                <div className="h-px w-8 bg-brand/20 hidden lg:block" />
                                            </div>

                                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-2 uppercase tracking-tight">
                                                {stage.title}
                                            </h3>
                                            <p className="text-brand text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                                                {stage.subtitle}
                                            </p>
                                            
                                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                                                "{stage.description}"
                                            </p>

                                            <div className={cn(
                                                "flex flex-wrap gap-3",
                                                idx % 2 === 0 ? "justify-center lg:justify-end" : "justify-center lg:justify-start"
                                            )}>
                                                {stage.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 bg-brand/10 border border-brand/20 text-brand text-[8px] font-black uppercase tracking-widest">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Central Node */}
                                    <div className="relative z-20 order-first lg:order-none shrink-0">
                                        <div className="w-20 h-20 sm:w-28 sm:h-28 bg-brand-dark border-4 border-brand flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 relative bg-linear-to-br from-brand-dark to-brand/20">
                                            <stage.icon className="w-10 h-10 text-brand" />
                                        </div>
                                        {/* Pulse Halo */}
                                        <div className="absolute -inset-4 bg-brand/20 rounded-full animate-pulse opacity-20 -z-10" />
                                    </div>

                                    {/* Connector Spacer */}
                                    <div className="lg:w-1/2 hidden lg:block" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
