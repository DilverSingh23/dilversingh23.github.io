import { projects } from "../constants/projects";
import type { Project } from "../types";
import { MacbookPro } from "./MacBookPro";
import ProjectBlock from "./ProjectBlock";

interface Props {
    projectsRef: React.RefObject<HTMLDivElement | null>
}

export default function Projects({ projectsRef }: Props) {
    return (
        <div ref={projectsRef} className="min-h-fit w-full flex flex-col gap-12 py-16 px-5 sm:px-16 bg-[url('/projects/projects-bg.jpg')] bg-cover bg-center bg-fixed text-white/90 overflow-hidden items-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider mb-8">Projects</h1>
            <div className="flex flex-col gap-12 w-full lg:w-230 relative">
                <MacbookPro />
                {projects.map((project: Project) => (
                    <ProjectBlock project={project} />
                ))}
            </div>
        </div>
    )
}