import { BlockComponentProps, WPBlock } from "@/types";
import MediaTextBlock from "./MediaTextBlock";
import CoverBlock from "./CoverBlock";
import ParagraphBlock from "./ParagraphBlock";
import ColumnsBlock from "./ColumnsBlock";
import ColumnBlock from "./ColumnBlock";
import ImageBlock from "./ImageBlock";
import HeadingBlock from "./HeadingBlock";
import SpacerBlock from "./SpacerBlock";
import HtmlBlock from "./HtmlBlock";

export default function Block({ block, index }: BlockComponentProps) {
    switch (block.blockName) {
        case "core/cover": {
            return <CoverBlock block={block} index={index} />;
        }
        case "core/embed": {
            return <>embed</>;
        }
        case "core/image": {
            return <ImageBlock block={block} index={index} />;
        }
        case "core/list": {
            return <>list</>;
        }
        case "core/paragraph": {
            return <ParagraphBlock block={block} index={index} />;
        }
        case "core/quote": {
            return <>quote</>;
        }
        case "core/media-text": {
            return <MediaTextBlock block={block} index={index} />;
        }
        case "core/columns": {
            return <ColumnsBlock block={block} index={index} />;
        }
        case "core/column": {
            return <ColumnBlock block={block} index={index} />;
        }
        case "core/heading": {
            return <HeadingBlock block={block} index={index} />;
        }
        case "core/spacer": {
            return <SpacerBlock block={block} index={index} />;
        }
        case "core/html": {
            return <HtmlBlock block={block} index={index} />;
        }

        default: {
            console.info(`block definition not found: ${block.blockName}`);
            return null;
        }
    }
}
