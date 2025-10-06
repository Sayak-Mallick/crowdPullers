import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useParallaxAnimation } from '../hooks/useScrollAnimations'
import ScrollIndicator from './ScrollIndicator'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// Enhanced SplitText utility for advanced text splitting animations
class SplitText {
  constructor(element, options = {}) {
    this.element = element
    this.originalText = element ? element.textContent : ''
    this.options = {
      type: 'chars',
      preserveSpaces: true,
      addClasses: true,
      ...options
    }
    this.chars = []
    this.words = []
    this.lines = []
    this.split()
  }

  split() {
    if (!this.element) return

    const text = this.originalText
    const types = this.options.type.split(',')
    
    // Clear existing content
    this.element.innerHTML = ''
    
    if (types.includes('chars')) {
      this.splitChars(text)
    } else if (types.includes('words')) {
      this.splitWords(text)
    } else if (types.includes('lines')) {
      this.splitLines(text)
    }
  }

  splitChars(text) {
    const chars = text.split('')
    
    chars.forEach((char, index) => {
      const span = document.createElement('span')
      
      if (char === ' ') {
        span.innerHTML = '&nbsp;'
        span.className = 'char char-space'
      } else {
        span.textContent = char
        span.className = 'char'
      }
      
      span.style.display = 'inline-block'
      span.style.transformOrigin = 'center bottom'
      span.setAttribute('data-char-index', index)
      span.setAttribute('data-char-value', char)
      
      // Add special classes for different character types
      if (this.options.addClasses) {
        if (/[A-Z]/.test(char)) span.classList.add('char-uppercase')
        if (/[a-z]/.test(char)) span.classList.add('char-lowercase')
        if (/[0-9]/.test(char)) span.classList.add('char-number')
        if (/[^A-Za-z0-9\s]/.test(char)) span.classList.add('char-symbol')
      }
      
      this.element.appendChild(span)
      this.chars.push(span)
    })
  }

  splitWords(text) {
    const words = text.split(' ')
    words.forEach((word, index) => {
      const span = document.createElement('span')
      span.textContent = word
      span.style.display = 'inline-block'
      span.style.marginRight = index < words.length - 1 ? '0.25em' : '0'
      span.className = 'word'
      span.setAttribute('data-word-index', index)
      span.setAttribute('data-word-value', word)
      this.element.appendChild(span)
      this.words.push(span)
    })
  }

  splitLines(text) {
    const words = text.split(' ')
    let currentLine = document.createElement('div')
    currentLine.style.overflow = 'hidden'
    currentLine.className = 'line'
    currentLine.setAttribute('data-line-index', 0)
    
    words.forEach((word, index) => {
      const span = document.createElement('span')
      span.textContent = word + (index < words.length - 1 ? ' ' : '')
      span.style.display = 'inline-block'
      currentLine.appendChild(span)
    })
    
    this.element.appendChild(currentLine)
    this.lines.push(currentLine)
  }

