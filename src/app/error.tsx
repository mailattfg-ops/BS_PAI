"use client";

import { useEffect } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-6 text-center">
             {/* Structural Background */}
             <div className="absolute inset-0 opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '64px 64px' }} />

            <div className="relative z-10 max-w-2xl w-full">
                <ProductCard
                    title="500 - CRITICAL FAILURE"
                    description="An unexpected structural error occurred in the system. Our logistics team has been notified."
                    image=""
                    category="System Error"
                />

                <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-brand text-brand-dark font-heading text-xl tracking-widest hover:scale-105 active:scale-95 transition-all uppercase shadow-2xl"
                    >
                        <RefreshCw className="w-6 h-6" /> Re-trigger Supply
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white/20 text-white font-heading text-xl tracking-widest hover:bg-white/10 transition-all uppercase"
                    >
                        <Home className="w-6 h-6" /> Return to Base
                    </Link>
                </div>
            </div>
        </main>
    );
}
