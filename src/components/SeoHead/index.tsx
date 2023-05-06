import Head from "next/head";
import getSchemaObject from "./schema";

export default function SeoHead({
    seo,
    yoastSeo,
}: {
    seo: Record<string, string | null>;
    yoastSeo: Record<string, string | null>;
}) {
    console.log({ seo, yoastSeo });
    const testSchema = getSchemaObject();
    // const yoastSchema = yoastSeo.
    // @TODO screen readers?
    const title = `${seo.breadcrumb_title} | ${process.env.NEXT_PUBLIC_SITENAME}`;
    const description = seo.description ?? "";
    const url = seo?.permalink?.replace(
        process.env.NEXT_PUBLIC_CMS_URL ?? "",
        process.env.NEXT_PUBLIC_FRONTEND_URL ?? ""
    );
    const ogImgUrl: string = seo.open_graph_image ?? "";
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta
                name="robots"
                content="index, follow, max-image-preview:large"
            />

            <title>{title}</title>
            <meta name="description" content={description} />

            <meta property="og:locale" content="en_GB" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta
                property="og:site_name"
                content={process.env.NEXT_PUBLIC_SITENAME}
            />

            <meta property="og:image" content={ogImgUrl} />

            <meta
                property="article:publisher"
                content="https://facebook.com/bncounsellinguk"
            />
            <meta
                property="article:modified_time"
                content={seo.object_last_modified ?? ""}
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:label1" content="Est. reading time" />
            <meta
                name="twitter:data1"
                content={`${seo.estimated_reading_time_minutes} minutes`}
            />

            <script type="application/ld+json">
                {JSON.stringify(getSchemaObject())}
            </script>
        </Head>
    );
}
