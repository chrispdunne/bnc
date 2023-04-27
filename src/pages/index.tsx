import Page from "@/components/Page";
import { SiteInfo, WPBlock, WPMenu } from "@/types";

interface Props {
    homePage: {
        blocks: WPBlock[];
    };
    menu: WPMenu;
    siteInfo: SiteInfo;
}

export default function Home({ homePage, menu, siteInfo }: Props) {
    return <Page page={homePage} menu={menu} siteInfo={siteInfo} />;
}

export async function getStaticProps() {
    const homePageRes = await fetch(process.env.REST_API_URL + "/page/home");
    const homePage = await homePageRes.json();

    const menuRes = await fetch(process.env.REST_API_URL + "/menus/header");
    const menu = await menuRes.json();

    const siteInfoRes = await fetch(process.env.REST_API_URL + "/site-info");
    const siteInfo = await siteInfoRes.json();

    return {
        props: {
            homePage,
            menu,
            siteInfo,
        },
    };
}
