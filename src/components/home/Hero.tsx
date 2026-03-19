"use client";

import { heroData } from "@/data/homeData";
import { ArrowRight, Box } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark text-white pt-20">
            {/* Massive background text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap z-0">
                <span className="text-[30rem] font-heading leading-none">BUILDING BLOCKS FOR GIANTS</span>
            </div>

            {/* Industrial Overlay Grid */}
            <div className="absolute inset-0 z-0 opacity-10" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px w-20 bg-brand" />
                            <span className="text-brand font-black uppercase tracking-[0.6em] text-xs">Architectural Strength</span>
                        </div>

                        <h1 className="text-hero mb-8 flex flex-col">
                            <span className="text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                                {heroData.title.main}
                            </span>
                            <span className="text-brand flex items-center gap-4">
                                <span className="h-10 w-10 bg-brand text-brand-dark flex items-center justify-center -skew-x-12">
                                    <Box className="w-6 h-6 skew-x-12" />
                                </span>
                                {heroData.title.highlight}
                            </span>
                        </h1>

                        <div className="max-w-2xl border-l-4 border-white/20 pl-8 mb-16">
                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic">
                                "{heroData.description}"
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-8 items-center">
                            <Link
                                href="/contact#inquiry-form"
                                className="group relative px-12 py-6 bg-brand text-brand-dark font-heading text-2xl tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[8px_8px_0_0_rgba(255,255,255,0.1)] uppercase"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Secure Supply <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                                </span>
                            </Link>

                            <Link
                                href="/services"
                                className="group px-12 py-6 bg-white/5 backdrop-blur-md border-[3px] border-white/10 font-heading text-2xl text-white tracking-wider transition-all hover:bg-white/10 hover:border-brand/40 uppercase"
                            >
                                <span className="flex items-center gap-2">
                                    View Inventory
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-4 relative h-[600px] hidden lg:block">
                        <div className="absolute inset-0 border-10 border-white/5 -translate-x-8 translate-y-8" />
                        <div className="relative h-full w-full overflow-hidden border border-white/20 shadow-2xl">
                            <Image
                                src="/images/home_hero.png"
                                alt="BS PAI Industrial Supply"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                                priority
                            />
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-brand" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
