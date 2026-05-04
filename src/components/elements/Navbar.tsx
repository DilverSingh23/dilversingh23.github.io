import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
    homeRef: React.RefObject<HTMLDivElement | null>,
    aboutRef: React.RefObject<HTMLDivElement | null>,
    experienceRef: React.RefObject<HTMLDivElement | null>,
    projectsRef: React.RefObject<HTMLDivElement | null>,
    skillsRef: React.RefObject<HTMLDivElement | null>,
    contactRef: React.RefObject<HTMLDivElement | null>
}

export default function Navbar({ homeRef, aboutRef, experienceRef, projectsRef, skillsRef, contactRef }: Props) {

    const navLinks = [
        { name: "About", onClick: () => handleNavClick(aboutRef) },
        { name: "Experience", onClick: () => handleNavClick(experienceRef)  },
        { name: "Projects", onClick: () => handleNavClick(projectsRef)  },
        { name: "Skills", onClick: () => handleNavClick(skillsRef)  },
        { name: "Contact", onClick: () => handleNavClick(contactRef) },
    ]
    const [scrollY, setScrollY] = useState<number>(0)
    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false)
    const [screenWidth, setScreenWidth] = useState<number>(0)

    function handleNavClick(refObj: React.RefObject<HTMLDivElement | null>) {
        if (!refObj.current) {
            return;
        }
        const position = refObj.current.getBoundingClientRect().top + window.scrollY - 70
        window.scrollTo({ top: position, behavior:"smooth" })
        setHamburgerOpen(false)
    }

    useEffect(() => {
        let rafID: number
        function trackScroll() { rafID = requestAnimationFrame(() => setScrollY(window.scrollY)) }
        function trackWidth () { setScreenWidth(window.innerWidth) }

        window.addEventListener("resize", trackWidth);
        window.addEventListener("scroll", trackScroll);

        return () => {
            cancelAnimationFrame(rafID)
            window.removeEventListener("scroll", trackScroll)
            window.removeEventListener("resize", trackWidth)
        }
    }, [])

    return (
        <nav className={`fixed w-full flex flex-col md:flex-row md:gap-16 md:items-center justify-between md:justify-center z-50 ${scrollY > 10 && "backdrop-blur-md bg-black/1"}`}>
            <div className="flex w-full justify-between items-center max-md:p-4 md:hidden">
                <img src="/logo.png" className="h-24 w-24 hover:cursor-pointer" onClick={() => handleNavClick(homeRef)} />
                <RxHamburgerMenu className="md:hidden hover:cursor-pointer text-white self-center h-8 w-8 mr-3" onClick={() => setHamburgerOpen((prev: boolean) => !prev)}/>
            </div>
            <img src="/logo.png" className="h-24 w-24 max-md:hidden hover:cursor-pointer" onClick={() => handleNavClick(homeRef)} />
            <ul className={`${hamburgerOpen && screenWidth < 768 ? "pt-3 w-full bg-black/1 pb-4 backdrop-blur-md flex" : "hidden"} 
            md:flex items-center gap-3 flex-col md:gap-12 md:flex-row font-extralight text-white text-xl z-50`}>
                {navLinks.map((navLink: { name: string, onClick: any }) => (
                    <li key={navLink.name} className="border-b border-white/0 transition-all delay-100 duration-200 text-gray-300 
                    ease-in-out text-shadow-lg hover:cursor-pointer hover:text-white hover:border-b-white z-50" 
                    onClick={() => navLink.onClick?.()}>
                        {navLink.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}