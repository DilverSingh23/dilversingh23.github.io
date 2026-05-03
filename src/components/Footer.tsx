import { MdOutlineMail } from "react-icons/md";

interface Props {
    contactRef: React.RefObject<HTMLDivElement | null>
}

export default function Footer({ contactRef }: Props) {
    return (
        <div ref={contactRef} className="w-full flex items-center justify-center mt-5 gap-5 text-white max-sm:pb-8 max-sm:flex-col">
            <img src="/logo.png" className="h-20 w-20" />
            <span className="font-light max-sm:hidden">|</span>
            <h1 className="text-xl font-extralight">© Dilver Singh 2026</h1>
            <span className="font-light max-sm:hidden">|</span>
            <div className="flex items-center gap-1">
                <MdOutlineMail className="h-6 w-6" />
                <a href="mailto:dsinghh23@gmail.com" className=" text-lg sm:text-xl font-extralight">dsinghh23@gmail.com</a>
            </div>
        </div>
    )
}