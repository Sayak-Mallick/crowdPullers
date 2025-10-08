import { useRevealAnimation, useParallaxAnimation, useCounterAnimation, useStaggerAnimation } from '../hooks/useScrollAnimations'
import { useEffect, useRef } from 'react'
import ScrollAnimations from '../utils/ScrollAnimations'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from './ScrollIndicator'
import './ParallaxStyles.css'

gsap.registerPlugin(ScrollTrigger)

const ScrollDemo = () => {
  // Animation hooks
  const titleRef = useRevealAnimation({ direction: 'up', distance: 100, duration: 1.2 })
  const subtitleRef = useRevealAnimation({ direction: 'down', distance: 50, duration: 1, delay: 0.2 })
  const parallaxBgRef = useParallaxAnimation({ speed: 0.5 })
  const cardsRef = useStaggerAnimation({ stagger: 0.2, direction: 'up', distance: 60, duration: 0.8 })
  const counter1Ref = useCounterAnimation({ start: 0, end: 500, duration: 2.5, format: (value) => Math.round(value) })
  const counter2Ref = useCounterAnimation({ start: 0, end: 15, duration: 2, format: (value) => Math.round(value) + '+' })
  const counter3Ref = useCounterAnimation({ start: 0, end: 100, duration: 1.8, format: (value) => Math.round(value) + '+' })
  const textRevealRef = useRef(null)
  const magneticRef = useRef(null)

  useEffect(() => {
    // High-quality image parallax effect for hero section
    if (parallaxBgRef.current) {
      ScrollAnimations.imageParallax(parallaxBgRef.current, {
        speed: 0.6,
        scale: 1.3,
        ease: "none"
      })
    }

    // Apply parallax to all parallax containers
    const parallaxContainers = document.querySelectorAll('.parallax-container')
    parallaxContainers.forEach((container, index) => {
      const parallaxElement = container.querySelector('.parallax-element')
      if (parallaxElement) {
        ScrollAnimations.imageParallax(parallaxElement, {
          speed: 0.4 + (index * 0.1), // Vary speed for each section
          scale: 1.2,
          ease: "none",
          trigger: container
        })
      }

      // Layered parallax for floating elements in each container
      ScrollAnimations.layeredImageParallax(container, {
        layers: [
          { selector: '.parallax-bg', speed: 0.2 },
          { selector: '.parallax-mid', speed: 0.4 },
          { selector: '.parallax-front', speed: 0.6 }
        ]
      })
    })

    // Advanced text reveal animation
    if (textRevealRef.current) {
      ScrollAnimations.textReveal(textRevealRef.current, {
        splitBy: 'words',
        stagger: 0.1,
        duration: 0.8
      })
    }

    // Magnetic effect on button
    if (magneticRef.current) {
      ScrollAnimations.magneticEffect(magneticRef.current, {
        strength: 0.2,
        speed: 0.6
      })
    }

    // Floating animation for some elements
    const floatingElements = document.querySelectorAll('.floating-animation')
    if (floatingElements.length > 0) {
      ScrollAnimations.floatingElements(Array.from(floatingElements), {
        amplitude: 15,
        duration: 4,
        stagger: 0.8
      })
    }

    // Add smooth scrolling performance optimization
    gsap.config({
      force3D: true,
      nullTargetWarn: false
    })

    // Scroll progress indicator
    const progressBar = document.getElementById('scroll-progress')
    if (progressBar) {
      ScrollAnimations.scrollProgressBar(progressBar, {
        target: document.body,
        axis: 'horizontal'
      })
    }

    // Enable smooth scrolling with Lenis (if available)
    const initSmoothScroll = async () => {
      try {
        const { default: Lenis } = await import('lenis')
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
          smoothTouch: false
        })

        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Sync with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update)
        
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000)
        })
      } catch {
        console.log('Lenis smooth scroll not available, using default scroll')
      }
    }
    
    initSmoothScroll()

    // Refresh ScrollTrigger on window resize for responsive parallax
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [parallaxBgRef])

  return (
    <section id="scroll-demo" className="relative overflow-hidden">
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator" style={{ transform: 'scaleX(0)' }} id="scroll-progress"></div>
      {/* Hero Section with High-Quality Parallax Background */}
      <div className="relative min-h-screen parallax-container overflow-hidden">
        {/* High-Quality Background Image with Parallax */}
        <div className="absolute inset-0">
          <div 
            ref={parallaxBgRef} 
            className="parallax-element absolute inset-0 w-full h-[120%] -top-[10%]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=90')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Gradient Overlay for Better Text Readability */}
          <div className="absolute inset-0 " />
          
          {/* Additional Overlay for Depth */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Floating Parallax Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="parallax-mid absolute top-20 left-20 w-32 h-32 border border-white/40 rounded-full backdrop-blur-sm"></div>
          <div className="parallax-mid absolute top-40 right-20 w-48 h-48 border border-purple-300/40 rounded-full backdrop-blur-sm"></div>
          <div className="parallax-front absolute bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-40 border border-blue-300/40 rounded-full backdrop-blur-sm"></div>
          <div className="parallax-bg absolute top-1/2 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-md"></div>
          <div className="parallax-front absolute bottom-1/3 right-10 w-24 h-24 bg-purple-400/20 rounded-full backdrop-blur-md"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 text-shadow-strong">
              <img 
                src="/crowdPullers.png" 
                alt="CROWDpullers" 
                className="mx-auto max-h-32 md:max-h-40 w-auto filter drop-shadow-2xl"
              />
              <span className="block text-white animate-pulse">
                Event Excellence
              </span>
            </h1>
            <p ref={subtitleRef} className="text-xl md:text-2xl mb-8 text-shadow-strong rounded-lg px-6 py-3 inline-block">
              Shaping dreams into extraordinary experiences since 2008
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 smooth-animation">
                Explore Services
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 smooth-animation shadow-xl">
                Lets Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Reveals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-reveal">
              Our Event Management Services
            </h2>
            <p className="text-xl text-gray-600 animate-reveal">
              Comprehensive solutions for all your event needs
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Events</h3>
              <p className="text-gray-600">Product launches, AGMs, conferences, and corporate celebrations</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exhibitions & Trade Shows</h3>
              <p className="text-gray-600">Mining congresses, business exhibitions, and industry showcases</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural & Entertainment</h3>
              <p className="text-gray-600">Live concerts, classical music conferences, and cultural celebrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Data Visualization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-reveal">
              Our Event Management Excellence
            </h2>
            <p className="text-xl text-gray-600 animate-reveal">
              Real numbers that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div ref={counter1Ref} className="text-5xl font-bold text-blue-600 mb-4">500</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Events Organized</h3>
              <p className="text-gray-600">Successfully executed events across India</p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div ref={counter2Ref} className="text-5xl font-bold text-green-600 mb-4">15+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-gray-600">Leading event management company in Eastern India</p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div ref={counter3Ref} className="text-5xl font-bold text-purple-600 mb-4">100+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Happy Clients</h3>
              <p className="text-gray-600">Corporate, government, and institutional clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Animations Section */}
      <section className="relative py-20 parallax-container overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div 
            className="parallax-element absolute inset-0 w-full h-[120%] -top-[10%]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=90')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/85 to-slate-900/90" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 ref={textRevealRef} className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">
              Our Event Management Expertise
            </h2>
            <p className="text-xl text-white/90 animate-reveal drop-shadow-lg">
              Comprehensive solutions for unforgettable events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            <div className="floating-animation bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">�</div>
              <h3 className="text-xl font-bold text-white mb-3">Government Events</h3>
              <p className="text-white/80">Republic Day celebrations, Independence Day programs, and official ceremonies</p>
            </div>

            <div className="floating-animation bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-xl font-bold text-white mb-3">Trade Exhibitions</h3>
              <p className="text-white/80">IMME exhibitions, Austrade pavilions, and international business showcases</p>
            </div>

            <div className="floating-animation bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">�</div>
              <h3 className="text-xl font-bold text-white mb-3">Cultural Programs</h3>
              <p className="text-white/80">Classical music conferences, Durga Puja carnivals, and traditional celebrations</p>
            </div>

            <div className="floating-animation bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-3">Award Ceremonies</h3>
              <p className="text-white/80">Corporate recognition programs, convocations, and institutional celebrations</p>
            </div>

            <div className="floating-animation bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-bold text-white mb-3">Live Concerts</h3>
              <p className="text-white/80">Arijit Singh, Sonu Nigam, Shreya Ghoshal concerts and entertainment shows</p>
            </div>

            <div className="floating-animation bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Business Conferences</h3>
              <p className="text-white/80">AGMs, seminars, mining congresses, and industry networking events</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
      <div className='mt-8'>
          <ScrollIndicator
            targetSection="services"
            borderColor="border-white/60"
            hoverColor="hover:border-purple-400"
            dotColor="bg-white/80"
            hoverDotColor="group-hover:bg-purple-400"
          />
      </div>
      </section>

      {/* Scale Animation Section */}
      {/* <section className="relative py-20 parallax-container overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="parallax-element absolute inset-0 w-full h-[120%] -top-[10%]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=90')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/85 to-purple-900/85" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div ref={scaleRef} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-xl">
              Ready to Create Your Next Event?
            </h2>
            <p className="text-xl text-white/90 mb-8 drop-shadow-lg">
              From concept to execution, let CROWDpullers turn your vision into an extraordinary experience
            </p>
            <button 
              ref={magneticRef}
              onClick={scrollToContact}
              className="bg-white text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:shadow-xl transform hover:-translate-y-1 drop-shadow-lg cursor-pointer smooth-animation"
            >
              Plan Your Event Today
            </button>
          </div>
        </div>
      </section> */}

      {/* Additional parallax elements for depth */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="parallax-bg absolute top-10 left-10 w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="parallax-bg absolute top-32 right-20 w-6 h-6 bg-purple-500 rounded-full"></div>
        <div className="parallax-bg absolute bottom-40 left-1/4 w-3 h-3 bg-pink-500 rounded-full"></div>
        <div className="parallax-bg absolute bottom-20 right-1/3 w-5 h-5 bg-indigo-500 rounded-full"></div>
      </div>
    </section>
  )
}

export default ScrollDemo
