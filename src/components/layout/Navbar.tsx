"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Building2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent("Hello Solid Foundation! I'm interested in your wholesale construction materials.")}`;

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-100 transition-all duration-300 h-16 flex items-center",
                scrolled
                    ? "bg-brand-dark/95 backdrop-blur-md border-b border-white/10 shadow-2xl"
                    : "bg-brand-dark/80 backdrop-blur-sm border-b border-white/5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="h-10 w-10 bg-brand flex items-center justify-center text-brand-dark transition-transform duration-500 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                        <Building2 className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-heading text-white tracking-widest leading-none">
                            SOLID<span className="text-brand">FOUNDATION</span>
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="h-px w-4 bg-brand" />
                            <span className="text-[8px] font-sans text-brand-accent uppercase tracking-[0.2em]">Wholesale Scale</span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-heading tracking-[0.2em] uppercase transition-all duration-300 relative group py-2",
                                pathname === link.href ? "text-brand" : "text-white/70 hover:text-white"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute bottom-0 left-0 w-full h-px bg-brand transition-transform duration-500 origin-right group-hover:origin-left",
                                pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            )} />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-brand text-brand-dark px-8 py-3 font-heading text-lg tracking-widest uppercase hover:bg-white transition-all duration-500 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none translate-y-[-2px] hover:translate-y-0"
                    >
                        Bulk Inquiry
                        <span className="ml-2">→</span>
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className={cn(
                        "lg:hidden h-10 w-10 flex items-center justify-center transition-all duration-300 relative z-1001",
                        isOpen 
                            ? "bg-white text-brand-dark" 
                            : "bg-brand text-brand-dark shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Sidebar - 100vw Industrial Design */}
            <div
                className={cn(
                    "fixed inset-0 w-full h-screen bg-brand z-1000 transition-transform duration-500 ease-in-out lg:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full px-6 pb-6 pt-20">


                    {/* LINKS */}
                    <div className="flex flex-col gap-10">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-5xl sm:text-6xl font-heading tracking-tighter uppercase transition-all duration-300",
                                    pathname === link.href 
                                        ? "text-black translate-x-4" 
                                        : "text-white hover:text-black/60"
                                )}
                                style={{ transitionDelay: `${i * 50}ms` }}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* BOTTOM ACTIONS */}
                    <div className="mt-auto pb-10 gap-6">
                        <div className="h-px w-full bg-black/20" />
                        <Link
                            href="/contact"
                            className="bg-brand-dark text-white px-8 py-5 font-heading text-2xl tracking-widest uppercase flex items-center justify-center gap-4 shadow-2xl active:scale-95 transition-transform"
                            onClick={() => setIsOpen(false)}
                        >
                            Request Quote <ChevronRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
