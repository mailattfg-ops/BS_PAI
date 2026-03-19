import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export function FinalCTA() {
    return (
        <ScrollReveal>
            <section className="py-32 bg-brand-dark text-center relative overflow-hidden border-t border-white/5">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-hero text-white mb-4 md:mb-6 lg:mb-8 xl:mb-12 uppercase">
                        READY TO <span className="text-brand">START?</span>
                    </h2>
                    <Link
                        href="/contact#inquiry-form"
                        className="inline-flex items-center gap-4 px-6 py-4 md:px-8 md:py-5 lg:px-12 lg:py-6 bg-brand text-brand-dark font-heading text-2xl tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl uppercase"
                    >
                        Secure Your Supply <ArrowRight className="w-8 h-8" />
                    </Link>
                </div>
                {/* Structural background text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap">
                    <span className="text-[15rem] md:text-[20rem] font-heading leading-none">BUILDING GIANTS</span>
                </div>
            </section>
        </ScrollReveal>
    );
}
