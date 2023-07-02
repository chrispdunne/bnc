import { MutableRefObject, useEffect } from "react";

export default function useClickOustide(
    ref: MutableRefObject<HTMLElement | null>,
    onClickOutside: () => void
) {
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
}
