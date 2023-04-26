import { BlockComponentProps, WPBlock } from "@/types";
import { mapInnerBlocks, mapInnerContent } from "@/utils/block";

export default function MediaTextBlock({ block, index }: BlockComponentProps) {
    const { mediaPosition } = block.attrs;
    return (
        <div
            className={`max-w-5xl py-8 mx-auto items-center flex${
                mediaPosition === "right" ? " flex-row-reverse" : ""
            }`}
        >
            {mapInnerContent(block.innerContent)}
            {mapInnerBlocks(index, block.innerBlocks)}
        </div>
    );
}
