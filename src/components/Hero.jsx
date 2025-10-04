import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const dynamicWordRef = useRef(null)
  const underlineRef = useRef(null)
  const logoRef = useRef(null)
  const statsRef = useRef(null)
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ['Efficient', 'Fast', 'Personalised']
  const wordsLength = words.length

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    
    // Main hero entrance animation
    tl.fromTo(titleRef.current, 
      { y: 60, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(dynamicWordRef.current?.parentElement,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(statsRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.2"
    )

    // Logo animations - Fixed mouse interaction
    const logoImage = logoRef.current
    
    // Store references for cleanup
    let handleLogoHover, handleLogoLeave, handleLogoClick
    
    if (logoImage) {
      // Subtle floating animation for logo
      gsap.to(logoImage, {
        y: -5,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

      // Logo hover animations with proper event handling
      handleLogoHover = () => {
        gsap.to(logoImage, {
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out"
        })
      }

      handleLogoLeave = () => {
        gsap.to(logoImage, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        })
      }

      handleLogoClick = () => {
        gsap.to(logoImage, {
          scale: 0.98,
          duration: 0.1,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            // Scroll to about section
            const aboutSection = document.querySelector('#about')
            if (aboutSection) {
              gsap.to(window, { duration: 1.5, scrollTo: aboutSection, ease: "power2.inOut" })
            }
          }
        })
      }

      logoImage.addEventListener('mouseenter', handleLogoHover)
      logoImage.addEventListener('mouseleave', handleLogoLeave)
      logoImage.addEventListener('click', handleLogoClick)
    }

    // Subtle background animations
    gsap.to(".bg-element", {
      rotation: 360,
      duration: 60,
      ease: "none",
      repeat: -1
    })

    gsap.to(".bg-shape", {
      y: -10,
      x: 5,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    })

    // Dynamic word animation
    const animateWord = () => {
      const currentWord = dynamicWordRef.current
      const underline = underlineRef.current
      
      if (!currentWord || !underline) return

      // Exit animation
      gsap.to(currentWord, {
        y: -30,
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setCurrentWordIndex((prev) => (prev + 1) % wordsLength)
          
          // Enter animation
          gsap.fromTo(currentWord,
            { y: 30, opacity: 0, scale: 1.2 },
            { 
              y: 0, 
              opacity: 1, 
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
              delay: 0.2
            }
          )

          // Animate underline width
          gsap.fromTo(underline,
            { width: "0%" },
            { 
              width: "100%",
              duration: 0.8,
              ease: "power2.out",
              delay: 0.4
            }
          )
        }
      })
    }

    // Start word animation after initial animations
    const wordInterval = setInterval(animateWord, 2000)
    
    // Initial word entrance
    setTimeout(() => {
      gsap.fromTo(dynamicWordRef.current,
        { y: 30, opacity: 0, scale: 1.2 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          ease: "power2.out"
        }
      )
      
      gsap.fromTo(underlineRef.current,
        { width: "0%" },
        { 
          width: "100%",
          duration: 1,
          ease: "power2.out",
          delay: 0.3
        }
      )
    }, 2000)

    return () => {
      clearInterval(wordInterval)
      // Clean up logo event listeners
      if (logoImage && handleLogoHover && handleLogoLeave && handleLogoClick) {
        logoImage.removeEventListener('mouseenter', handleLogoHover)
        logoImage.removeEventListener('mouseleave', handleLogoLeave)
        logoImage.removeEventListener('click', handleLogoClick)
      }
    }
  }, [wordsLength])

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      gsap.to(window, { duration: 1.5, scrollTo: contactSection, ease: "power2.inOut" })
    }
  }

  const scrollToEvents = () => {
    const eventsSection = document.querySelector('#events')
    if (eventsSection) {
      gsap.to(window, { duration: 1.5, scrollTo: eventsSection, ease: "power2.inOut" })
    }
  }

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="bg-element absolute top-16 left-16 w-48 h-48 border border-blue-300 rounded-full"></div>
        <div className="bg-element absolute top-32 right-16 w-64 h-64 border border-slate-300 rounded-full"></div>
        <div className="bg-element absolute bottom-16 left-1/2 transform -translate-x-1/2 w-56 h-56 border border-blue-200 rounded-full"></div>
      </div>

      {/* Subtle Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.05]">
        <div className="bg-shape absolute top-1/4 left-1/4 w-12 h-12 border border-blue-400 rotate-45"></div>
        <div className="bg-shape absolute bottom-1/4 right-1/4 w-8 h-8 border border-slate-400 rounded-full"></div>
        <div className="bg-shape absolute top-1/3 right-1/3 w-6 h-6 bg-blue-300 rounded-full"></div>
        <div className="bg-shape absolute bottom-1/3 left-1/3 w-10 h-10 border border-blue-300 rotate-12"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certification Badge */}
        <div className="mb-6 mt-6 flex justify-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-600 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-center leading-tight">ISO 9001:2015 Certified</span>
          </div>
        </div>

        {/* Logo */}
        <div ref={titleRef} className="mb-8 flex justify-center">
          <img 
            ref={logoRef}
            src="/crowdPullers.png" 
            alt="CrowdPullers Logo" 
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto cursor-pointer transition-all duration-300 hover:shadow-2xl"
            style={{ filter: 'drop-shadow(0 6px 20px rgba(59, 130, 246, 0.15))' }}
          />
        </div>

        {/* Main Content Section */}
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Main Heading */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <h1 ref={subtitleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-800 font-light leading-tight mb-6">
                <span className="text-blue-600 font-semibold block">Shaping Dreams</span>
                <span className="text-slate-700 block">into Extraordinary</span>
                <span className="text-slate-800 font-bold block">Experiences</span>
              </h1>

              {/* Dynamic Word Section */}
              <div className="relative mb-8">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-2">
                  <span className="text-base sm:text-lg md:text-xl text-slate-600 font-light">We deliver</span>
                  <div className="relative inline-block">
                    <div 
                      ref={dynamicWordRef}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600"
                    >
                      {words[currentWordIndex]}
                    </div>
                    <div 
                      ref={underlineRef}
                      className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                  <span className="text-base sm:text-lg md:text-xl text-slate-600 font-light">experiences</span>
                </div>
              </div>
            </div>

            {/* Right Side - CTA Buttons */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div ref={ctaRef} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50 w-full max-w-4xl">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={scrollToEvents}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group whitespace-nowrap min-w-0"
                  >
                    Explore Events
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={scrollToContact}
                    className="flex-1 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-base font-semibold hover:bg-slate-700 hover:text-white hover:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group bg-white/80 shadow-md whitespace-nowrap min-w-0"
                  >
                    Get In Touch
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </div>
                
                {/* Decorative element */}
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-5 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">500+</div>
            <div className="text-slate-600 font-medium text-sm">Events Organized</div>
          </div>
          <div className="text-center p-5 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">15+</div>
            <div className="text-slate-600 font-medium text-sm">Years Experience</div>
          </div>
          <div className="text-center p-5 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">100+</div>
            <div className="text-slate-600 font-medium text-sm">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center animate-pulse hover:border-blue-500 transition-colors duration-300">
          <div className="w-0.5 h-2 bg-slate-500 rounded-full mt-1.5"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
