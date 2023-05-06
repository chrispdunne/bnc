import { BlockComponentProps } from "@/types";

export default function SpacerBlock({ block }: BlockComponentProps) {
    const height = block?.attrs?.height ?? "100px";
    return <div style={{ height }} />;
}
