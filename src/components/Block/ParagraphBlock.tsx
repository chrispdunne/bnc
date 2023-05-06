import { BlockComponentProps, WPBlock } from "@/types";
import DOMPurify from "isomorphic-dompurify";

export default function ParagraphBlock({ block, index }: BlockComponentProps) {
    return (
        <>
            {block?.innerContent?.map((content, i) => (
                <div
                    className="py-2 max-w-5xl mx-auto px-8"
                    key={i}
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content),
                    }}
                />
            ))}
        </>
    );
}
