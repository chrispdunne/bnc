import { BlockComponentProps } from "@/types";
import { mapInnerBlocks } from "@/utils/block";

export default function ColumnBlock({ block, index }: BlockComponentProps) {
    return <div>{mapInnerBlocks(index, block.innerBlocks)}</div>;
}
