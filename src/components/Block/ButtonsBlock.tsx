import { BlockComponentProps, WPBlock } from "@/types";
import Block from ".";

export default function ButtonsBlock({
    block: { attrs, innerBlocks },
}: BlockComponentProps) {
    const layout = attrs?.layout;
    let flex = false;
    let flexJustify = "";
    if (layout?.type === "flex") {
        flex = true;
        flexJustify = layout?.justifyContent;
    }
    const justify = flexJustify
        ?.replace("right", "end")
        .replace("left", "start");
    return (
        <div
            className={`${flex ? "flex" : ""} ${
                justify ? `justify-${justify}` : ""
            }`}
        >
            {innerBlocks.map((block: WPBlock, index: number) => (
                <Block key={index} block={block} index={index} />
            ))}
        </div>
    );
}
