import { WPBlock } from "@/types";
import { mapInnerBlocks, mapInnerContent } from "@/utils/block";

interface Props {
    block: WPBlock;
    index: number;
}

export default function MediaTextBlock({ block, index }: Props) {
    return (
        <>
            {mapInnerContent(block.innerContent)}
            {mapInnerBlocks(index, block.innerBlocks)}
        </>
    );
}
