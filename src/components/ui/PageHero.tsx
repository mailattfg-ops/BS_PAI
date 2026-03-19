"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface PageHeroProps {
    title: string;
    subtitle: string;
    prefix: string;
    imageSrc: string;
    metadata?: { label: string; value: string }[];
}

export function PageHero({
    title,
    subtitle,
    prefix,
    imageSrc,
    metadata = [
        { label: "SYSTEM", value: "ACTIVE" },
        { label: "SITE", value: "CP-25" },
        { label: "COORDS", value: "25.2048 N" }
    ]
}: PageHeroProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative pt-48 pb-32 overflow-hidden bg-brand-dark text-white min-h-[70vh] flex items-center group/hero">
            {/* 1. Immersive Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 h-full z-0">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover/hero:scale-105"
                        priority
                    />
                </div>
                
                {/* Mobile/Tablet Overlay (Full Width Vertical) */}
                <div className="absolute inset-0 bg-linear-to-b from-brand-dark/40 via-brand-dark/80 to-brand-dark lg:hidden z-10" />
                
                {/* Desktop Overlay (Split Horizontal) */}
                <div className="absolute inset-0 z-10 hidden lg:block">
                    <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/80 via-45% to-transparent z-10" />
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-brand-dark z-0" />
                </div>
                
                {/* Industrial Grid Overlay */}
                <div className="absolute inset-0 z-20 opacity-10" 
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
            </div>

          


            {/* 3. Main Content Container */}
            <div className="container mx-auto px-6 relative z-30">
                <div className="max-w-4xl lg:max-w-md xl:max-w-xl">
                    {/* Prefix with Rule Wipe Accent */}
                    <div className={cn(
                        "hidden lg:flex items-center gap-4 sm:gap-6 mb-4 md:mb-6 lg:mb-10 transition-all duration-1000",
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                    )}>
                        <div className="h-px w-12 lg:w-20 bg-brand scale-x-100 origin-left shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                        <span className="text-brand font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[10px] sm:text-xs">
                            {prefix}
                        </span>
                    </div>

                    <h1 className={cn(
                        "text-hero  mb-4 md:mb-6 lg:mb-10 transition-all duration-1000 delay-300",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    )}>
                        {title.split(' ')[0]}<br />
                        <span className="text-brand">{title.split(' ').slice(1).join(' ')}</span>
                    </h1>

                    <div className={cn(
                        "max-w-2xl border-l-4 border-brand/40 pl-8 bg-brand-dark/40 backdrop-blur-md py-4 relative group/desc transition-all duration-1000 delay-500",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    )}>
                        {/* Corner Accents */}
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand/50" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand/50 lg:hidden" />
                        
                        <p className="text-sm sm:text-base text-white/90 font-mono leading-relaxed lg:pr-12">
                            "{subtitle}"
                        </p>
                    </div>
                </div>
            </div>

            {/* 4. Bottom Glow Rule */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand/20 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-brand animate-pulse" />
        </section>
    );
}
