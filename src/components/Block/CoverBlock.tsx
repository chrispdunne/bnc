import { WPBlock } from "@/types";
import { mapInnerBlocks } from "@/utils/block";

interface Props {
    block: WPBlock;
}

export default function CoverBlock({ block }: Props) {
    const imgUrl = block.attrs?.url;
    const { innerBlocks } = block;

    return (
        <div
            className="w-full h-50v bg-cover flex flex-col justify-center"
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            {mapInnerBlocks(innerBlocks)}
        </div>
    );
}
