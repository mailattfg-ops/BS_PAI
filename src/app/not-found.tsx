"use client";

import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-6 text-center">
            {/* Structural Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '64px 64px' }} />
            
            <div className="relative z-10 max-w-2xl w-full">
                <ProductCard
                    title="404 - SITE NOT FOUND"
                    description="The supply route you are looking for does not exist or has been relocated in our regional network."
                    image=""
                    category="Logistics Error"
                />

                <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-brand text-brand-dark font-heading text-xl tracking-widest hover:scale-105 active:scale-95 transition-all uppercase shadow-2xl"
                    >
                        <Home className="w-6 h-6" /> Return to Base
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white/20 text-white font-heading text-xl tracking-widest hover:bg-white/10 transition-all uppercase"
                    >
                        <ArrowLeft className="w-6 h-6" /> Previous Route
                    </button>
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 p-12 opacity-10 hidden md:block">
                <span className="text-9xl font-heading text-white">404</span>
            </div>
        </main>
    );
}
