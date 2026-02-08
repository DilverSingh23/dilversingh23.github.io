import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
    aboutRef: React.RefObject<HTMLDivElement | null>,
    experienceRef: React.RefObject<HTMLDivElement | null>
}

export default function Navbar({ aboutRef, experienceRef }: Props) {

    const navLinks = [
        { name: "About", onClick: handleAboutLink },
        { name: "Experience", onClick: handleExperienceRef },
        { name: "Projects", onClick: null },
        { name: "Skills", onClick: null },
        { name: "Contact", onClick: null },
    ]

    const [scrollY, setScrollY] = useState<number>(0)
    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
    const [screenWidth, setScreenWidth] = useState<number>(0);

    function handleAboutLink() {
        if (!aboutRef.current) {
            return;
        }
        const aboutPosition = aboutRef.current.getBoundingClientRect().top + window.scrollY - 70
        window.scrollTo({ top: aboutPosition, behavior:"smooth" })
        setHamburgerOpen(false)
    }

    function handleExperienceRef() {
        if (!experienceRef.current) {
            return;
        }
        const experiencePosition = experienceRef.current.getBoundingClientRect().top + window.scrollY  - 70
        window.scrollTo({ top: experiencePosition, behavior:"smooth" })
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
                <img src="/logo.png" className="h-24 w-24" />
                <RxHamburgerMenu className="md:hidden text-white self-center h-8 w-8 mr-3" onClick={() => setHamburgerOpen((prev: boolean) => !prev)}/>
            </div>
            <img src="/logo.png" className="h-24 w-24 max-md:hidden" />
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