export default function getSchemaObject() {
    // https://schema.org/PsychologicalTreatment

    // when have 2+ testimonials https://schema.org/AggregateRating

    // RICH snippets for counselling https://developers.google.com/search/docs/appearance/structured-data/search-gallery
    //// breadcrumb
    //// FAQ (what to expect?) OR Q&A??
    //// local business
    //// logo
    //// (possibly)speakable

    const siteUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
    const siteName = "BN Counselling";
    const pageName = "Home";
    const description =
        "BACP registered humanistic counsellor with experience working in the NHS with depression, anxiety, bereavement, self harm, suicidal ideation";
    const siteDescription = "Humanistic Counselling in Brighton &amp; Hove";

    const logoUrl = `${siteUrl}/logo.jpg`;
    // const logoUrl = `${siteUrl}/wp-content/uploads/2023/04/bnc-logo.jpeg`;

    const datePublished = "2023-04-23T13:12:23+00:00";
    const dateModified = "2023-04-30T19:03:31+00:00";

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${siteUrl}/`,
                url: `${siteUrl}/`,
                name: `${pageName} - ${siteName}`,
                isPartOf: { "@id": `${siteUrl}/#website` },
                about: { "@id": `${siteUrl}/#organization` },
                primaryImageOfPage: { "@id": `${siteUrl}/#primaryimage` },
                image: { "@id": `${siteUrl}/#primaryimage` },
                thumbnailUrl: `${logoUrl}`,
                datePublished,
                dateModified,
                description: description,
                breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
                inLanguage: "en-GB",
                potentialAction: [
                    { "@type": "ReadAction", target: [`${siteUrl}/`] },
                ],
            },
            {
                "@type": "ImageObject",
                inLanguage: "en-GB",
                "@id": `${siteUrl}/#primaryimage`,
                url: `${logoUrl}`,
                contentUrl: `${logoUrl}`,
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${siteUrl}/#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: pageName },
                ],
            },
            {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                url: `${siteUrl}/`,
                name: `${siteName}`,
                description: siteDescription,
                publisher: { "@id": `${siteUrl}/#organization` },
                potentialAction: [
                    {
                        "@type": "SearchAction",
                        target: {
                            "@type": "EntryPoint",
                            urlTemplate: `${siteUrl}/?s={search_term_string}`,
                        },
                        "query-input": "required name=search_term_string",
                    },
                ],
                inLanguage: "en-GB",
            },
            {
                "@type": "LocalBusiness",
                "@id": `${siteUrl}/#localbusiness`,
                name: `${siteName}`,
                url: `${siteUrl}/`,
                telephone: "0800 000 000",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Brighton & Hove",
                    addressRegion: "East Sussex",
                    postalCode: "BN3 2BB",
                    streetAddress: "Hove Therapy Rooms, 69 Church Rd",
                },
                priceRange: "££",
                logo: {
                    "@type": "ImageObject",
                    inLanguage: "en-GB",
                    "@id": `${siteUrl}/#/schema/logo/image/`,
                    url: logoUrl,
                    contentUrl: logoUrl,
                    width: 1530,
                    height: 551,
                    caption: `${siteName}`,
                },
                image: { "@id": `${siteUrl}/#/schema/logo/image/` },
                sameAs: [
                    "https://facebook.com/bncounsellinguk",
                    "https://www.instagram.com/bn.counselling",
                ],
            },
            {
                "@type": "PsychologicalTreatment",
                "@id": `${siteUrl}/#psychologicaltreatment`,
                url: `${siteUrl}/`,
                howPerformed: "In person or online talking therapy",
                recognizingAuthority: {
                    "@type": "Organization",
                    name: "British Association for Counselling and Psychotherapy",
                    url: "https://www.bacp.co.uk",
                },
            },
        ],
    };
}
