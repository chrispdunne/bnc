import Block from "@/components/Block";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SiteInfo, WPBlock, WPMenu } from "@/types";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
                className={`flex min-h-screen flex-col items-center justify-between   ${inter.className}`}
            >
                {page?.blocks
                    ?.filter((block: WPBlock) => block.blockName != null)
                    ?.map((block: WPBlock, i: number) => (
                        <Block key={i} block={block} />
                    ))}
            </main>
            <Footer />
        </>
    );
}
