import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-row-reverse border-t-2 border-slate-100 items-end justify-between px-8 pt-8 pb-8">
            <div className="text-xs">
                &copy;{new Date().getFullYear()} BN Counselling. BACP Registered
                Member 393394.
            </div>
            <Image
                src="/bacp.jpg"
                alt="BACP registered member 398394"
                width={500 * 0.6}
                height={223 * 0.6}
            />
        </div>
    );
}
