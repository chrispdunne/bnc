import { SiteInfo, WPMenu } from "@/types";
import Image from "next/image";
import Link from "next/link";
import MobileButton from "../Buttons/MobileButton";
import { useState } from "react";
import HeaderNav from "./HeaderNav";

interface Props {
    menu: WPMenu;
    siteInfo: SiteInfo;
}

export default function Header({ menu, siteInfo }: Props) {
    const [mobileNavActive, setMobileNavActive] = useState(false);
    return (
        <header className={`flex items-center justify-between p-4`}>
            <Link href="/">
                <Image
                    className="w-52 mt-2 md:w-auto md:mt-0"
                    src="/logo.jpg"
                    alt={siteInfo.siteName}
                    width={300}
                    height={108}
                />
            </Link>
            <MobileButton
                mobileNavActive={mobileNavActive}
                setMobileNavActive={setMobileNavActive}
            />
            <HeaderNav menu={menu} active={mobileNavActive} />
        </header>
    );
}
