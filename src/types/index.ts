import { CSSObject } from "styled-components";

type Alignment = "left" | "right" | "center";
export interface WPBlock {
    attrs: {
        dimRatio?: number;
        id?: number;
        url?: string;
        align?: Alignment;
        fontSize?: string;
        mediaPosition?: Alignment;
        textAlign?: Alignment;
        style?: CSSObject;
        level?: number;
        className?: string;
        height?: string;
    };
    blockName:
        | "core/paragraph"
        | "core/quote"
        | "core/image"
        | "core/list"
        | "core/embed"
        | "core/cover"
        | "core/media-text"
        | "core/columns"
        | "core/column"
        | "core/heading"
        | "core/spacer"
        | "core/html";
    innerBlocks: WPBlock[];
    innerContent: string[];
    innerHTML: string;
}

export interface BlockComponentProps {
    block: WPBlock;
    index: number;
}
interface WPMenuItem {
    title: string;
    url: string;
}

export interface WPMenu {
    id: number;
    name: string;
    items: WPMenuItem[];
}

export interface SiteInfo {
    logo: string;
    siteName: string;
    cmsUrl: string;
    siteDescription: string;
}
