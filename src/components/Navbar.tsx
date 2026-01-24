export default function Navbar() {
    const navLinks = [
        { name: "About", onClick: null },
        { name: "Experience", onClick: null },
        { name: "Projects", onClick: null },
        { name: "Skills", onClick: null },
        { name: "Contact", onClick: null },
    ]

    return (
        <nav className="fixed w-full flex gap-16 items-center justify-center backdrop-blur-md bg-black/1">
            <img src="/logo.png" className="h-24 w-24" />
            <ul className="flex items-center gap-12 font-extralight text-white text-xl font-inter">
                {navLinks.map((navLink: { name: string, onClick: any }) => (
                    <li className="border-b border-white/0 transition-all delay-100 duration-200 text-gray-300 
                    ease-in-out hover:cursor-pointer hover:text-white hover:border-b-white " 
                    onClick={() => navLink.onClick}>
                        {navLink.name}
                    </li>
                ))}
            </ul>

        </nav>
    )
}