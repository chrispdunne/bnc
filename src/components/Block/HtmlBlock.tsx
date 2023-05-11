import { BlockComponentProps } from "@/types";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    iframe {
        width: 100%;
        max-width: 600px;
    }
`;

export default function HtmlBlock({
    block: { innerHTML },
}: BlockComponentProps) {
    return <Container dangerouslySetInnerHTML={{ __html: innerHTML }} />;
}
