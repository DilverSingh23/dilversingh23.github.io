import { projects } from "../constants/projects";
import type { Project } from "../types";
import ProjectBlock from "./ProjectBlock";
import { motion } from "motion/react";

interface Props {
    projectsRef: React.RefObject<HTMLDivElement | null>
}

export default function Projects({ projectsRef }: Props) {
    return (
        <div ref={projectsRef} className="min-h-fit gap-12 py-16 px-5 sm:px-16 bg-[url('/projects/projects-bg.jpg')] bg-cover bg-center bg-fixed">
            <motion.div
            className="w-full flex flex-col text-white/90 overflow-hidden items-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider mb-8">Projects</h1>
                <div className="flex flex-col gap-12 w-full lg:w-230">
                    {projects.map((project: Project) => (
                        <div className="relative">
                            <ProjectBlock project={project} />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}