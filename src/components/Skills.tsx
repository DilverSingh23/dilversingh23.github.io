import { skills } from "../constants/skills";
import type { Skill } from "../types";
import SkillBlock from "./SkillBlock";

interface Props {
    skillsRef: React.RefObject<HTMLDivElement | null>
}

export default function Skills({ skillsRef }: Props) {
    return (
        <div ref={skillsRef} className="min-h-fit w-full flex flex-col gap-12 py-16 px-16 bg-[url('hero/hero-bg.jpg')] text-white/90 
        overflow-hidden bg-fixed items-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider mb-12">Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
                {skills.map((skill: Skill) => (
                    <SkillBlock skill={skill} />
                ))}
            </div>
        </div>
    )
}