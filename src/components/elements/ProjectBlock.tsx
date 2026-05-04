import { useState } from "react"
import type { Project } from "../../types"
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { GrGithub } from "react-icons/gr";

interface Props {
    project: Project
}
export default function ProjectBlock({ project }: Props) {
    const [playDemo, setPlayDemo] = useState(false);

    return (
        <div className="flex flex-col gap-5 items-center justify-center px-2 sm:px-6 py-6 bg-black/60 backdrop-blur-md border-gray-300 border-[0.5px] w-full rounded-lg">
            {playDemo ? (
                <>
                <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-gray-300">
                    <iframe
                        src={project.demo}
                        className="absolute top-0 left-0 w-311.25 h-175 scale-[0.7] origin-top-left"
                    />
                    <div className="absolute flex items-center gap-2 hover:cursor-pointer px-2 py-1 top-[92%] -right-3 bg-black/20 rounded-full" onClick={() => setPlayDemo(false)}>
                        <CiPause1 className="text-white text-2xl"/>
                        <h1 className="font-extralight text-xl text-white font-inter pr-7">End Demo</h1>
                    </div>
                </div>
                </>
            ) : (
                <div className="relative">
                    <img src={project.image} className="lg:h-120 lg:w-auto h-fit w-fit rounded-sm border-[0.5px] border-gray-300 object-contain" />
                    <div className='absolute flex items-center justify-center gap-3 -translate-x-1/2 left-1/2 -translate-y-1/2 
                    top-1/2 bg-black/20 rounded-full p-2 px-3 transition-all ease-in-out duration-200 hover:cursor-pointer 
                    hover:scale-105 max-lg:hidden'
                    onClick={() => setPlayDemo(true)}>
                        <CiPlay1 className="text-white text-4xl" />
                        <h1 className="font-extralight text-2xl text-white font-inter ">Try Live Demo</h1>
                    </div>
                </div>
            )}
            <div className="flex items-center gap-5 self-start pl-4 flex-wrap">
                <h1 className="text-xl min-[500px]:text-2xl sm:text-4xl font-extrabold tracking-wider font-inter text-shadow-xs text-shadow-white">{project.projectName}</h1>
                <button className="bg-black p-2 text-white font-extralight flex gap-3 items-center justify-center border-white 
                shadow-sm border hover:shadow-white hover:cursor-pointer hover:scale-105 hover:font-bold transition-all rounded-md 
                duration-300 ease-in-out tracking-wider max-sm:text-xs"
                onClick={() => window.open(project.github)}>
                    <GrGithub className="scale-105 sm:scale-120"/> Github
                </button>
            </div>
            <div className="flex items-center w-full gap-2 pl-4 flex-wrap">
                {project.tags.map((tag: string) => (
                    <h1 className="bg-gray-200/30 text-white font-extralight p-2 rounded-full sm:text-xs text-[8px] hover:scale-105">{tag}</h1>
                ))}
            </div>
            <p className="pl-4 font-light max-sm:text-[10px]">{project.description}</p>
            
        </div>
    )
}