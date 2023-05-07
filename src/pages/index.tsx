import Page from "@/components/Page";
import SeoHead from "@/components/SeoHead";
import { SiteInfo, WPBlock, WPMenu } from "@/types";

interface Props {
    homePage: {
        blocks: WPBlock[];
        id: number;
        tite: string;
        seo: Record<string, string | null>;
    };
    // yoastSeo: Record<string, string | null>;
    menu: WPMenu;
    siteInfo: SiteInfo;
}

export default function Home({ homePage, menu, siteInfo }: Props) {
    console.log({ homePage });
    return (
        <>
            <SeoHead seo={homePage.seo} />
            <Page page={homePage} menu={menu} siteInfo={siteInfo} />
        </>
    );
}

export async function getStaticProps() {
    const { NEXT_PUBLIC_CMS_URL, REST_API_URL } = process.env;
    const homePageRes = await fetch(REST_API_URL + "/page/home");
    const homePage = await homePageRes.json();

    const menuRes = await fetch(REST_API_URL + "/menus/header");
    const menu = await menuRes.json();

    const siteInfoRes = await fetch(REST_API_URL + "/site-info");
    const siteInfo = await siteInfoRes.json();

    // const yoastSeoRes = await fetch(
    //     `${NEXT_PUBLIC_CMS_URL}/wp-json/yoast/v1/get_head?url=${NEXT_PUBLIC_CMS_URL}/`
    // );
    // const yoastSeo = await yoastSeoRes.json();

    return {
        props: {
            homePage,
            menu,
            siteInfo,
            // yoastSeo,
        },
    };
}
