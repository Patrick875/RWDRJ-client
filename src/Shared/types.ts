import { ReactNode } from "react";

export interface navItem {
    text: string;
    to: string;
    subnavs?: subnav[]
}
interface subnav {
    title: string;
    to: string
}

export interface sidenavType {
    page: string;
    link: string;
    icon: ReactNode,
    location: string;
}
export interface section {
    content: string;
    title: string;
    img?: string;
    moreLink: string;
}
export interface member {
    name: string;
    title: string;
    img?: string;
}
export interface partner {
    link: string;
    img: string
}

export interface BlogPost {
    refId?: string;
    title: string;
    content: string;
    postedBy?: string;
    datePosted?: string;
    description?: string;
    coverImage: string;
    datestart?: string;
    postedDate?: string;
    dateend?: string;
}
export interface EventPost {
    refId?: string;
    title: string;
    content?: string;
    description: string;
    coverImage: string;
    datestart: string;
    postedDate?: string;
    dateend: string;
    datePosted?: string;

}

export interface CarouselItem {
    img: string;
    text: string;
}


export type NewsItem = BlogPost | EventPost;


