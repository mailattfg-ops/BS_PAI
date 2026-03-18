import { companyProfile, currentProjects } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { Target, Eye, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BusinessFlow } from "@/components/about/BusinessFlow";

export const metadata: Metadata = {
    title: "Our Legacy | Solid Foundation",
    description: "Learn about Solid Foundation's mission, vision, and decades of wholesale expertise in the construction industry.",
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. About Hero */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-brand-dark text-white min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0 opacity-10" 
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px w-20 bg-brand" />
                            <span className="text-brand font-black uppercase tracking-[0.6em] text-xs">Decades of Strength</span>
                        </div>
                        <h1 className="text-hero mb-12">
                            INDUSTRIAL<br />
                            <span className="text-brand">LEGACY.</span>
                        </h1>
                        <div className="max-w-2xl border-l-4 border-white/20 pl-8">
                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic">
                                "A robust wholesale platform delivering certified construction materials with industrial-strength logistics for over 25 years."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
                    <Image
                        src="/images/about_hero.png"
                        alt="About Solid Foundation"
                        fill
                        className="object-cover grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/40 to-transparent" />
                </div>
            </section>

            {/* 2. Philosophy & Expertise */}
            <section className="py-section bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <SectionHeader 
                        title="Our Core Philosophy"
                        subtitle="Precision sourcing meets massive logistics to deliver unyielding structural integrity."
                        prefix="Industrial Ethos"
                        align="center"
                    />

                    <div className="mt-24 space-y-12">
                        {/* Split Pillar Design */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-200">
                            {/* Mission */}
                            <div className="relative group p-16 lg:p-24 overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200">
                                <div className="absolute top-0 left-0 w-2 h-full bg-brand-dark" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="text-brand font-black text-6xl opacity-20 font-heading">01</span>
                                        <div className="h-px flex-1 bg-slate-200" />
                                    </div>
                                    <h4 className="text-5xl font-heading mb-10 text-brand-dark uppercase tracking-tight leading-none">
                                        OUR <span className="block text-brand">MISSION.</span>
                                    </h4>
                                    <div className="border-l-2 border-brand/30 pl-8">
                                        <p className="text-slate-500 text-xl leading-relaxed font-light italic">
                                            "{companyProfile.mission}"
                                        </p>
                                    </div>
                                </div>
                                {/* Background Decorative Text */}
                                <div className="absolute -bottom-4 -right-4 select-none pointer-events-none opacity-[0.03]">
                                    <span className="text-9xl font-heading uppercase">PURPOSE</span>
                                </div>
                            </div>

                            {/* Vision */}
                            <div className="relative group p-16 lg:p-24 overflow-hidden bg-brand-dark text-white">
                                <div className="absolute top-0 right-0 w-2 h-full bg-brand" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="text-brand font-black text-6xl opacity-40 font-heading">02</span>
                                        <div className="h-px flex-1 bg-white/10" />
                                    </div>
                                    <h4 className="text-5xl font-heading mb-10 text-white uppercase tracking-tight leading-none">
                                        OUR <span className="block text-brand">VISION.</span>
                                    </h4>
                                    <div className="border-l-2 border-brand/30 pl-8">
                                        <p className="text-slate-300 text-xl leading-relaxed font-light italic">
                                            "{companyProfile.vision}"
                                        </p>
                                    </div>
                                </div>
                                {/* Background Decorative Text */}
                                <div className="absolute -bottom-4 -right-4 select-none pointer-events-none opacity-[0.1]">
                                    <span className="text-9xl font-heading uppercase text-white">FUTURE</span>
                                </div>
                            </div>
                        </div>

                        {/* Professional Team Block */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
                            <div className="lg:col-span-8 bg-white border border-slate-200 p-16 lg:p-20 relative shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-brand-dark" />
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-heading mb-8 text-brand-dark uppercase tracking-widest border-b border-slate-100 pb-6">Industrial Commitment</h3>
                                    <p className="text-slate-500 text-2xl leading-relaxed font-light italic mb-12 max-w-2xl">
                                        "Solid Foundation is a specialized platform of wholesale entrepreneurs: expertised, skilled, committed and experienced in material logistics. We share a unified vision in supply chain excellence."
                                    </p>
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center gap-6 px-10 py-5 bg-brand-dark text-white font-heading text-lg tracking-[0.2em] uppercase transition-all hover:bg-brand hover:text-brand-dark shadow-xl"
                                    >
                                        Explore Inventory <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                                <Users className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-50 -z-10 transition-transform group-hover:scale-110 duration-700" />
                            </div>

                            <div className="lg:col-span-4 bg-brand p-16 flex flex-col justify-center text-center items-center shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-brand-dark/20" />
                                <div className="text-8xl font-heading text-brand-dark mb-4 transition-transform group-hover:scale-110 duration-500">25+</div>
                                <h4 className="text-2xl font-heading text-brand-dark uppercase tracking-widest mb-10 border-y border-brand-dark/10 py-4 w-full">Years Experience</h4>
                                <div className="space-y-4 text-brand-dark/70 font-bold text-xs leading-relaxed uppercase tracking-[0.3em]">
                                    <div className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-dark/20" /> MATERIAL SOURCING</div>
                                    <div className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-dark/20" /> QUALITY CONTROL</div>
                                    <div className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-dark/20" /> BULK SUPPLY</div>
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-dark/5 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Flow */}
            <BusinessFlow />

            {/* 3. Strategic Presence */}
            <section className="py-section bg-white">
                <div className="container mx-auto px-6">
                    <SectionHeader
                        title="Strategic Presence"
                        subtitle="Supplying massive material support for major landmarks and infrastructure projects."
                        prefix="Project Scope"
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
                        {currentProjects.slice(0, 3).map((project, idx) => (
                            <ProductCard 
                                key={idx}
                                title={project}
                                description="Comprehensive wholesale material supply and logistics for this major industrial project site."
                                image="" // Default block
                                category="Active Site"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-brand-dark text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-hero text-white mb-12">
                        JOIN OUR <span className="text-brand">MISSION.</span>
                    </h2>
                    <Link
                        href="/contact#inquiry-form"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-brand text-brand-dark font-heading text-2xl tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl uppercase"
                    >
                        Contact Experts Now <ArrowRight className="w-8 h-8" />
                    </Link>
                </div>
                {/* Structural background text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap">
                    <span className="text-[20rem] font-heading leading-none">SUPPLY CHAIN</span>
                </div>
            </section>
        </div>
    );
}
