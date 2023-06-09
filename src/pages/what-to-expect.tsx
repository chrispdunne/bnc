import Page from "@/components/Page";
import SeoHead from "@/components/SeoHead";
import { SiteInfo, WPBlock, WPMenu } from "@/types";

interface Props {
    whatToExpectPage: {
        blocks: WPBlock[];
        seo: Record<string, string | null>;
    };
    menu: WPMenu;
    siteInfo: SiteInfo;
}

export default function WhatToExpect({
    whatToExpectPage,
    menu,
    siteInfo,
}: Props) {
    return (
        <>
            <SeoHead seo={whatToExpectPage.seo} />
            <Page page={whatToExpectPage} menu={menu} siteInfo={siteInfo} />
        </>
    );
}

export async function getStaticProps() {
    const whatToExpectPageRes = await fetch(
        process.env.REST_API_URL + "/page/what-to-expect"
    );
    const whatToExpectPage = await whatToExpectPageRes.json();

    const menuRes = await fetch(process.env.REST_API_URL + "/menus/header");
    const menu = await menuRes.json();

    const siteInfoRes = await fetch(process.env.REST_API_URL + "/site-info");
    const siteInfo = await siteInfoRes.json();

    return {
        props: {
            whatToExpectPage,
            menu,
            siteInfo,
        },
    };
}
