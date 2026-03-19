"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { config } from "@/data/config";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    category?: string;
    className?: string;
    featured?: boolean;
}

export function ProductCard({
    title,
    description,
    image,
    category,
    className,
    featured = false,
}: ProductCardProps) {
    const whatsappLink = `https://wa.me/${config.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi ${config.companyName}, I'm interested in knowing more about ${title}.`)}`;

    return (
        <div
            className={cn(
                "group relative bg-white overflow-hidden industrial-border transition-all duration-500",
                featured ? "md:col-span-2 lg:flex" : "",
                className
            )}
        >
            {/* Image Area */}
            <div className={cn(
                "relative overflow-hidden",
                featured ? "lg:w-1/2 aspect-video lg:aspect-auto h-[300px] lg:h-auto" : "aspect-4/3"
            )}>
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                        <span className="text-slate-300 font-heading text-4xl">BS PAI</span>
                    </div>
                )}
                
                {category && (
                    <div className="absolute top-0 left-0 bg-brand text-brand-dark px-4 py-2 font-black text-[10px] uppercase tracking-widest">
                        {category}
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className={cn(
                "p-8 flex flex-col justify-between",
                featured ? "lg:w-1/2" : ""
            )}>
                <div>
                    <h3 className="text-2xl font-heading mb-4 text-brand-dark group-hover:text-brand transition-colors uppercase tracking-wider">
                        {title}
                    </h3>
                    <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm md:text-base">
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <Link 
                        href={whatsappLink}
                        target="_blank"
                        className="flex items-center gap-3 text-brand-dark font-black text-[11px] uppercase tracking-[0.2em] group/btn hover:text-brand transition-colors"
                    >
                        WhatsApp Enquiry <MoveRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                    </Link>
                    
                    {/* Visual spacer/structural element */}
                    <div className="h-[2px] w-8 bg-brand-accent/20 group-hover:w-12 transition-all duration-500" />
                </div>
            </div>
            
            {/* Scan Pulse - Industrial "Reading" indicator */}
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-1/4 h-full bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-scan-pulse shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
            </div>
            
            {/* Structural Highlight */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
        </div>
    );
}
