import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Events from './components/Events'
import Celebscape from './components/Celebscape'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import ScrollDemo from './components/ScrollDemo'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // GSAP config for better performance
    gsap.config({ 
      nullTargetWarn: false,
      trialWarn: false 
    })

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Global scroll-triggered animations
    gsap.registerPlugin(ScrollTrigger)
    
    // Set up global reveal animations
    const sections = document.querySelectorAll('.animate-reveal')
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Parallax background elements
    const parallaxElements = document.querySelectorAll('.parallax-bg')
    parallaxElements.forEach((element) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    })

    // Stagger animations for lists/grids
    const staggerElements = document.querySelectorAll('.stagger-children')
    staggerElements.forEach((container) => {
      const children = container.children
      gsap.fromTo(children,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Scale on scroll animations
    const scaleElements = document.querySelectorAll('.scale-on-scroll')
    scaleElements.forEach((element) => {
      gsap.fromTo(element,
        {
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Cleanup
    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <About />
      <ScrollDemo />
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
