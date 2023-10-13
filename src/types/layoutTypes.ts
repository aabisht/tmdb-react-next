import { ReactNode } from "react";

export interface ILayoutProps {
  children: ReactNode;
  metatags?: ISEOMetaContent;
}

export interface ISEOMetaContent {
  page_title?: string;
  meta_title?: string;
  description?: string;
  viewport?: string[];
  robots?: string;
  canonical_href?: string;
  hreflang?: string;
  graph_image_tag?: {
    height: string;
    width: string;
    image_url: string;
  };
  graph_type_tag?: string;
  seo_hreflang?: ISeoHreflangEntity[];
  twitter_tags?: ITwitterTags;
}

export interface ISeoHreflangEntity {
  hreflang_url: string;
  hreflang_domain: string;
}
export interface ITwitterTags {
  description: string;
  image_url: string;
  title: string;
}
