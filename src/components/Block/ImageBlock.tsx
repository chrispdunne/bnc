import { BlockComponentProps } from "@/types";
import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

const useClickOustide = (
    ref: MutableRefObject<HTMLElement | null>,
    onClickOutside: () => void
) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClickOutside, ref]);
};

export default function ImageBlock({ block }: BlockComponentProps) {
    const { expandable } = block.attrs;
    const [active, setActive] = useState(false);
    const ref = useRef(null);

    const onClose = useCallback(() => setActive(false), []);
    useClickOustide(ref, onClose);

    return (
        <>
            {active && (
                <div
                    ref={ref}
                    className="fixed inset-8 md:inset-24 z-50 cursor-pointer"
                >
                    <div
                        className="absolute z-60 right-6 top-4 font-bold text-3xl"
                        onClick={onClose}
                    >
                        x
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: block.innerHTML }}
                    />
                </div>
            )}
            {expandable ? (
                <div
                    className="cursor-pointer"
                    dangerouslySetInnerHTML={{ __html: block.innerHTML }}
                    onClick={() => setActive(true)}
                />
            ) : (
                <div dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
            )}
        </>
    );
}
