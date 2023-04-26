import Page from "@/components/Page";
import { SiteInfo, WPBlock, WPMenu } from "@/types";
// import localFont from "next/font/local";

// const quilin = localFont({ src: "./quilin.woff2", variable: "--font-quilin" });

interface Props {
    homePage: {
        blocks: WPBlock[];
    };
    menu: WPMenu;
    siteInfo: SiteInfo;
}

export default function Home({ homePage, menu, siteInfo }: Props) {
    return (
        // <div className={`${quilin.variable} font-serif`}>
        <Page page={homePage} menu={menu} siteInfo={siteInfo} />
        // </div>
    );
}

export async function getStaticProps() {
    const homePageRes = await fetch(process.env.API_URL + "/pages/home");
    const homePage = await homePageRes.json();

    const menuRes = await fetch(process.env.API_URL + "/menus/header");
    const menu = await menuRes.json();

    const siteInfoRes = await fetch(process.env.API_URL + "/site-info");
    const siteInfo = await siteInfoRes.json();

    return {
        props: {
            homePage,
            menu,
            siteInfo,
        },
    };
}
