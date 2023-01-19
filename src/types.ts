export enum PageType {
    HOME = 'HOME',
    DESIGN = 'DESIGN',
    ABOUT = 'ABOUT'
}

export type DarkTheme = boolean;

export declare interface ProjectDetail {
    subtitle: string,
    avatar: string,
    image: string,
    content: string,
    github: string,
    website: string
}

export declare interface Project {
    title: string,
    details: ProjectDetail
}

export declare interface button {
    buttonText: PageType,
    class: string
}