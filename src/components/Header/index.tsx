import { SiteInfo, WPMenu } from "@/types";
import Image from "next/image";

interface Props {
    menu: WPMenu;
    siteInfo: SiteInfo;
}

export default function Header({ menu, siteInfo }: Props) {
    return (
        <header className={`flex items-center justify-between p-4`}>
            <Image
                src={siteInfo.logo}
                alt={siteInfo.siteName}
                width={300}
                height={108}
            />
            <nav>
                {menu.items.map((item) => (
                    <a
                        className="uppercase text-sm font-semibold px-3"
                        key={item.title}
                        href={item.url}
                    >
                        {item.title}
                    </a>
                ))}
            </nav>
        </header>
    );
}
