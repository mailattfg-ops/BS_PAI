"use client";

import { MessageCircle } from "lucide-react";
import { config } from "@/data/config";

export function FloatingWhatsApp() {
    const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent("Hello BS PAI! I'm interested in wholesale construction material supply.")}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="h-8 w-8" />
        </a>
    );
}
