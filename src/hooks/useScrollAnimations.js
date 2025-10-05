import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimations = () => {
  const elementRef = useRef(null)

  // Reveal animation
  const useRevealAnimation = (options = {}) => {
    const {
      direction = 'up',
      distance = 100,
      duration = 1.2,
      delay = 0,
      start = "top 85%",
      end = "bottom 15%"
    } = options

    useEffect(() => {
      if (!elementRef.current) return

      const element = elementRef.current
      let fromVars = { opacity: 0 }
      let toVars = { opacity: 1, duration, delay, ease: "power2.out" }

      switch (direction) {
        case 'up':
          fromVars.y = distance
          toVars.y = 0
          break
        case 'down':
          fromVars.y = -distance
          toVars.y = 0
          break
        case 'left':
          fromVars.x = distance
          toVars.x = 0
          break
        case 'right':
          fromVars.x = -distance
          toVars.x = 0
          break
        case 'scale':
          fromVars.scale = 0.8
          toVars.scale = 1
          break
      }

      gsap.fromTo(element, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          toggleActions: "play none none reverse"
        }
      })

      return () => {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === element) trigger.kill()
        })
      }
    }, [direction, distance, duration, delay, start, end])

    return elementRef
  }

  // Parallax animation
  const useParallaxAnimation = (options = {}) => {
    const {
      speed = 0.5,
      direction = 'vertical'
    } = options

    useEffect(() => {
      if (!elementRef.current) return

      const element = elementRef.current
      const moveDistance = direction === 'vertical' ? -50 * speed : -50 * speed

      gsap.to(element, {
        [direction === 'vertical' ? 'yPercent' : 'xPercent']: moveDistance,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      return () => {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === element) trigger.kill()
        })
      }
    }, [speed, direction])

    return elementRef
  }

  // Counter animation
  const useCounterAnimation = (options = {}) => {
    const {
      start = 0,
      end = 100,
      duration = 2,
      format = (value) => Math.round(value)
    } = options

    useEffect(() => {
      if (!elementRef.current) return

      const element = elementRef.current
      const obj = { value: start }

      gsap.to(obj, {
        value: end,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          element.textContent = format(obj.value)
        },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })

      return () => {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === element) trigger.kill()
        })
      }
    }, [start, end, duration, format])

    return elementRef
  }

  // Stagger children animation
  const useStaggerAnimation = (options = {}) => {
    const {
      stagger = 0.1,
      direction = 'up',
      distance = 50,
      duration = 0.8
    } = options

    useEffect(() => {
      if (!elementRef.current) return

      const container = elementRef.current
      const children = Array.from(container.children)

      let fromVars = { opacity: 0 }
      let toVars = { opacity: 1, duration, ease: "power2.out", stagger }

      switch (direction) {
        case 'up':
          fromVars.y = distance
          toVars.y = 0
          break
        case 'down':
          fromVars.y = -distance
          toVars.y = 0
          break
        case 'left':
          fromVars.x = distance
          toVars.x = 0
          break
        case 'right':
          fromVars.x = -distance
          toVars.x = 0
          break
        case 'scale':
          fromVars.scale = 0.8
          toVars.scale = 1
          break
      }

      gsap.fromTo(children, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      return () => {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === container) trigger.kill()
        })
      }
    }, [stagger, direction, distance, duration])

    return elementRef
  }

  return {
    useRevealAnimation,
    useParallaxAnimation,
    useCounterAnimation,
    useStaggerAnimation
  }
}

// Individual hooks for easier usage
export const useRevealAnimation = (options) => {
  const { useRevealAnimation } = useScrollAnimations()
  return useRevealAnimation(options)
}

export const useParallaxAnimation = (options) => {
  const { useParallaxAnimation } = useScrollAnimations()
  return useParallaxAnimation(options)
}

export const useCounterAnimation = (options) => {
  const { useCounterAnimation } = useScrollAnimations()
  return useCounterAnimation(options)
}

export const useStaggerAnimation = (options) => {
  const { useStaggerAnimation } = useScrollAnimations()
  return useStaggerAnimation(options)
}
