import ExperienceBlock from "./ExperienceBlock";
import { education, experiences } from "../constants/experiences";
import type { Experience } from "../types";
import EducationBlock from "./EducationBlock";

interface Props {
    experienceRef: React.RefObject<HTMLDivElement | null>
}
export default function Experience({ experienceRef }: Props) {
    return (
        <div ref={experienceRef} className="min-h-fit flex flex-col py-16 px-16 bg-[url('experience/experience-bg.jpg')] 
        bg-fixed text-white/90 overflow-hidden bg-cover bg-center items-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider mb-16">Experience</h1>
            {experiences.map((experience: Experience) => (
                <div className="max-w-360 mb-12 w-full">
                    <ExperienceBlock experience={experience} />
                </div>
            ))}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider mt-16 mb-16">Education</h1>
            <EducationBlock education={education} />
        </div>
    )
}