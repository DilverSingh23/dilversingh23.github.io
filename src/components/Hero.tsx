import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Hero() {
    return (
        <div className="min-h-screen w-full flex flex-col overflow-hidden bg-[url('hero/hero-bg.jpg')] bg-center bg-cover z-0 relative">
            <div className="flex flex-col flex-1 gap-12 justify-center items-center h-full w-full pt-16 h-[700px]:flex text-gray-300 font-inter">
                <div>
                    <img src="hero/profilepic.jpg" alt="Profile Image" 
                    className="h-60 w-60 sm:h-76 sm:w-76 brightness-65 border-6 border-purple-200 rounded-full object-cover scale-95" />
                </div>

                <h1 className="text-5xl sm:text-6xl font-extralight tracking-widest">Dilver Singh</h1>
                <h1 className="text-sm min-[380px]:text-base sm:text-2xl font-extralight tracking-[0.03em] sm:tracking-[0.08em]">
                    Incoming SDE Intern @ Amazon
                </h1>
                
                <div className="flex flex-row gap-6 text-gray-300 hover:cursor-pointer shadow-2xl">
                    <a href="https://github.com/DilverSingh23" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-12 w-12 sm:h-16 sm:w-16 
                        transition-all delay-150 duration-300 ease-in-out hover:text-white hover:scale-115" />
                    </a>
                    <a href="https://www.linkedin.com/in/dilversingh" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-12 w-12 sm:h-16 sm:w-16
                        transition-all delay-150 duration-300 ease-in-out hover:text-white hover:scale-115" />
                    </a>
                </div>
            
            </div>
        </div>
    )
}