import useClickOustide from "@/hooks/useClickOutside";
import { BlockComponentProps } from "@/types";
import { useCallback, useRef, useState } from "react";

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
