import { WPMenu } from "@/types";
import Link from "next/link";

export default function HeaderNav({
    active,
    menu,
}: {
    active: boolean;
    menu: WPMenu;
}) {
    return (
        <nav
            className={`
${active ? "active" : ""}
-right-full flex flex-col w-5/6 bg-white fixed h-screen top-0 text-right justify-center drop-shadow-2xl	
md:right-0 md:flex-row md:bg-transparent md:static md:h-auto md:w-auto`}
        >
            {menu.items?.map((item) => (
                <Link
                    className="
        text-5xl uppercase font-semibold leading-relaxed pr-8
        md:text-sm  md:px-3
        "
                    key={item.title}
                    href={item.url}
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    );
}
