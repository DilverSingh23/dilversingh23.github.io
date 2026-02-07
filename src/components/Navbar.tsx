import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
    aboutRef: React.RefObject<HTMLDivElement | null>
}

export default function Navbar({ aboutRef }: Props) {

    const navLinks = [
        { name: "About", onClick: handleAboutLink },
        { name: "Experience", onClick: null },
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
        aboutRef.current.scrollIntoView({ behavior: "smooth" })
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
        <nav className={`fixed w-full flex gap-6 md:gap-16 md:items-center justify-between md:justify-center max-md:px-6 z-50 ${scrollY > 10 && "backdrop-blur-md bg-black/1"}`}>
            <img src="/logo.png" className="h-24 w-24" />
            <RxHamburgerMenu className="md:hidden text-white self-center h-8 w-8" onClick={() => setHamburgerOpen((prev: boolean) => !prev)}/>
            <ul className={`${hamburgerOpen && screenWidth < 768 ? "w-full bg-black/10 py-4 backdrop-blur-md flex absolute transform -translate-x-1/2 left-1/2 mt-24" : "hidden"} 
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