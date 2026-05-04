import type { Skill } from "../../types"

interface Props {
    skill: Skill
}
export default function SkillBlock({ skill }: Props) {
    return (
        <div className="flex flex-col items-center justify-center py-12 rounded-lg gap-5 bg-black/50 shadow-lg font-extralight
        shadow-white border-[0.5px] backdrop-blur-md w-64 transition-all duration-500 ease-in-out
        hover:scale-105 hover:shadow-xl hover:font-medium">
            {skill.icon}
            <h1 className="text-2xl">{skill.name}</h1>
        </div>
    )
}