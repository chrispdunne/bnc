import Image from "next/image";

export default function Footer() {
    return (
        <div
            className={`
        border-t-2 border-slate-100 items-end justify-between px-8 pt-8 pb-8
        md:flex  
        `}
        >
            <Image
                src="/bacp.jpg"
                alt="BACP registered member 398394"
                width={500 * 0.6}
                height={223 * 0.6}
                className="mx-auto mb-12 md:mb-0 md:mx-0"
            />

            <div className="text-xs text-center">
                &copy;{new Date().getFullYear()} BN Counselling. BACP Registered
                Member 393394.
            </div>
        </div>
    );
}
