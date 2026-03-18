import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
    title: {
        default: `${config.companyName} | Engineering Intelligence`,
        template: `%s | ${config.companyName}`
    },
    description: "Premium wholesale construction materials including Cement, Structural Steel, Bulk Bricks, and Industrial Coatings. Industrial strength at wholesale scale.",
    keywords: ["Construction Materials", "Wholesale Cement", "Structural Steel Supply", "Bulk Bricks", "Industrial Materials", "Solid Foundation", "Building Supplies"],
    authors: [{ name: "Solid Foundation" }],
    creator: "Solid Foundation",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://solidfoundation.com", // Placeholder for actual domain
        siteName: config.companyName,
        title: config.companyName,
        description: "Leading wholesale construction material suppliers delivering industrial-strength solutions for massive projects.",
        images: [
            {
                url: "/images/og-image.jpg",
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
        images: ["/images/og-image.jpg"],
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
