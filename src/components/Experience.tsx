import ExperienceBlock from "./ExperienceBlock";
import { experiences } from "../constants/experiences";
import type { Experience } from "../types";

interface Props {
    experienceRef: React.RefObject<HTMLDivElement | null>
}
export default function Experience({ experienceRef }: Props) {
    return (
        <div ref={experienceRef} className="min-h-fit w-full flex flex-col py-16 px-16 bg-[url('experience/experience-bg.jpg')] bg-fixed text-white overflow-hidden bg-cover bg-center">
            <h1 className="text-4xl sm:text-5xl max-[1260px]:text-center font-extrabold tracking-wider mb-16">Experience</h1>
            {experiences.map((experience: Experience) => (
                <div className="mb-12">
                    <ExperienceBlock experience={experience} />
                </div>
            ))}
        </div>
    )
}