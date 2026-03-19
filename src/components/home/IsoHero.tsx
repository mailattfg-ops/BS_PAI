"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { StatCounter } from '@/components/ui/StatCounter';
import { ArrowRight } from 'lucide-react';

/* ════════════════════════════════════════════
   BURJ KHALIFA ISOMETRIC PROFILE ENGINE
   ════════════════════════════════════════════ */
/* ════════════════════════════════════════════
   CITY SKYLINE ENGINE (REPLACED BURJ)
   ════════════════════════════════════════════ */
interface BuildingDef {
    x: number;
    w: number;
    h: number;
    col: string;
    wCol: string;
    tier: number;
    top?: boolean;
    tall?: boolean;
}

interface BuildingSet {
    defs: BuildingDef[];
    gY: number;
}

function easeOut(t: number): number {
    return 1 - Math.pow(1 - Math.min(t, 1), 3);
}

function buildingDefs(W: number, H: number): BuildingSet {
    const gY = Math.floor(H * 0.88);
    return {
        gY,
        defs: [
            // Background tier
            { x: W * 0.02,  w: W * 0.055, h: gY * 0.42, col: "#c4cad6", wCol: "#dde3ed", tier: 0 },
            { x: W * 0.085, w: W * 0.040, h: gY * 0.34, col: "#bcc3ce", wCol: "#d5dae6", tier: 0 },
            { x: W * 0.860, w: W * 0.060, h: gY * 0.40, col: "#c2c8d4", wCol: "#dbe1eb", tier: 0 },
            { x: W * 0.928, w: W * 0.048, h: gY * 0.32, col: "#bac0cb", wCol: "#d2d8e2", tier: 0 },
            // Mid tier
            { x: W * 0.135, w: W * 0.068, h: gY * 0.58, col: "#9da8bc", wCol: "#c5cede", tier: 1 },
            { x: W * 0.215, w: W * 0.052, h: gY * 0.50, col: "#a6b0c2", wCol: "#cad2e0", tier: 1 },
            { x: W * 0.742, w: W * 0.068, h: gY * 0.54, col: "#9ba5b6", wCol: "#c2cad6", tier: 1 },
            { x: W * 0.822, w: W * 0.048, h: gY * 0.46, col: "#a0aab8", wCol: "#c8d0da", tier: 1 },
            // Foreground tier
            { x: W * 0.275, w: W * 0.092, h: gY * 0.78, col: "#808898", wCol: "#b5bec8", tier: 2, top: true },
            { x: W * 0.378, w: W * 0.078, h: gY * 0.67, col: "#7a8290", wCol: "#b0b9c3", tier: 2 },
            { x: W * 0.465, w: W * 0.115, h: gY * 0.92, col: "#70808e", wCol: "#aab6c0", tier: 2, top: true, tall: true },
            { x: W * 0.592, w: W * 0.088, h: gY * 0.72, col: "#788088", wCol: "#adb5c0", tier: 2 },
            { x: W * 0.692, w: W * 0.065, h: gY * 0.62, col: "#7c8490", wCol: "#b2bac5", tier: 2 },
        ],
    };
}

