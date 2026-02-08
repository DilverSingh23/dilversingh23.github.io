import { useRef } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Experience from './components/Experience';


function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <Navbar aboutRef={aboutRef} experienceRef={experienceRef} />
      <Hero />
      <About aboutRef={aboutRef} />
      <Experience experienceRef={experienceRef} />
    </div>
  )
}

export default App
