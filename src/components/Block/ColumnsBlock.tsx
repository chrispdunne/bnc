import { BlockComponentProps } from "@/types";
import { mapInnerBlocks } from "@/utils/block";

export default function ColumnsBlock({ block, index }: BlockComponentProps) {
    const colNum = block.innerBlocks.length;
    return (
        <div className={`max-w-5xl mx-auto py-20 px-8`}>
            <div className={`md:grid gap-8 items-center grid-cols-${colNum} `}>
                {mapInnerBlocks(index, block.innerBlocks)}
            </div>
        </div>
    );
}
