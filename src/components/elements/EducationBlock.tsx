import type { Education } from "../../types"

interface Props {
    education: Education
}
export default function EducationBlock({ education }: Props) {
    return (
        <>
            <div className={`flex flex-col gap-6 bg-[#F05133]/70 backdrop-blur-md rounded-2xl rounded-b-none px-6 py-6 max-w-230 w-full`}>
                <div className="flex flex-row gap-6 items-center max-[350px]:overflow-hidden">
                    <img src={`experience/${education.imgSrc}`} className="w-16 h-16 sm:w-20 sm:h-20 p-2"/>
                    <div className="flex flex-col items-left justify-center sm:gap-3 w-fit">
                        <h1 className="text-lg min-[400px]:text-2xl sm:text-2xl font-extrabold tracking-wide">{education.collegeName}</h1>
                        <div className="flex gap-3 lg:gap-6 max-lg:flex-col">
                            <h1 className="text-sm sm:text-md font-light italic tracking-wide">{education.degree}</h1>
                            <span className="font-thin text-sm max-lg:hidden">|</span>
                            <h1 className="text-sm sm:text-md font-light italic tracking-wide">{education.graduationInfo}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="flex flex-col font-thin items-left gap-6 bg-black/70 backdrop-blur-md rounded-2xl rounded-t-none px-12 py-8 max-w-230">
                {education.bullets.map((bullet: string) => (
                    <li>{bullet}</li>
                ))}
            </ul>
        </>
    )
}