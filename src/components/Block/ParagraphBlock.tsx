import { BlockComponentProps, WPBlock } from "@/types";
import DOMPurify from "isomorphic-dompurify";

export default function ParagraphBlock({ block, index }: BlockComponentProps) {
    return (
        <>
            {block?.innerContent?.map((content, i) => (
                <div
                    className="py-2"
                    key={i}
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content),
                    }}
                />
            ))}
        </>
    );
}