  // Enhanced animation methods
  animateIn(options = {}) {
    const {
      type = 'fadeUp',
      duration = 0.8,
      stagger = 0.05,
      ease = 'power3.out',
      delay = 0
    } = options

    const elements = this.chars.length ? this.chars : this.words.length ? this.words : this.lines
    
    switch (type) {
      case 'fadeUp':
        return gsap.fromTo(elements, 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration, ease, stagger, delay }
        )
      case 'fadeDown':
        return gsap.fromTo(elements,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration, ease, stagger, delay }
        )
      case 'scale':
        return gsap.fromTo(elements,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration, ease, stagger, delay }
        )
      case 'rotate':
        return gsap.fromTo(elements,
          { rotation: 180, opacity: 0 },
          { rotation: 0, opacity: 1, duration, ease, stagger, delay }
        )
      case 'flip':
        return gsap.fromTo(elements,
          { rotationX: -90, opacity: 0 },
          { rotationX: 0, opacity: 1, duration, ease, stagger, delay }
        )
      case 'wave':
        return gsap.fromTo(elements,
          { y: 30, opacity: 0, skewX: 15 },
          { y: 0, opacity: 1, skewX: 0, duration, ease, stagger: { amount: stagger * elements.length, from: 'start' }, delay }
        )
      default:
        return gsap.fromTo(elements,
          { opacity: 0 },
          { opacity: 1, duration, stagger, delay }
        )
    }
  }

  animateOut(options = {}) {
    const {
      type = 'fadeDown',
      duration = 0.5,
      stagger = 0.02,
      ease = 'power2.in'
    } = options

    const elements = this.chars.length ? this.chars : this.words
    
    switch (type) {
      case 'fadeDown':
        return gsap.to(elements, 
          { y: -30, opacity: 0, duration, ease, stagger }
        )
      case 'fadeUp':
        return gsap.to(elements,
          { y: 50, opacity: 0, duration, ease, stagger }
        )
      case 'scatter':
        return gsap.to(elements,
          { 
            x: () => (Math.random() - 0.5) * 200,
            y: () => (Math.random() - 0.5) * 200,
            rotation: () => (Math.random() - 0.5) * 360,
            scale: 0,
            opacity: 0,
            duration,
            ease,
            stagger
          }
        )
      default:
        return gsap.to(elements, { opacity: 0, duration, stagger })
    }
  }

  revert() {
    if (this.element && this.originalText) {
      this.element.textContent = this.originalText
      this.chars = []
      this.words = []
      this.lines = []
    }
  }
}

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const dynamicWordRef = useRef(null)
  const underlineRef = useRef(null)
  const logoRef = useRef(null)
  const statsRef = useRef(null)
  const shapingDreamsRef = useRef(null)
  const extraordinaryRef = useRef(null)
  const experiencesRef = useRef(null)
  const parallaxBg = useParallaxAnimation({ speed: 0.3 })
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ['Efficient', 'Fast', 'Personalised']
  const wordsLength = words.length

  useEffect(() => {
    // Store current ref values for cleanup
    const shapingDreamsElement = shapingDreamsRef.current
    const extraordinaryElement = extraordinaryRef.current
    const experiencesElement = experiencesRef.current

    // Initialize split text animations for main heading
    let shapingDreamsSplit, extraordinarySplit, experiencesSplit

    // Create split text instances
    if (shapingDreamsElement) {
      shapingDreamsSplit = new SplitText(shapingDreamsElement, { type: 'chars' })
    }
    if (extraordinaryElement) {
      extraordinarySplit = new SplitText(extraordinaryElement, { type: 'chars' })
    }
    if (experiencesElement) {
      experiencesSplit = new SplitText(experiencesElement, { type: 'chars' })
    }

    const tl = gsap.timeline({ delay: 0.2 })
    
    // Logo animation first
    tl.fromTo(titleRef.current, 
      { y: 60, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    )

    // Enhanced split text animations for main heading
    if (shapingDreamsSplit?.chars.length) {
      tl.add(
        shapingDreamsSplit.animateIn({
          type: 'flip',
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)"
        }),
        "-=0.4"
      )
    }

    if (extraordinarySplit?.chars.length) {
      tl.add(
        extraordinarySplit.animateIn({
          type: 'scale',
          duration: 0.7,
          stagger: 0.04,
          ease: "back.out(1.4)"
        }),
        "-=0.3"
      )
    }

    if (experiencesSplit?.chars.length) {
      tl.add(
        experiencesSplit.animateIn({
          type: 'wave',
          duration: 0.6,
          stagger: 0.03,
          ease: "power3.out"
        }),
        "-=0.2"
      )
    }

    // Dynamic word section animation
    tl.fromTo(dynamicWordRef.current?.parentElement,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    
    // CTA buttons animation
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    
    // Stats animation
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

    // Enhanced parallax scroll effect with performance optimization
    let ticking = false
    
    const handleParallaxScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset
          const windowHeight = window.innerHeight
          const heroHeight = heroRef.current?.offsetHeight || windowHeight
          
          // Only apply parallax if hero section is in viewport
          if (scrolled < heroHeight) {
            const parallaxBgElement = parallaxBg.current
            const parallaxElements = document.querySelector('.parallax-elements')
            
            if (parallaxBgElement) {
              // More subtle parallax effect for background
              const parallaxSpeed = scrolled * 0.3
              gsap.set(parallaxBgElement, {
                transform: `translateY(${parallaxSpeed}px) scale(1.05)`,
                force3D: true
              })
            }
            
            if (parallaxElements) {
              // Move decorative elements at different speeds
              const elementsSpeed = scrolled * 0.2
              gsap.set(parallaxElements, {
                transform: `translateY(${elementsSpeed}px)`,
                force3D: true
              })
            }
            
            // Individual element parallax with reduced calculations
            const bgElements = document.querySelectorAll('.bg-element')
            bgElements.forEach((element, index) => {
              const speed = scrolled * (0.1 + index * 0.05)
              const rotation = scrolled * 0.02 + index * 10
              gsap.set(element, {
                transform: `translateY(${speed}px) rotate(${rotation}deg)`,
                force3D: true
              })
            })
            
            const bgShapes = document.querySelectorAll('.bg-shape')
            bgShapes.forEach((shape, index) => {
              const speed = scrolled * (0.08 + index * 0.03)
              const rotation = scrolled * 0.05 + index * 45
              gsap.set(shape, {
                transform: `translateY(${speed}px) rotate(${rotation}deg)`,
                force3D: true
              })
            })
          }
          
          ticking = false
        })
        
        ticking = true
      }
    }
    
    // Add optimized scroll event listener for parallax
    window.addEventListener('scroll', handleParallaxScroll, { passive: true })

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

    // Dynamic word animation with text splitting
    let currentWordSplit = null

    const animateWord = () => {
      const currentWord = dynamicWordRef.current
      const underline = underlineRef.current
      
      if (!currentWord || !underline) return

      // Split current word into characters if not already split
      if (currentWordSplit) {
        currentWordSplit.revert()
      }

      // Exit animation with enhanced scatter effect
      currentWordSplit = new SplitText(currentWord, { type: 'chars' })
      
      currentWordSplit.animateOut({
        type: 'scatter',
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.in"
      }).then(() => {
        setCurrentWordIndex((prev) => (prev + 1) % wordsLength)
        
        // Small delay before enter animation
        setTimeout(() => {
          if (currentWordSplit) {
            currentWordSplit.revert()
          }
          currentWordSplit = new SplitText(currentWord, { type: 'chars' })
          
          // Enter animation with enhanced rotate effect
          currentWordSplit.animateIn({
            type: 'rotate',
            duration: 0.6,
            stagger: 0.03,
            ease: "back.out(2)"
          })

          // Animate underline width with bounce effect
          gsap.fromTo(underline,
            { width: "0%" },
            { 
              width: "100%",
              duration: 0.8,
              ease: "elastic.out(1, 0.5)",
              delay: 0.4
            }
          )
        }, 200)
      })
    }

    // Enhanced hover effects for split text elements with multiple variations
    const addHoverEffects = (splitInstance, element, effectType = 'wave') => {
      if (!splitInstance?.chars.length || !element) return

      const effects = {
        wave: {
          enter: () => gsap.to(splitInstance.chars, {
            y: -8,
            color: "#3b82f6",
            textShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
            duration: 0.4,
            ease: "power2.out",
            stagger: {
              amount: 0.15,
              from: "start"
            }
          }),
          leave: () => gsap.to(splitInstance.chars, {
            y: 0,
            color: "",
            textShadow: "none",
            duration: 0.4,
            ease: "power2.out",
            stagger: {
              amount: 0.15,
              from: "end"
            }
          })
        },
        bounce: {
          enter: () => gsap.to(splitInstance.chars, {
            scale: 1.1,
            color: "#8b5cf6",
            duration: 0.3,
            ease: "back.out(1.7)",
            stagger: {
              amount: 0.1,
              from: "center"
            }
          }),
          leave: () => gsap.to(splitInstance.chars, {
            scale: 1,
            color: "",
            duration: 0.3,
            ease: "power2.out",
            stagger: {
              amount: 0.1,
              from: "center"
            }
          })
        },
        rotate: {
          enter: () => gsap.to(splitInstance.chars, {
            rotation: 5,
            color: "#ec4899",
            duration: 0.3,
            ease: "power2.out",
            stagger: {
              amount: 0.2,
              from: "random"
            }
          }),
          leave: () => gsap.to(splitInstance.chars, {
            rotation: 0,
            color: "",
            duration: 0.3,
            ease: "power2.out",
            stagger: {
              amount: 0.2,
              from: "random"
            }
          })
        }
      }

      const selectedEffect = effects[effectType] || effects.wave

      const handleMouseEnter = selectedEffect.enter
      const handleMouseLeave = selectedEffect.leave

      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)

      // Store handlers for cleanup
      element._hoverHandlers = { handleMouseEnter, handleMouseLeave }
    }

    // Apply different hover effects to each text element
    setTimeout(() => {
      addHoverEffects(shapingDreamsSplit, shapingDreamsElement, 'wave')
      addHoverEffects(extraordinarySplit, extraordinaryElement, 'bounce')
      addHoverEffects(experiencesSplit, experiencesElement, 'rotate')
      
      // Add click effects for emphasis highlighting
      const addClickEffects = (splitInstance, element) => {
        if (!splitInstance?.chars.length || !element) return

        const handleClick = () => {
          // Create a spectacular emphasis effect
          gsap.to(splitInstance.chars, {
            scale: 1.3,
            y: -15,
            color: "#f59e0b",
            textShadow: "0 0 20px rgba(245, 158, 11, 0.8)",
            duration: 0.4,
            ease: "back.out(2)",
            stagger: {
              amount: 0.2,
              from: "center"
            },
            onComplete: () => {
              // Return to normal
              gsap.to(splitInstance.chars, {
                scale: 1,
                y: 0,
                color: "",
                textShadow: "none",
                duration: 0.6,
                ease: "elastic.out(1, 0.3)",
                stagger: {
                  amount: 0.15,
                  from: "center"
                }
              })
            }
          })
        }

        element.addEventListener('click', handleClick)
        element.style.cursor = 'pointer'
        element._clickHandler = handleClick
      }

      addClickEffects(shapingDreamsSplit, shapingDreamsElement)
      addClickEffects(extraordinarySplit, extraordinaryElement)
      addClickEffects(experiencesSplit, experiencesElement)
    }, 2000)

    // Start word animation after initial animations
    const wordInterval = setInterval(animateWord, 2000)
    
    // Initial word entrance with enhanced split text
    setTimeout(() => {
      if (currentWordSplit) {
        currentWordSplit.revert()
      }
      currentWordSplit = new SplitText(dynamicWordRef.current, { type: 'chars' })
      
      currentWordSplit.animateIn({
        type: 'fadeUp',
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)"
      })
      
      gsap.fromTo(underlineRef.current,
        { width: "0%" },
        { 
          width: "100%",
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          delay: 0.3
        }
      )
    }, 2000)

    return () => {
      clearInterval(wordInterval)
      
      // Clean up parallax scroll listener
      window.removeEventListener('scroll', handleParallaxScroll)
      
      // Clean up split text instances
      if (shapingDreamsSplit) shapingDreamsSplit.revert()
      if (extraordinarySplit) extraordinarySplit.revert()
      if (experiencesSplit) experiencesSplit.revert()
      if (currentWordSplit) currentWordSplit.revert()
      
      // Clean up hover and click event listeners for split text
      const cleanupEventListeners = (element) => {
        if (element?._hoverHandlers) {
          element.removeEventListener('mouseenter', element._hoverHandlers.handleMouseEnter)
          element.removeEventListener('mouseleave', element._hoverHandlers.handleMouseLeave)
          delete element._hoverHandlers
        }
        if (element?._clickHandler) {
          element.removeEventListener('click', element._clickHandler)
          element.style.cursor = ''
          delete element._clickHandler
        }
      }
      
      cleanupEventListeners(shapingDreamsElement)
      cleanupEventListeners(extraordinaryElement)
      cleanupEventListeners(experiencesElement)
      
      // Clean up logo event listeners
      if (logoImage && handleLogoHover && handleLogoLeave && handleLogoClick) {
        logoImage.removeEventListener('mouseenter', handleLogoHover)
        logoImage.removeEventListener('mouseleave', handleLogoLeave)
        logoImage.removeEventListener('click', handleLogoClick)
      }
    }
  }, [wordsLength, parallaxBg])

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
    <section id="home" ref={heroRef} className="hero-parallax-container relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Parallax Background Image */}
      <div ref={parallaxBg} className="hero-parallax-bg absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            transform: 'scale(1.1)',
            willChange: 'transform'
          }}
        ></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Professional Background Elements with Parallax */}
      <div className="absolute inset-0 opacity-[0.08] parallax-elements">
        <div className="bg-element absolute top-16 left-16 w-48 h-48 border border-white/30 rounded-full"></div>
        <div className="bg-element absolute top-32 right-16 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="bg-element absolute bottom-16 left-1/2 transform -translate-x-1/2 w-56 h-56 border border-white/25 rounded-full"></div>
      </div>

      {/* Subtle Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.1]">
        <div className="bg-shape absolute top-1/4 left-1/4 w-12 h-12 border border-white/40 rotate-45"></div>
        <div className="bg-shape absolute bottom-1/4 right-1/4 w-8 h-8 border border-white/30 rounded-full"></div>
        <div className="bg-shape absolute top-1/3 right-1/3 w-6 h-6 bg-white/20 rounded-full"></div>
        <div className="bg-shape absolute bottom-1/3 left-1/3 w-10 h-10 border border-white/35 rotate-12"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certification Badge */}
        <div className="mb-6 mt-6 flex justify-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-white/90 backdrop-blur-md border border-white/30 rounded-full text-slate-700 text-sm font-medium shadow-xl hover:shadow-2xl transition-all duration-300">
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
              <h1 ref={subtitleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6 drop-shadow-lg">
                <span ref={shapingDreamsRef} className="text-blue-300 font-semibold block split-text-container">Shaping Dreams</span>
                <span ref={extraordinaryRef} className="text-white block split-text-container">into Extraordinary</span>
                <span ref={experiencesRef} className="text-white font-bold block split-text-container">Experiences</span>
              </h1>

              {/* Dynamic Word Section */}
              <div className="relative mb-8">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-2">
                  <span className="text-base sm:text-lg md:text-xl text-gray-200 font-light drop-shadow-md">We deliver</span>
                  <div className="relative inline-block dynamic-word-container">
                    <div 
                      ref={dynamicWordRef}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-300 drop-shadow-lg"
                    >
                      {words[currentWordIndex]}
                    </div>
                    <div 
                      ref={underlineRef}
                      className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                  <span className="text-base sm:text-lg md:text-xl text-gray-200 font-light drop-shadow-md">experiences</span>
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
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator targetSection="about" />
    </section>
  )
}

export default Hero
