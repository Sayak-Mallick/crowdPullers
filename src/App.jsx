import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Events from './components/Events'
import Celebscape from './components/Celebscape'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Smooth scrolling and performance optimizations
    gsap.config({ 
      nullTargetWarn: false,
      trialWarn: false 
    })

    // Global scroll-triggered animations
    gsap.registerPlugin(ScrollTrigger)
    
    // Refresh ScrollTrigger after component mounts
    ScrollTrigger.refresh()
  }, [])

  return (
    <div className="overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Events />
      <Celebscape />
      <Clients />
      <Contact />
      <BackToTop />
    </div>
  )
}

export default App
