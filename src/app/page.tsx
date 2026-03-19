import { IsoHero } from "@/components/home/IsoHero";
import { Expertise } from "@/components/home/Expertise";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicePreview } from "@/components/home/ServicePreview";
import { Clients } from "@/components/home/Clients";
import { Testimonials } from "@/components/home/Testimonials";
import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "BS PAI | Industrial Wholesale Material Supply & Logistics",
    description: "BS PAI delivers premium construction materials with industrial-grade reliability. Specializing in Bulk Cement, Structural Steel, and Massive Site Supply Logistics.",
};
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-brand selection:text-white">
            <IsoHero />
            <ScrollReveal><Expertise /></ScrollReveal>
            <PlatformShowcase />
            <ScrollReveal delay={0.1}><WhyChooseUs /></ScrollReveal>
            <ScrollReveal><ServicePreview /></ScrollReveal>
            <ScrollReveal delay={0.1}><Clients /></ScrollReveal>
            <ScrollReveal><Testimonials /></ScrollReveal>

            {/* Final CTA - Lead Generation */}
            <section className="py-32 bg-brand-dark text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-hero text-white mb-12">
                        READY TO <span className="text-brand">START?</span>
                    </h2>
                    <Link
                        href="/contact#inquiry-form"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-brand text-brand-dark font-heading text-2xl tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl uppercase"
                    >
                        Secure Your Supply <ArrowRight className="w-8 h-8" />
                    </Link>
                </div>
                {/* Structural background text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap">
                    <span className="text-[20rem] font-heading leading-none">BUILDING GIANTS</span>
                </div>
            </section>
        </main>
    );
}
