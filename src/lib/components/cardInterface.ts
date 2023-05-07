interface imageData {
    location: string,
    alt?: string,
    caption?: string,
    fit? :boolean,
}

interface videosData {
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
    videosData?: videosData[],
}

export interface pubInterface {
    title: string,
    authors: string,
    journal: string,
    abstract: string,
    url: string,
    host: string,
}

export interface experienceInterface {
    company: string,
    role: string,
    dates: string,
    description: string,
    skills?: string[],
}

export interface skill{
    name: string,
    redirect?: string,
}

export interface skillInterface {
    catagory: string,
    experiencedSkills: skill[],
    intermediateSkills?: skill[],
}