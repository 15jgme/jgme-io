interface imageData {
    location: string,
    alt?: string,
    caption?: string,
}

export interface cardInterface {
    title: string,
    description: string,
    skills: string[],
    technologies: string[],
    url?: string,
    imagesData?: imageData[],
}

export interface pubInterface {
    title: string,
    authors: string,
    journal: string,
    abstract: string,
    url: string,
    host: string,
}