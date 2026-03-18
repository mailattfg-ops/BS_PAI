"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { StatCounter } from '@/components/ui/StatCounter';

/* ════════════════════════════════════════════
   BURJ KHALIFA ISOMETRIC PROFILE ENGINE
   ════════════════════════════════════════════ */
const TOTAL_FLOORS = 163;

function getBKProfile(floorFrac: number) {
  const rects: Array<{cx: number, cy: number, w: number, h: number}> = [];
  function r(cx: number, cy: number, w: number, h: number) { rects.push({cx, cy, w, h}); }

  if (floorFrac <= 0.15) {
    const s = 1.0;
    r(0, 0, 7*s, 7*s);      
    r(-3.5*s, 0, 2*s, 5*s); 
    r( 3.5*s, 0, 2*s, 5*s); 
    r(0, -3.5*s, 5*s, 2*s); 
  } else if (floorFrac <= 0.35) {
    const t = (floorFrac - 0.15) / 0.20; 
    const s = 1.0 - t * 0.25;
    r(0, 0, 6*s, 6*s);
    r(-3*s, 0.3*s, 1.8*s, 4*s);
    r( 3*s, 0.3*s, 1.8*s, 4*s);
    r(0, -3*s, 4*s, 1.8*s);
  } else if (floorFrac <= 0.52) {
    const t = (floorFrac - 0.35) / 0.17;
    const s = 0.78 - t * 0.18;
    r(0, 0, 5*s, 5*s);
    r(-2.5*s, 0.2*s, 1.5*s, 3.5*s);
    r( 2.5*s, 0.2*s, 1.5*s, 3.5*s);
    r(0, -2.5*s, 3.5*s, 1.5*s);
  } else if (floorFrac <= 0.67) {
    const t = (floorFrac - 0.52) / 0.15;
    const s = 0.58 - t * 0.16;
    r(0, 0, 4.5*s, 4.5*s);
    r(-2*s, 0, 1.2*s, 3*s);
    r( 2*s, 0, 1.2*s, 3*s);
    r(0, -2*s, 3*s, 1.2*s);
  } else if (floorFrac <= 0.80) {
    const t = (floorFrac - 0.67) / 0.13;
    const s = 0.40 - t * 0.10;
    r(0, 0, 4*s, 4*s);
    r(-1.5*s, 0, 1*s, 2.5*s);
    r( 1.5*s, 0, 1*s, 2.5*s);
  } else if (floorFrac <= 0.92) {
    const t = (floorFrac - 0.80) / 0.12;
    const s = 0.28 - t * 0.10;
    r(0, 0, 3.5*s, 3.5*s);
    r(-1*s, 0, 0.8*s, 2*s);
    r( 1*s, 0, 0.8*s, 2*s);
  } else if (floorFrac <= 0.98) {
    const t = (floorFrac - 0.92) / 0.06;
    const s = 0.17 - t * 0.09;
    r(0, 0, 3*s, 3*s);
  } else {
    const t = (floorFrac - 0.98) / 0.02;
    const s = 0.07 - t * 0.06;
    r(0, 0, Math.max(0.7, 3*s), Math.max(0.7, 3*s));
  }

  return rects;
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
            const navbarHeight = 64; // Constant height for fixed behavior
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

        let W = 0, H = 0, tileW = 0, tileH = 0, originX = 0, originY = 0;

        const resize = () => {
            const container = cv.parentElement;
            if (!container) return;
            W = container.offsetWidth;
            H = container.offsetHeight;
            cv.width = W * devicePixelRatio;
            cv.height = H * devicePixelRatio;
            ctx.scale(devicePixelRatio, devicePixelRatio);
            
            const base = Math.min(W, H);
            const isXL = W >= 1280;
            const isMD = W >= 768;
            render(progress);
        };

        const isoProject = (gx: number, gy: number, gz: number, scale: number, oX: number, oY: number) => {
            // Horizontal stretching and vertical scaling
            const stretchW = 3.2; 
            const scaleHFactor = 0.26; 
            const sx = oX + (gx - gz) * scale * stretchW * 0.866;
            const sy = oY - gy * scale * scaleHFactor + (gx + gz) * scale * 0.5;
            return [sx, sy];
        };

        const drawBox = (cx: number, cz: number, w: number, d: number, h: number, yBase: number, scale: number, oX: number, oY: number, colors: any, alpha: number, glowAmt: number, isHeroTop = false, pVal = 0) => {
            if (alpha < 0.005) return;

            const stretchW = 3.2; 
            const x0 = cx - w/2, x1 = cx + w/2;
            const z0 = cz - d/2, z1 = cz + d/2;
            const y1 = yBase + h;

            const p = (gx: number, gy: number, gz: number) => isoProject(gx, gy, gz, scale, oX, oY);

            const [tx0,ty0] = p(x0, y1, z0);
            const [tx1,ty1] = p(x1, y1, z0);
            const [tx2,ty2] = p(x1, y1, z1);
            const [tx3,ty3] = p(x0, y1, z1);

            const [bx2,by2] = p(x1, yBase, z1);
            const [bx3,by3] = p(x0, yBase, z1);
            const [bx0,by0] = p(x0, yBase, z0);

            ctx.globalAlpha = alpha;

            /* Scaffolding phase (only for top active slab if not complete) */
            if (isHeroTop && pVal < 0.98) {
                ctx.strokeStyle = `rgba(197, 160, 89, ${alpha * 0.3})`;
                ctx.lineWidth = 1;
                const sh = h * 1.5; 
                const [sx0,sy0] = p(x0, yBase + sh, z0);
                const [sx1,sy1] = p(x1, yBase + sh, z0);
                const [sx2,sy2] = p(x1, yBase + sh, z1);
                const [sx3,sy3] = p(x0, yBase + sh, z1);
                
                ctx.beginPath();
                ctx.moveTo(sx0,sy0); ctx.lineTo(sx1,sy1); ctx.lineTo(sx2,sy2); ctx.lineTo(sx3,sy3);
                ctx.closePath();
                ctx.stroke();
            }

            /* Face colors */
            ctx.beginPath();
            ctx.moveTo(tx0,ty0); ctx.lineTo(tx1,ty1); ctx.lineTo(tx2,ty2); ctx.lineTo(tx3,ty3);
            ctx.closePath();
            ctx.fillStyle = colors.top;
            ctx.fill();
            ctx.strokeStyle = glowAmt > 0 ? `rgba(197, 160, 89, ${glowAmt * 0.6})` : 'rgba(148,163,184,0.07)';
            ctx.lineWidth = glowAmt > 0 ? 1 : 0.5;
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(tx0,ty0); ctx.lineTo(tx3,ty3); ctx.lineTo(bx3,by3); ctx.lineTo(bx0,by0);
            ctx.closePath();
            ctx.fillStyle = colors.left;
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(tx3,ty3); ctx.lineTo(tx2,ty2); ctx.lineTo(bx2,by2); ctx.lineTo(bx3,by3);
            ctx.closePath();
            ctx.fillStyle = colors.right;
            ctx.fill();

            // 3. Architectural Windows & Struts
            if (alpha > 0.3) {
                ctx.strokeStyle = `rgba(0,0,0,${alpha * 0.1})`;
                ctx.lineWidth = 0.5;
                
                // Vertical struts on left face
                for (let i = 1; i < 4; i++) {
                    const offset = i * (w/4);
                    const [vx0, vy0] = p(cx - w/2 + offset, yBase, cz + d/2);
                    const [vx1, vy1] = p(cx - w/2 + offset, yBase + h, cz + d/2);
                    ctx.beginPath(); ctx.moveTo(vx0, vy0); ctx.lineTo(vx1, vy1); ctx.stroke();
                }

                // Window pattern
                if (h > 2) {
                    ctx.fillStyle = `rgba(13, 27, 42, ${alpha * 0.2})`;
                    const winW = w * 0.1 * stretchW * scale;
                    const winH = h * 0.2 * scale;
                    // Draw small dots/slits representing windows
                    // (Omitted detailed loop for performance, using a subtle overlay instead)
                }
            }

            if (glowAmt > 0) {
                ctx.strokeStyle = `rgba(197, 160, 89, ${glowAmt * 0.85})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(tx0,ty0); ctx.lineTo(tx1,ty1); ctx.lineTo(tx2,ty2); ctx.lineTo(tx3,ty3);
                ctx.closePath();
                ctx.stroke();
            }

            /* Construction Crane on Hero Top */
            if (isHeroTop && pVal < 0.98 && pVal > 0.1) {
                ctx.save();
                ctx.strokeStyle = '#C5A059';
                ctx.lineWidth = 1.5;
                const [cx0,cy0] = p(0, yBase + h, 0);
                
                // Vertical mast
                ctx.beginPath();
                ctx.moveTo(cx0, cy0);
                ctx.lineTo(cx0, cy0 - 20 * scale / 30);
                ctx.stroke();
                
                // Jib (arm)
                const angle = (pVal % 0.1) * Math.PI * 20;
                const jLen = 15 * scale / 30;
                const jx = Math.cos(angle) * jLen;
                const jy = Math.sin(angle) * (jLen * 0.5);
                
                ctx.beginPath();
                ctx.moveTo(cx0 - jx, cy0 - 20 * scale / 30 - jy);
                ctx.lineTo(cx0 + jx * 0.3, cy0 - 20 * scale / 30 + jy * 0.3);
                ctx.stroke();
                ctx.restore();
            }

            ctx.globalAlpha = 1;
        };

        const render = (p: number) => {
            ctx.clearRect(0, 0, W, H);
            if (p < 0.001) return;

            const baseSize = Math.min(W, H);
            const isXL = W >= 1280;
            const isMD = W >= 768;

            const scale = baseSize * (isXL ? 0.017 : (isMD ? 0.014 : 0.012));
            const oX = isXL ? W * 0.70 : W * 0.55;
            const oY = isXL ? H * 0.88 : (isMD ? H * 0.90 : H * 0.92); 

            const floorsVisible = Math.round(p * TOTAL_FLOORS);
            const FLOOR_HEIGHT = 1.0; 
            const SLAB = 3; 

            // Ground plane grid
            const groundAlpha = Math.min(1, p * 6);
            if (groundAlpha > 0.02) {
                ctx.globalAlpha = groundAlpha * 0.3;
                ctx.strokeStyle = 'rgba(148,163,184,0.2)';
                ctx.lineWidth = 0.5;
                const R = 8;
                for (let i = -R; i <= R; i++) {
                    const [ax,ay] = isoProject(i, 0, -R, scale, oX, oY);
                    const [bx,by] = isoProject(i, 0,  R, scale, oX, oY);
                    ctx.beginPath(); ctx.moveTo(ax,ay); ctx.lineTo(bx,by); ctx.stroke();
                    const [cx,cy] = isoProject(-R, 0, i, scale, oX, oY);
                    const [dx,dy] = isoProject( R, 0, i, scale, oX, oY);
                    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(dx,dy); ctx.stroke();
                }
                ctx.globalAlpha = 1;
            }

            for (let f = 0; f < floorsVisible; f += SLAB) {
                const fTop = Math.min(f + SLAB, floorsVisible);
                const fFrac = fTop / TOTAL_FLOORS;
                const yBase = f * FLOOR_HEIGHT;
                const slabH = (fTop - f) * FLOOR_HEIGHT;

                const rects = getBKProfile(fFrac);
                
                const bCol = 10 + fFrac * 14;
                const bSat = 28 - fFrac * 8;
                const colors = {
                    top: `hsl(212,${bSat+4}%,${bCol+7}%)`,
                    left: `hsl(212,${bSat+2}%,${bCol+1}%)`,
                    right: `hsl(212,${bSat}%,${bCol-4}%)`,
                };

                const isTop = (f + SLAB) >= floorsVisible;
                const topAlpha = isTop ? ((floorsVisible - f) / SLAB) : 1;
                const glowAmt = isTop ? Math.min(1, topAlpha * 1.4) : 0;

                const sorted = [...rects].sort((a, b) => (b.cx + b.cy) - (a.cx + a.cy));

                sorted.forEach(rect => {
                    const isCore = rect.cx === 0 && rect.cy === 0;
                    drawBox(rect.cx, rect.cy, rect.w, rect.h, slabH, yBase, scale, oX, oY, colors, topAlpha, glowAmt, isTop && isCore, p);
                });
            }

            // Spire Tip
            if (p >= 0.98) {
                const spireAlpha = (p - 0.98) / 0.02;
                const spireH = 3.5;
                const yBase = TOTAL_FLOORS * FLOOR_HEIGHT;
                const [sx0,sy0] = isoProject(0, yBase + spireH, 0, scale, oX, oY);
                const [sx1,sy1] = isoProject(-0.3, yBase, -0.3, scale, oX, oY);
                const [sx2,sy2] = isoProject( 0.3, yBase,  0.3, scale, oX, oY);
                
                ctx.globalAlpha = spireAlpha;
                ctx.beginPath();
                ctx.moveTo(sx0, sy0); ctx.lineTo(sx1, sy1); ctx.lineTo(sx2, sy2);
                ctx.closePath();
                ctx.fillStyle = '#C5A059';
                ctx.fill();
                ctx.strokeStyle = '#F8FAFC';
                ctx.lineWidth = 1;
                ctx.stroke();

                // Halo
                const grad = ctx.createRadialGradient(sx0, sy0, 0, sx0, sy0, 40 * scale / 30);
                grad.addColorStop(0, 'rgba(197, 160, 89, 0.6)');
                grad.addColorStop(1, 'rgba(197, 160, 89, 0)');
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(sx0, sy0, 40 * scale / 30, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
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

                {/* Hero Text Layer */}
                <div className={cn(
                    "absolute top-1/2 left-8 md:left-24 z-30 transition-all duration-700",
                    textVisible 
                        ? "opacity-100 -translate-y-1/2" 
                        : "opacity-0 -translate-y-1/4"
                )}>
                    <div className="flex items-center gap-4 mb-3">
                        <div className="h-[1px] w-8 bg-brand" />
                    </div>

                    <h1 className="text-white font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.85] uppercase mb-4">
                        Foundation <span className="text-brand-accent/40 industrial-outline">Materials.</span><br />
                        Industrial <span className="text-brand-accent/40 industrial-outline">Scale.</span>
                    </h1>

                    <div className="h-[1px] w-48 bg-brand-accent/20 mb-4" />

                    <p className="text-brand-accent text-xs lg:text-sm xl:text-base max-w-sm mb-6 font-mono leading-relaxed">
                        Bulk cement & structural steel.<br />
                        Site delivery in 48 hours.<br />
                        300km radius · IS certified.
                    </p>

                    <div className="flex flex-wrap gap-6 mb-6">
                        <div className="border-r border-brand-accent/20 pr-8">
                            <div className="text-xl lg:text-2xl xl:text-3xl font-heading text-white"><StatCounter end={48} suffix="K" /></div>
                            <div className="text-[9px] uppercase tracking-widest text-brand-accent">Cement Units</div>
                        </div>
                        <div className="border-r border-brand-accent/20 pr-8">
                            <div className="text-xl lg:text-2xl xl:text-3xl font-heading text-white"><StatCounter end={120} suffix="+" /></div>
                            <div className="text-[9px] uppercase tracking-widest text-brand-accent">Monthly MT</div>
                        </div>
                        <div>
                            <div className="text-xl lg:text-2xl xl:text-3xl font-heading text-white"><StatCounter end={48} suffix="H" /></div>
                            <div className="text-[9px] uppercase tracking-widest text-brand-accent">Dispatch SLA</div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link href="/services" className="px-8 py-4 bg-brand text-brand-dark font-heading text-xs sm:text-base lg:text-lg xl:text-xl uppercase tracking-widest hover:bg-white transition-colors">
                            Explore Services →
                        </Link>
                        <Link href="/contact" className="px-8 py-4 border border-brand-accent/30 text-white font-heading text-xs sm:text-base lg:text-lg xl:text-xl uppercase tracking-widest hover:bg-white/5 transition-colors">
                            Request Quote
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
                @keyframes arrowDrop {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(200%); }
                }
            `}</style>
        </div>
    );
}
