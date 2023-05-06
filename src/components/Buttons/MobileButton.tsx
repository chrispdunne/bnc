interface Props {
    mobileNavActive: boolean;
    setMobileNavActive: (v: boolean) => void;
}

export default function MobileButton({
    mobileNavActive,
    setMobileNavActive,
}: Props) {
    return (
        <button
            className="z-30 fixed top-10 right-5  md:hidden  "
            onClick={() => setMobileNavActive(!mobileNavActive)}
        >
            <i className={`toggle ${mobileNavActive ? "close" : "open"}`}>
                <span className="i1" />
                <span className="i2" />
                <span className="i3" />
            </i>
        </button>
    );
}