export function IsoHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!stageRef.current) return;
            const stageRect = stageRef.current.getBoundingClientRect();
            const stageHeight = stageRef.current.offsetHeight - window.innerHeight;
            const scrolled = -stageRect.top;
            const p = Math.max(0, Math.min(1, scrolled / stageHeight));
            setProgress(p);
            
            if (p >= 0.55) setTextVisible(true);
            else if (p < 0.45) setTextVisible(false);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const cv = canvasRef.current;
        if (!cv) return;
        const ctx = cv.getContext('2d');
        if (!ctx) return;

        let W = 0, H = 0;

        const resize = () => {
            const container = cv.parentElement;
            if (!container) return;
            W = container.offsetWidth;
            H = container.offsetHeight;
            cv.width = W * devicePixelRatio;
            cv.height = H * devicePixelRatio;
            cv.style.width = `${W}px`;
            cv.style.height = `${H}px`;
            render(progress);
        };

        const render = (p: number) => {
            ctx.clearRect(0, 0, cv.width, cv.height);

            const dpr = devicePixelRatio || 1;
            ctx.save();
            ctx.scale(dpr, dpr);

            const { defs, gY } = buildingDefs(W, H);

            // Sky (Transparent to let bg-brand-dark show)

            for (let i = 0; i < defs.length; i++) {
                const b = defs[i];

                // Per-building stagger
                const tierOffset = b.tier === 0 ? 0.0 : b.tier === 1 ? 0.08 : 0.16;
                const idxOffset = (i / defs.length) * 0.10;
                const start = tierOffset + idxOffset;
                const raw = (p - start) / (1.0 - start);
                const prog = easeOut(Math.max(0, Math.min(1, raw)));
                if (prog <= 0) continue;

                const bH = b.h * prog;
                const bX = b.x;
                const bW = b.w;
                const bY = gY - bH;

                // Drop shadow projection
                ctx.globalAlpha = 0.10 * prog;
                ctx.fillStyle = "#3a4050";
                ctx.beginPath();
                ctx.moveTo(bX + bW, bY);
                ctx.lineTo(bX + bW + bW * 0.18, bY + bH * 0.12);
                ctx.lineTo(bX + bW + bW * 0.18, gY + 2);
                ctx.lineTo(bX + bW, gY);
                ctx.closePath();
                ctx.fill();
                ctx.globalAlpha = 1;

                // Building body
                ctx.fillStyle = b.col;
                ctx.fillRect(bX, bY, bW, bH);

                // Left highlight
                ctx.fillStyle = "rgba(255,255,255,0.14)";
                ctx.fillRect(bX, bY, 3, bH);

                // Right shadow stripe
                ctx.fillStyle = "rgba(0,0,0,0.18)";
                ctx.fillRect(bX + bW - 5, bY, 5, bH);

                // Windows
                const winProg = Math.max(0, (prog - 0.25) / 0.75);
                if (winProg > 0.05 && bH > 20) {
                    const cols = Math.max(2, Math.floor(bW / 9));
                    const rows = Math.max(2, Math.floor(bH / 12));
                    const wW = Math.max(2, (bW - (cols + 1) * 3) / cols);
                    const wH = Math.max(2.5, (bH - (rows + 1) * 4) / rows);
                    ctx.globalAlpha = winProg * 0.65;
                    for (let r = 0; r < rows; r++) {
                        for (let c = 0; c < cols; c++) {
                            const wx = bX + 3 + c * (wW + 3);
                            const wy = bY + 4 + r * (wH + 4);
                            const bright = ((r * 7 + c * 13) % 5) < 3;
                            ctx.fillStyle = bright ? b.wCol : "rgba(90,100,115,0.35)";
                            ctx.fillRect(wx, wy, wW, wH);
                        }
                    }
                    ctx.globalAlpha = 1;
                }

                // Rooftop setback + antenna
                if (b.top && prog > 0.9) {
                    const topA = Math.min(1, (prog - 0.9) / 0.1);
                    ctx.globalAlpha = topA;
                    const tw = bW * 0.62;
                    const tx = bX + bW * 0.19;
                    const th = bH * 0.055;
                    ctx.fillStyle = "#606870";
                    ctx.fillRect(tx, bY - th, tw, th + 1);
                    if (b.tall) {
                        ctx.strokeStyle = "#484e55";
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(bX + bW / 2, bY - th);
                        ctx.lineTo(bX + bW / 2, bY - th - 20);
                        ctx.stroke();
                        ctx.fillStyle = "#cc4444";
                        ctx.beginPath();
                        ctx.arc(bX + bW / 2, bY - th - 22, 3, 0, Math.PI * 2);
                        ctx.fill();
                    }
                    ctx.globalAlpha = 1;
                }
            }

            // Ground line
            ctx.fillStyle = "rgba(119, 141, 169, 0.2)";
            ctx.fillRect(0, gY, W, 1);

            // Plaza
            ctx.fillStyle = "rgba(13, 27, 42, 0.4)";
            ctx.fillRect(0, gY + 1, W, cv.height / dpr - gY - 1);
            
            ctx.fillStyle = "rgba(119, 141, 169, 0.1)";
            ctx.fillRect(0, gY + 14, W, 1);
            ctx.fillRect(0, gY + 24, W, 1);

            // Reflection
            ctx.save();
            ctx.globalAlpha = 0.16;
            ctx.translate(0, gY * 2 + 4);
            ctx.scale(1, -1);
            for (let i = 0; i < defs.length; i++) {
                const b = defs[i];
                const tierOffset = b.tier === 0 ? 0.0 : b.tier === 1 ? 0.08 : 0.16;
                const idxOffset = (i / defs.length) * 0.10;
                const start = tierOffset + idxOffset;
                const raw = (p - start) / (1.0 - start);
                const prog = easeOut(Math.max(0, Math.min(1, raw)));
                if (prog <= 0) continue;
                const bH = Math.min(b.h * prog, 40);
                ctx.fillStyle = b.col;
                ctx.fillRect(b.x, gY - b.h * prog, b.w, bH);
            }
            ctx.restore();

            ctx.restore();
        };

        window.addEventListener('resize', resize);
        resize();
        
        return () => window.removeEventListener('resize', resize);
    }, [progress]);

    return (
        <div className="scroll-stage relative h-[300vh] pt-16 bg-brand-dark" ref={stageRef}>
            <div className="hero-sticky sticky top-16 h-[calc(100vh-64px)] overflow-hidden bg-brand-dark shadow-inner">
                {/* 3D Canvas */}
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

                {/* Industrial Blueprint Overlay */}
                <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.035]" 
                    style={{ 
                        backgroundImage: 'linear-gradient(rgba(148,163,184,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.5) 1px, transparent 1px)',
                        backgroundSize: '48px 48px'
                    }} 
                />

                {/* Noise Overaly */}
                <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.02] mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
                />

                <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 h-32 w-[1px] bg-brand-accent/20 z-20 hidden md:block">
                    <div className="absolute top-0 left-0 w-full bg-brand transition-all duration-100" style={{ height: `${progress * 100}%` }} />
                </div>

                {/* Initial Brand Centered - Visible only at the start */}
                <div className={cn(
                    "absolute inset-0 z-25 flex items-center justify-center transition-all duration-700 pointer-events-none",
                    progress > 0.1 
                        ? "opacity-0 scale-110 blur-sm" 
                        : "opacity-100 scale-100 blur-0"
                )}>
                    <div className="text-center px-4">
                        <div className="inline-block mb-2 overflow-hidden">
                            <span className="block text-brand text-[10px] md:text-xs tracking-[0.8em] uppercase mb-2 animate-in fade-in slide-in-from-bottom-2 duration-1000">
                                Establishing
                            </span>
                        </div>
                        <h2 className="text-white font-heading text-5xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-none mb-6">
                            BS <span className="text-brand industrial-outline-bold">PAI</span>
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-8 md:w-16 bg-brand/30" />
                            <p className="text-brand-light font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase opacity-70">
                                Premium Construction Materials
                            </p>
                            <div className="h-px w-8 md:w-16 bg-brand/30" />
                        </div>
                    </div>
                </div>

                {/* Hero Text Layer */}
                <div className={cn(
                    "absolute top-1/2 left-8 md:left-24 z-30 transition-all duration-700",
                    textVisible 
                        ? "opacity-100 -translate-y-1/2" 
                        : "opacity-0 -translate-y-1/4"
                )}>
                    <div className="flex items-center gap-4 mb-3">
                        <div className="h-px w-8 bg-brand" />
                    </div>

                    <h1 className="text-hero text-white mb-4">
                        Foundation Materials.<br />
                        Industrial Scale.
                    </h1>

                    <div className="h-px w-48 bg-brand-accent/20 mb-4" />

                    <div className="border-l-2 border-brand/40 pl-6 mb-8 py-2 bg-brand-dark/40 backdrop-blur-sm max-w-sm">
                        <p className="text-white/90 text-xs lg:text-sm xl:text-base font-mono leading-relaxed">
                            Bulk cement & structural steel.<br />
                            Site delivery in 48 hours.<br />
                            300km radius · IS certified.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/inventory" className="px-6 py-3 sm:px-8 sm:py-4 bg-brand text-brand-dark font-heading text-sm sm:text-base lg:text-lg xl:text-xl uppercase tracking-widest hover:bg-white transition-colors text-center">
                            Explore Inventory →
                        </Link>
                        <Link href="/contact" className="group relative inline-flex items-center justify-center gap-4 px-6 py-3 sm:px-8 sm:py-4 bg-brand-dark text-white border-l-4 border-brand transition-all hover:bg-white hover:text-brand-dark active:scale-95 shadow-2xl font-heading text-sm sm:text-base lg:text-lg xl:text-xl uppercase tracking-widest overflow-hidden text-center">
                            Request Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Floating Tag */}
                <div className={cn(
                    "absolute top-4 right-8 md:right-24 z-30 transition-all duration-700 hidden lg:block",
                    textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                    <div className="px-4 py-2 border border-brand/30 bg-brand-dark/50 backdrop-blur-md text-[10px] uppercase tracking-widest text-brand">
                        Wholesale Supplier · Est. 2008
                    </div>
                </div>

                {/* Live Ticker Strip */}
                <div className={cn(
                    "absolute bottom-0 left-0 w-full bg-brand-dark/80 backdrop-blur-xl border-t border-brand-accent/10 py-3 z-40 transition-opacity duration-500",
                    textVisible ? "opacity-100" : "opacity-0"
                )}>
                    <div className="flex whitespace-nowrap animate-ticker group">
                        {[1,2].map((i) => (
                            <div key={i} className="flex gap-12 items-center px-6">
                                <span className="text-[10px] text-brand-accent flex items-center gap-2">
                                    OPC 53 GRADE <span className="text-white">48,200 MT</span> <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                </span>
                                <span className="text-[10px] text-brand-accent flex items-center gap-2">
                                    TMT 500D REBAR <span className="text-white">₹58,200/T</span> <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                </span>
                                <span className="text-[10px] text-brand-accent flex items-center gap-2">
                                    MS I-BEAM <span className="text-white">820 T</span> <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                </span>
                                <span className="text-[10px] text-brand-accent flex items-center gap-2">
                                    PPC BLEND <span className="text-white">12,400 MT</span> <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                                </span>
                                <span className="text-[10px] text-brand-accent flex items-center gap-2">
                                    MS PLATE 10MM <span className="text-white">340 T</span> <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Scroll Down */}
                <div className={cn(
                    "absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 transition-opacity",
                    progress > 0.05 ? "opacity-0" : "opacity-100"
                )}>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent">Scroll</span>
                    <div className="w-[1px] h-12 bg-brand-accent/20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-brand animate-[arrowDrop_1.8s_ease-in-out_infinite]" />
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .industrial-outline {
                    -webkit-text-stroke: 1px rgba(148, 163, 184, 0.4);
                    color: transparent;
                }
                .industrial-outline-bold {
                    -webkit-text-stroke: 1.5px rgba(197, 160, 89, 0.5);
                    color: transparent;
                }
                .industrial-outline-brand {
                    -webkit-text-stroke: 1px rgba(197, 160, 89, 0.6);
                    color: transparent;
                }
                @keyframes arrowDrop {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(200%); }
                }
            `}</style>
        </div>
    );
}
