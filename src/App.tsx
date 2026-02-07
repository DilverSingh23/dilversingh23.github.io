import { useRef } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <Navbar aboutRef={aboutRef} />
      <Hero />
      <About aboutRef={aboutRef} />
    </div>
  )
}

export default App
