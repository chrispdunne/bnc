export interface WPBlock {
    attrs: {
        dimRatio?: number;
        id?: number;
        url?: string;
    };
    blockName:
        | "core/paragraph"
        | "core/quote"
        | "core/image"
        | "core/list"
        | "core/embed"
        | "core/cover"
        | "core/media-text";
    innerBlocks: WPBlock[];
    innerContent: string[];
    innerHTML: string;
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
