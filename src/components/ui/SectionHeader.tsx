"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    prefix?: string;
    className?: string;
    align?: "left" | "center";
    dark?: boolean;
}

export function SectionHeader({
    title,
    subtitle,
    prefix = "Industrial Excellence",
    className,
    align = "center",
    dark = false,
}: SectionHeaderProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Start rule wipe (400ms) then show content
                    setTimeout(() => setShowContent(true), 400);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "xl:mb-12 lg:mb-8 md:mb-6 mb-4 max-w-4xl relative",
                align === "center" && "mx-auto text-center",
                className
            )}
        >
            {/* Signature Rule Wipe Line */}
            <div 
                className={cn(
                    "absolute top-0 left-0 w-full h-[1px] bg-brand z-20 pointer-events-none scale-x-0 origin-left",
                    isVisible && "animate-rule-wipe"
                )}
            />

            <div className={cn(
                "transition-all duration-700 delay-100",
                showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
                {/* Prefix with Accent Block */}
                <div className={cn(
                    "flex items-stretch gap-4 mb-6",
                    align === "center" && "justify-center"
                )}>
                    <div className="w-2 bg-brand" />
                    <span className={cn(
                        "text-xs md:text-sm lg:text-base xl:text-lg font-black uppercase tracking-[0.5em] leading-none py-1",
                        dark ? "text-brand" : "text-brand-accent"
                    )}>
                        {prefix}
                    </span>
                </div>

                {/* Title */}
                <h2
                    className={cn(
                        "text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading mb-2 uppercase",
                        dark ? "text-white" : "text-brand-dark"
                    )}
                >
                    {title}
                </h2>

                {subtitle && (
                    <div className={cn(
                        "border-l-4 pl-8 transition-colors mt-4",
                        dark ? "border-brand" : "border-brand-accent/30",
                        align === "center" && "border-l-0 border-t-4 pl-0 max-w-2xl mx-auto"
                    )}>
                        <p
                            className={cn(
                                "text-sm md:text-base lg:text-lg xl:text-xl font-light italic",
                                dark ? "text-slate-400" : "text-slate-500"
                            )}
                        >
                            "{subtitle}"
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
