import { BlockComponentProps } from "@/types";

export default function HtmlBlock({
    block: { innerHTML },
}: BlockComponentProps) {
    return <div dangerouslySetInnerHTML={{ __html: innerHTML }} />;
}
