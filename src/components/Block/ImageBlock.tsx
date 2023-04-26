import { BlockComponentProps } from "@/types";

export default function ImageBlock({ block, index }: BlockComponentProps) {
    return <div dangerouslySetInnerHTML={{ __html: block.innerHTML }} />;
}
