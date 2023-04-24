import { WPBlock } from "@/types";
import MediaTextBlock from "./MediaTextBlock";
import CoverBlock from "./CoverBlock";

interface Props {
    block: WPBlock;
}

const BlockSwitch = ({ block }: Props) => {
    switch (block.blockName) {
        case "core/cover": {
            return <CoverBlock block={block} />;
        }
        case "core/embed": {
            return <>embed</>;
        }
        case "core/image": {
            return <>image</>;
        }
        case "core/list": {
            return <>list</>;
        }
        case "core/paragraph": {
            return <>paragraph</>;
        }
        case "core/quote": {
            return <>quote</>;
        }
        case "core/media-text": {
            return <MediaTextBlock block={block} />;
        }
    }
};

export default function Block({ block }: Props) {
    return (
        <div className="w-full">
            <BlockSwitch block={block} />
        </div>
    );
}
