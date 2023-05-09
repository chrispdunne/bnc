import { WPMenu } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";

const removeSlashes = (str: string) => str.replace(/\//g, "");

export default function HeaderNav({
    active,
    menu,
}: {
    active: boolean;
    menu: WPMenu;
}) {
    const router = useRouter();
    const { pathname } = router;

    return (
        <nav
            className={`
${active ? "active" : ""}
-right-full z-20 flex flex-col w-11/12 bg-white fixed h-screen top-0 text-right justify-center drop-shadow-2xl	
md:right-0 md:flex-row md:bg-transparent md:static md:h-auto md:w-auto`}
        >
            {menu.items?.map((item) => (
                <Link
                    className={`
        ${removeSlashes(pathname) === removeSlashes(item.url) ? "active" : ""}
        text-3xl uppercase font-semibold leading-tight pr-8 my-4
        md:text-sm  md:px-3
        `}
                    key={item.title}
                    href={item.url}
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    );
}
