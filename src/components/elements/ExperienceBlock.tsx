import type { Experience } from "../../types";

interface Props {
    experience: Experience
}
export default function ExperienceBlock( { experience }: Props) {
    return (
        <>
            <div className={`flex items-center gap-6 ${experience.headerColor} backdrop-blur-md rounded-2xl rounded-b-none px-2 sm:px-6 py-6`}>
                <div className="flex gap-6 items-center max-[350px]:overflow-hidden">
                    <img src={`experience/${experience.imgSrc}`} className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full p-2"/>
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex flex-col sm:flex-row items-left sm:items-center justify-center sm:gap-3">
                            <h1 className="text-lg min-[400px]:text-xl sm:text-2xl font-extrabold tracking-wide">{experience.companyName}</h1>
                            <span className="font-thin text-2xl max-sm:hidden">|</span>
                            <h1 className="text-sm sm:text-lg font-extrabold italic tracking-wide">{experience.timeWorked}</h1>
                        </div>
                        <h1 className="text-sm sm:text-lg font-extralight tracking-wide">{experience.positionName}</h1>
                    </div>
                </div>
            </div>
            <ul className="flex flex-col font-thin items-left gap-6 bg-black/70 backdrop-blur-md  list-disc rounded-2xl rounded-t-none px-12 py-8">
                {experience.bullets.map((bullet: string) => (
                    <li>{bullet}</li>
                ))}
            </ul>
        </>
    )
}