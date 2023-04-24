import { WPBlock } from "@/types";
import Block from ".";

interface Props {
    block: WPBlock;
}

export default function CoverBlock({ block }: Props) {
    const imgUrl = block.attrs?.url;
    const { innerBlocks } = block;
    return (
        <div className="w-full" style={{ backgroundImage: `url(${imgUrl})` }}>
            {innerBlocks.map((innerBlock: WPBlock, i: number) => (
                <Block key={i} block={innerBlock} />
            ))}
        </div>
    );
}
