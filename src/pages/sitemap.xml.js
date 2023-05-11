function generateSiteMap() {
    var today = new Date();
    var todayISO = today.toISOString().slice(0, -14);

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${process.env.NEXT_PUBLIC_FRONTEND_URL}/</loc>
            <lastmod>${todayISO}</lastmod>
        </url>
        <url>
            <loc>${process.env.NEXT_PUBLIC_FRONTEND_URL}/what-to-expect</loc>
            <lastmod>${todayISO}</lastmod>
        </url>
        <url>
            <loc>${process.env.NEXT_PUBLIC_FRONTEND_URL}/contact</loc>
            <lastmod>${todayISO}</lastmod>
        </url> 
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    const sitemap = generateSiteMap();

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
