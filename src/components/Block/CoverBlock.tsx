import { WPBlock } from "@/types";
import { mapInnerBlocks } from "@/utils/block";
import Image from "next/image";

interface Props {
    block: WPBlock;
    index: number;
}

export default function CoverBlock({ block, index }: Props) {
    const imgUrl = block.attrs?.url;
    const { innerBlocks } = block;

    return (
        <div
            className="w-full h-50v bg-cover flex flex-col justify-center relative"
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            <div className="max-w-5xl w-full z-10 mx-auto">
                {mapInnerBlocks(index, innerBlocks)}
            </div>
            {imgUrl && (
                <>
                    <div
                        className="absolute"
                        style={{
                            inset: 0,
                            backdropFilter: "blur(5px)",
                            zIndex: 0,
                        }}
                    />
                    <Image
                        src={imgUrl}
                        alt={"background-image"}
                        fill
                        style={{ objectFit: "cover", zIndex: -1 }}
                        priority={index === 0}
                    />
                </>
            )}
        </div>
    );
}
