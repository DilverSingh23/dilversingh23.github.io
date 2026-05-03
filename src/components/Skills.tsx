import { skills } from "../constants/skills";
import type { Skill } from "../types";
import SkillBlock from "./SkillBlock";
import { motion } from "motion/react";

interface Props {
    skillsRef: React.RefObject<HTMLDivElement | null>
}

export default function Skills({ skillsRef }: Props) {
    return (
        <div ref={skillsRef} className="min-h-fit gap-12 py-16 px-16 bg-[url('about/about-bg.jpg')] bg-fixed bg-center bg-cover">
            <motion.div
            className="w-full flex flex-col items-center text-white/90 overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider mb-12">Skills</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
                    {skills.map((skill: Skill) => (
                        <SkillBlock skill={skill} />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}