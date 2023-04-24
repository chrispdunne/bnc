import { WPBlock } from "@/types";
import MediaTextBlock from "./MediaTextBlock";
import CoverBlock from "./CoverBlock";
import ParagraphBlock from "./ParagraphBlock";

interface Props {
    block: WPBlock;
}

export default function Block({ block }: Props) {
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
            return <ParagraphBlock block={block} />;
        }
        case "core/quote": {
            return <>quote</>;
        }
        case "core/media-text": {
            return <MediaTextBlock block={block} />;
        }
    }
}
