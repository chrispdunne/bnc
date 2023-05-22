import { BlockComponentProps } from "@/types";
import styled from "styled-components";

const StyledButtonWrapper = styled.div`
    a {
        background: var(--brand-blue);
        background: linear-gradient(
            -45deg,
            var(--brand-blue),
            var(--brand-blue-dark)
        );
        color: #fff;
        transition: all 0.2s ease-in-out;
        border: 1px solid var(--brand-blue);
        padding: 1rem 2rem;
        margin: 1.2rem 2rem 0;
        display: inline-block;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        &:hover {
            background: rgba(255, 255, 255, 1);
            color: #000;
        }
    }
    .white-btn {
        a {
            background: #fff;
            color: var(--brand-blue);
            border-color: #fff;
            &:hover {
                background: var(--brand-blue);
                color: #fff;
            }
        }
    }
`;

export default function ButtonBlock({ block }: BlockComponentProps) {
    const cmsUrlPattern = new RegExp(
        process.env.NEXT_PUBLIC_CMS_URL ?? "",
        "g"
    );
    const buttonHTML = block.innerHTML.replace(cmsUrlPattern, "");
    return (
        <StyledButtonWrapper dangerouslySetInnerHTML={{ __html: buttonHTML }} />
    );
}
