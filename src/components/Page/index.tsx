import Block from "@/components/Block";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SiteInfo, WPBlock, WPMenu } from "@/types";
import localFont from "next/font/local";

const quilin = localFont({ src: "./quilin.woff2", variable: "--font-quilin" });
interface Props {
    page: {
        blocks: WPBlock[];
    };
    menu: WPMenu;
    siteInfo: SiteInfo;
}

export default function Page({ page, menu, siteInfo }: Props) {
    return (
        <>
            <Header siteInfo={siteInfo} menu={menu} />

            <main
                className={`flex min-h-screen flex-col items-center justify-between ${quilin.variable} `}
            >
                {page?.blocks
                    ?.filter((block: WPBlock) => block.blockName != null)
                    ?.map((block: WPBlock, i: number) => (
                        <Block index={i} key={i} block={block} />
                    ))}
            </main>
            <Footer />
        </>
    );
}
