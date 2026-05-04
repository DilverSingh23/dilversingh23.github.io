import type { ReactElement } from "react"

export interface Experience {
    companyName: string,
    timeWorked: string,
    bullets: string[],
    imgSrc: string,
    headerColor: string,
    positionName: string
}

export interface Education {
    collegeName: string,
    degree: string,
    graduationInfo: string,
    bullets: string[],
    imgSrc: string
}

export interface Project {
    projectName: string,
    description: string,
    image: string,
    github: string,
    demo: string,
    tags: string[]
}

export interface Skill {
    name: string,
    icon: ReactElement
}
