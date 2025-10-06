import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animation Utility Functions
 * Ready-to-use animation presets for common scroll effects
 */

export const ScrollAnimations = {
  
  /**
   * Text Reveal Animation
   * Characters or words appear one by one
   */
  textReveal: (element, options = {}) => {
    const {
      splitBy = 'words', // 'chars', 'words', 'lines'
      stagger = 0.05,
      duration = 0.8,
      delay = 0
    } = options

    // Split text into spans
    const text = element.textContent
    const splitText = splitBy === 'chars' 
      ? text.split('').map(char => `<span>${char === ' ' ? '&nbsp;' : char}</span>`)
      : text.split(' ').map(word => `<span>${word}</span>`)
    
    element.innerHTML = splitText.join(splitBy === 'chars' ? '' : ' ')
    
    const spans = element.querySelectorAll('span')
    
    gsap.fromTo(spans, 
      { 
        opacity: 0, 
        y: 50,
        rotationX: 90
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration,
        delay,
        stagger,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    )
  },

  /**
   * Morphing Card Animation
   * Cards transform shape and color as they enter
   */
  morphingCards: (container, options = {}) => {
    const {
      stagger = 0.15,
      duration = 1.2
    } = options

    const cards = container.children

    gsap.fromTo(cards,
      {
        opacity: 0,
        scale: 0.5,
        rotation: -15,
        borderRadius: '50%',
        backgroundColor: '#f0f0f0'
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        borderRadius: '1rem',
        backgroundColor: '#ffffff',
        duration,
        stagger,
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  },

  /**
   * SVG Path Drawing Animation
   * Draws SVG paths as user scrolls
   */
  drawSVGPath: (svgElement, options = {}) => {
    const {
      duration = 2,
      ease = "none"
    } = options

    const paths = svgElement.querySelectorAll('path')
    
    paths.forEach(path => {
      const length = path.getTotalLength()
      path.style.strokeDasharray = length
      path.style.strokeDashoffset = length

      gsap.to(path, {
        strokeDashoffset: 0,
        duration,
        ease,
        scrollTrigger: {
          trigger: svgElement,
          start: "top 70%",
          end: "bottom 30%",
          scrub: true
        }
      })
    })
  },

  /**
   * Floating Elements Animation
   * Elements float up and down continuously
   */
  floatingElements: (elements, options = {}) => {
    const {
      amplitude = 20,
      duration = 3,
      stagger = 0.5
    } = options

    elements.forEach((element, index) => {
      gsap.to(element, {
        y: `+=${amplitude}`,
        duration: duration + (index * stagger),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * stagger
      })
    })
  },

  /**
   * Magnetic Effect
   * Elements follow mouse cursor with magnetic attraction
   */
  magneticEffect: (element, options = {}) => {
    const {
      strength = 0.3,
      speed = 0.8
    } = options

    let isHovering = false

    element.addEventListener('mouseenter', () => {
      isHovering = true
    })

    element.addEventListener('mouseleave', () => {
      isHovering = false
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: speed,
        ease: "power2.out"
      })
    })

    element.addEventListener('mousemove', (e) => {
      if (!isHovering) return

      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: speed,
        ease: "power2.out"
      })
    })
  },

  /**
   * Scroll Progress Bar
   * Updates progress bar based on scroll position
   */
  scrollProgressBar: (progressElement, options = {}) => {
    const {
      target = document.body,
      axis = 'vertical' // 'vertical' or 'horizontal'
    } = options

    ScrollTrigger.create({
      trigger: target,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress * 100
        if (axis === 'vertical') {
          progressElement.style.height = `${progress}%`
        } else {
          progressElement.style.width = `${progress}%`
        }
      }
    })
  },

  /**
   * Typewriter Effect
   * Types out text character by character
   */
  typewriter: (element, options = {}) => {
    const {
      speed = 50, // milliseconds per character
      cursor = true,
      cursorChar = '|'
    } = options

    const text = element.textContent
    element.textContent = ''

    if (cursor) {
      element.textContent = cursorChar
      element.classList.add('typewriter-cursor')
    }

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        let i = 0
        const interval = setInterval(() => {
          if (i < text.length) {
            element.textContent = text.slice(0, i + 1) + (cursor ? cursorChar : '')
            i++
          } else {
            clearInterval(interval)
            if (cursor) {
              // Make cursor blink
              setInterval(() => {
                element.textContent = element.textContent.endsWith(cursorChar)
                  ? element.textContent.slice(0, -1)
                  : element.textContent + cursorChar
              }, 500)
            }
          }
        }, speed)
      }
    })
  },

  /**
   * 3D Perspective Scroll
   * Creates 3D perspective effect on scroll
   */
  perspective3D: (container, options = {}) => {
    const {
      perspective = 1000,
      rotationRange = 45
    } = options

    container.style.perspective = `${perspective}px`
    const elements = container.children

    Array.from(elements).forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          const rotation = (progress - 0.5) * rotationRange
          const translateZ = Math.sin(progress * Math.PI) * 100
          
          gsap.set(element, {
            rotationY: rotation,
            z: translateZ,
            transformOrigin: "center center"
          })
        }
      })
    })
  },

  /**
   * Particle System on Scroll
   * Creates floating particles that respond to scroll
   */
  scrollParticles: (container, options = {}) => {
    const {
      particleCount = 50,
      colors = ['#3b82f6', '#8b5cf6', '#ef4444', '#10b981'],
      size = { min: 2, max: 6 },
      speed = { min: 0.5, max: 2 }
    } = options

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'scroll-particle'
      particle.style.cssText = `
        position: fixed;
        width: ${Math.random() * (size.max - size.min) + size.min}px;
        height: ${Math.random() * (size.max - size.min) + size.min}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        opacity: 0.7;
      `
      
      // Random starting position
      particle.style.left = Math.random() * window.innerWidth + 'px'
      particle.style.top = Math.random() * window.innerHeight + 'px'
      
      container.appendChild(particle)

      // Animate particle on scroll
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          const moveY = progress * window.innerHeight * (Math.random() * (speed.max - speed.min) + speed.min)
          const moveX = Math.sin(progress * Math.PI * 4) * 50
          
          gsap.set(particle, {
            y: moveY,
            x: moveX,
            rotation: progress * 360
          })
        }
      })
    }
  },

  /**
   * High-Quality Image Parallax
   * Creates smooth parallax effect with high-quality background images
   */
  imageParallax: (element, options = {}) => {
    const {
      speed = 0.5,
      scale = 1.2,
      ease = "none",
      trigger = element,
      start = "top bottom",
      end = "bottom top"
    } = options

    // Ensure the image scales properly for parallax
    gsap.set(element, {
      scale: scale,
      transformOrigin: "center center"
    })

    // Create the parallax animation
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: ease,
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        scrub: true,
        invalidateOnRefresh: true
      }
    })
  },

  /**
   * Advanced Image Parallax with Multiple Layers
   * Creates depth with multiple image layers moving at different speeds
   */
  layeredImageParallax: (container, options = {}) => {
    const {
      layers = [
        { selector: '.parallax-bg', speed: 0.2 },
        { selector: '.parallax-mid', speed: 0.5 },
        { selector: '.parallax-front', speed: 0.8 }
      ]
    } = options

    layers.forEach(layer => {
      const elements = container.querySelectorAll(layer.selector)
      elements.forEach(element => {
        ScrollAnimations.imageParallax(element, {
          speed: layer.speed,
          trigger: container
        })
      })
    })
  },

  /**
   * Smooth Image Reveal with Parallax
   * Reveals image with clip-path animation combined with parallax
   */
  imageRevealParallax: (element, options = {}) => {
    const {
      direction = 'up', // 'up', 'down', 'left', 'right'
      duration = 1.5,
      ease = "power2.out",
      parallaxSpeed = 0.3
    } = options

    const img = element.querySelector('img') || element

    // Set initial clip-path based on direction
    const clipPaths = {
      up: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      down: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      left: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      right: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
    }

    const finalClipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'

    gsap.set(element, {
      clipPath: clipPaths[direction]
    })

    // Reveal animation
    gsap.to(element, {
      clipPath: finalClipPath,
      duration: duration,
      ease: ease,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    // Add parallax effect
    ScrollAnimations.imageParallax(img, {
      speed: parallaxSpeed,
      trigger: element
    })
  },

  /**
   * Image Zoom Parallax
   * Combines zoom effect with parallax for dramatic impact
   */
  imageZoomParallax: (element, options = {}) => {
    const {
      zoomFrom = 1.5,
      zoomTo = 1,
      parallaxSpeed = 0.4,
      duration = 1.2,
      ease = "power2.out"
    } = options

    const img = element.querySelector('img') || element

    // Set initial scale
    gsap.set(img, { scale: zoomFrom })

    // Zoom animation
    gsap.to(img, {
      scale: zoomTo,
      duration: duration,
      ease: ease,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })

    // Add parallax effect
    ScrollAnimations.imageParallax(img, {
      speed: parallaxSpeed,
      trigger: element
    })
  }
}

// CSS for typewriter cursor and parallax effects
const style = document.createElement('style')
style.textContent = `
  .typewriter-cursor {
    font-family: monospace;
  }
  
  .scroll-particle {
    will-change: transform;
  }
  
  .parallax-container {
    overflow: hidden;
    position: relative;
  }
  
  .parallax-element {
    will-change: transform;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
  
  .parallax-image {
    width: 100%;
    height: 120%;
    object-fit: cover;
    will-change: transform;
    backface-visibility: hidden;
  }
  
  .smooth-parallax {
    transform: translate3d(0, 0, 0);
    will-change: transform;
  }
`
document.head.appendChild(style)

export default ScrollAnimations
