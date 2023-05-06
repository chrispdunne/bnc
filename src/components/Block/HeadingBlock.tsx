import { BlockComponentProps } from "@/types";

export default function HeadingBlock({ block, index }: BlockComponentProps) {
    const { fontSize, textAlign, style, level } = block.attrs;
    const headingLevel = level != null ? level : 99;

    return (
        <div
            className={`${headingLevel < 5 ? "mb-4" : "mb-2"} px-8`}
            dangerouslySetInnerHTML={{ __html: block.innerHTML }}
        />
    );
}
