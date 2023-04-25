import { WPBlock } from "@/types";
import DOMPurify from "isomorphic-dompurify";

interface Props {
    block: WPBlock;
    index: number;
}

export default function ParagraphBlock({ block, index }: Props) {
    return (
        <>
            {block?.innerContent?.map((content, i) => (
                <div
                    key={i}
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content),
                    }}
                />
            ))}
        </>
    );
}
