import ExperienceBlock from "../elements/ExperienceBlock";
import { education, experiences } from "../../constants/experiences";
import type { Experience } from "../../types";
import EducationBlock from "../elements/EducationBlock";
import { motion } from "motion/react";

interface Props {
    experienceRef: React.RefObject<HTMLDivElement | null>
}
export default function Experience({ experienceRef }: Props) {
    return (
        <div ref={experienceRef} className="min-h-fit py-16 px-5 sm:px-12 bg-[url('/experience/experience-bg.jpg')] 
        bg-fixed overflow-hidden bg-cover bg-center">
            <motion.div
            className="flex flex-col items-center text-white/90"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider mb-16">Experience</h1>
                {experiences.map((experience: Experience) => (
                    <div className="max-w-230 mb-12 w-full">
                        <ExperienceBlock experience={experience} />
                    </div>
                ))}
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider mt-16 mb-16">Education</h1>
                <EducationBlock education={education} />
            </motion.div>
        </div>
    )
}