import Block from "@/components/Block";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SiteInfo, WPBlock, WPMenu } from "@/types";
import localFont from "next/font/local";
import Script from "next/script";
import { ReactNode } from "react";

const quilin = localFont({ src: "./quilin.woff2", variable: "--font-quilin" });
interface Props {
    page: {
        blocks: WPBlock[];
    };
    menu: WPMenu;
    siteInfo: SiteInfo;
    children?: ReactNode;
}

export default function Page({ page, menu, siteInfo, children }: Props) {
    return (
        <>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-B12TGX1DDT"
                strategy="afterInteractive"
            />
            <Script id="ga">
                {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B12TGX1DDT')`}
            </Script>

            <Header siteInfo={siteInfo} menu={menu} />
            <main
                className={`flex min-h-screen flex-col items-center ${quilin.variable} `}
            >
                {page?.blocks
                    ?.filter((block: WPBlock) => block.blockName != null)
                    ?.map((block: WPBlock, i: number) => (
                        <Block index={i} key={i} block={block} />
                    ))}
                {children}
            </main>
            <Footer />
        </>
    );
}
