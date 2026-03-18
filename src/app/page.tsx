import { IsoHero } from "@/components/home/IsoHero";
import { Expertise } from "@/components/home/Expertise";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicePreview } from "@/components/home/ServicePreview";
import { Clients } from "@/components/home/Clients";
import { Testimonials } from "@/components/home/Testimonials";
import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
    title: "Solid Foundation | Industrial Strength Wholesale Material Supply",
    description: "Solid Foundation delivers premium construction materials with industrial-grade reliability. Experts in Bulk Cement, Structural Steel, and Massive Supply Logistics.",
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
        </main>
    );
}
