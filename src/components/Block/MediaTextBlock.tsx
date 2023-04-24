import { WPBlock } from "@/types";
import { mapInnerBlocks, mapInnerContent } from "@/utils/block";

interface Props {
    block: WPBlock;
}

export default function MediaTextBlock({ block }: Props) {
    return (
        <>
            {mapInnerContent(block.innerContent)}
            {mapInnerBlocks(block.innerBlocks)}
        </>
    );
}
