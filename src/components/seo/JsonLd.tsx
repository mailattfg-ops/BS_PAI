import { config } from "@/data/config";

export function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": config.companyName,
        "description": "Premium industrial-scale wholesale construction material supplier. Experts in Bulk Cement, Structural Steel, and Massive Infrastructure Supply.",
        "url": "https://www.solidfoundation.com", // Placeholder
        "telephone": config.whatsappNumber,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": `${config.address.line2}, ${config.address.line3}, ${config.address.line4}`,
            "addressLocality": config.address.line3,
            "postalCode": config.address.pin,
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
