import { ContactClient } from "@/components/contact/ContactClient";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Connect with Solid Foundation experts for your next wholesale material supply. Get industrial-strength solutions and 24/7 logistics support.",
};

export default function Page() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-brand-dark flex items-center justify-center text-white italic font-black uppercase tracking-widest text-xl">Loading Logistics...</div>}>
            <ContactClient />
        </Suspense>
    );
}
