import ContactForm from "@/components/ContactForm";
import Page from "@/components/Page";
import SeoHead from "@/components/SeoHead";
import { SiteInfo, WPBlock, WPMenu } from "@/types";
import { ReCaptchaProvider } from "next-recaptcha-v3";

interface Props {
    contactPage: {
        blocks: WPBlock[];
        seo: Record<string, string | null>;
    };
    menu: WPMenu;
    siteInfo: SiteInfo;
}

export default function Contact({ contactPage, menu, siteInfo }: Props) {
    return (
        <ReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        >
            <SeoHead seo={contactPage.seo} />

            <Page page={contactPage} menu={menu} siteInfo={siteInfo}>
                <ContactForm />
            </Page>
        </ReCaptchaProvider>
    );
}

export async function getStaticProps() {
    const contactPageRes = await fetch(
        process.env.REST_API_URL + "/page/contact"
    );
    const contactPage = await contactPageRes.json();

    const menuRes = await fetch(process.env.REST_API_URL + "/menus/header");
    const menu = await menuRes.json();

    const siteInfoRes = await fetch(process.env.REST_API_URL + "/site-info");
    const siteInfo = await siteInfoRes.json();

    return {
        props: {
            contactPage,
            menu,
            siteInfo,
        },
    };
}
