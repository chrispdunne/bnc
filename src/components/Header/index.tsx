import { SiteInfo, WPMenu } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
    menu: WPMenu;
    siteInfo: SiteInfo;
}

export default function Header({ menu, siteInfo }: Props) {
    return (
        <header className={`flex items-center justify-between p-4`}>
            <Link href="/">
                <Image
                    src="/logo.jpg"
                    alt={siteInfo.siteName}
                    width={300}
                    height={108}
                />
            </Link>
            <nav>
                {menu.items?.map((item) => (
                    <Link
                        className="uppercase text-sm font-semibold px-3"
                        key={item.title}
                        href={item.url}
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
