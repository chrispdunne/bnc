import { BlockComponentProps } from "@/types";
import { mapInnerBlocks } from "@/utils/block";
import OptimizedImage from "../Image/OptimizedImage";
import NonOptimizedImage from "../Image/NonOptimizedImage";

export default function CoverBlock({ block, index }: BlockComponentProps) {
    const imgUrl = block.attrs?.url;
    const { attrs, innerBlocks } = block;
    const shouldOptimizeImage = !(attrs.className === "non-opt");

    return (
        <div className="w-full h-50v min-h-min flex flex-col justify-center relative">
            <div className="max-w-5xl w-full z-10 mx-auto">
                {mapInnerBlocks(index, innerBlocks)}
            </div>
            {imgUrl &&
                (shouldOptimizeImage ? (
                    <OptimizedImage imgUrl={imgUrl} index={index} />
                ) : (
                    <NonOptimizedImage
                        imgUrl={imgUrl}
                        index={index}
                        shouldBlur
                    />
                ))}
        </div>
    );
}
