export interface navItem {
    text: string;
    to: string;
    subnavs?: subnav[]
}
interface subnav {
    title: string;
    to: string
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