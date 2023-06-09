import Block from "@/components/Block";
import { WPBlock } from "@/types";
import DOMPurify from "isomorphic-dompurify";

export function mapInnerBlocks(index: number, innerBlocks?: WPBlock[]) {
    return innerBlocks?.map((innerBlock: WPBlock, i: number) => (
        <Block key={i} block={innerBlock} index={index} />
    ));
}

export function mapInnerContent(innerContent?: string[]) {
    return innerContent?.map((content: string, i: number) => (
        <div
            key={i}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />
    ));
}
