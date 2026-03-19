import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
    title: {
        default: `${config.companyName} | Industrial Wholesale Supply`,
        template: `%s | ${config.companyName}`
    },
    description: "Premium wholesale construction materials including Cement, Structural Steel, Bulk Bricks, and Industrial Coatings. Delivering industrial-grade reliability to massive infrastructure projects.",
    keywords: ["Construction Materials", "Wholesale Cement", "Structural Steel Supply", "Bulk Bricks", "Industrial Materials", "Construction Chemicals", "BS PAI", "Building Supplies"],
    authors: [{ name: "BS PAI" }],
    creator: "BS PAI",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://bspai.com", // Updated as requested
        siteName: config.companyName,
        title: config.companyName,
        description: "Leading wholesale construction material suppliers delivering industrial-strength solutions for massive projects.",
        images: [
            {
                url: "/images/cement_11zon.webp",
                width: 1200,
                height: 630,
                alt: config.companyName,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: config.companyName,
        description: "Industrial Strength Wholesale Material Supply.",
        images: ["/images/cement_11zon.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased" suppressHydrationWarning>
                <JsonLd />
                <Navbar />
                {children}
                <FloatingWhatsApp />
                <Footer />
            </body>
        </html>
    );
}
