interface Props {
    aboutRef: React.RefObject<HTMLDivElement | null>
}
export default function About({ aboutRef }: Props) {
    return (
        <div ref={aboutRef} className="min-h-fit w-full flex flex-col gap-12 py-16 px-16 bg-[url('hero/hero-bg.jpg')] text-white/90 overflow-hidden bg-fixed items-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider">About Me</h1>
            <div className="flex max-[1260px]:flex-col max-[1260px]:gap-16 justify-between items-center max-w-360">
                <div className="text-xl font-extralight leading-loose flex flex-col gap-16 max-[1260px]:text-center min-[1260px]:w-[50%] min[1350px]:w-[60%]">
                    <p>Hi! I'm a junior computer science student at the Macaulay Honors College @ CUNY Queens College.</p>
                    <p>
                        I'm passionate about building robust full-stack applications and 
                        currently building scalable solutions for patient & clinic healthcare portals at Miora Health.
                    </p>
                    <p>I'm eager to apply programming skills to industry experience and contribute to innovative projects.</p>
                </div>
                <img src="/about/about-main-img.jpg" className="w-130 rounded-2xl border-[1.5px] border-purple-200" />
            </div>
        </div>
    )
}