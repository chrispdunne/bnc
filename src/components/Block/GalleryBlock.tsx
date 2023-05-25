import { BlockComponentProps } from "@/types";
import Block from ".";

export default function GalleryBlock({
    block: { innerBlocks },
}: BlockComponentProps) {
    return (
        <div className="flex p-8 gap-4">
            {innerBlocks.map((block, index) => {
                block.attrs = { ...block.attrs, expandable: true };
                return <Block key={index} block={block} index={index} />;
            })}
        </div>
    );
}
