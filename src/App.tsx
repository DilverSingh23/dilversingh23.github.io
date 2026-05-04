import { useRef } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';


function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navbar homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef}
      skillsRef={skillsRef} contactRef={contactRef} />
      <Hero homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Experience experienceRef={experienceRef} />
      <Projects projectsRef={projectsRef} />
      <Skills skillsRef={skillsRef} />
      <Footer contactRef={contactRef} />
    </div>
  )
}

export default App
