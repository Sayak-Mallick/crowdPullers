import { useRevealAnimation, useParallaxAnimation, useCounterAnimation, useStaggerAnimation } from '../hooks/useScrollAnimations'
import { useEffect, useRef } from 'react'
import ScrollAnimations from '../utils/ScrollAnimations'

const ScrollDemo = () => {
  // Animation hooks
  const titleRef = useRevealAnimation({ direction: 'up', distance: 100, duration: 1.2 })
  const subtitleRef = useRevealAnimation({ direction: 'down', distance: 50, duration: 1, delay: 0.2 })
  const parallaxBgRef = useParallaxAnimation({ speed: 0.5 })
  const cardsRef = useStaggerAnimation({ stagger: 0.2, direction: 'up', distance: 60, duration: 0.8 })
  const counter1Ref = useCounterAnimation({ start: 0, end: 500, duration: 2.5, format: (value) => Math.round(value) })
  const counter2Ref = useCounterAnimation({ start: 0, end: 15, duration: 2, format: (value) => Math.round(value) + '+' })
  const counter3Ref = useCounterAnimation({ start: 0, end: 100, duration: 1.8, format: (value) => Math.round(value) + '+' })
  const scaleRef = useRevealAnimation({ direction: 'scale', duration: 1.5 })
  const textRevealRef = useRef(null)
  const magneticRef = useRef(null)

  useEffect(() => {
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
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Parallax Background Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Parallax Background Elements */}
        <div ref={parallaxBgRef} className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-48 h-48 border border-purple-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-40 border border-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-purple-400/20 rounded-full"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6">
              CROWDpullers
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Event Excellence
              </span>
            </h1>
            <p ref={subtitleRef} className="text-xl md:text-2xl opacity-90 mb-8">
              Shaping dreams into extraordinary experiences since 2008
            </p>
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 ref={textRevealRef} className="text-4xl font-bold text-white mb-6">
              Our Event Management Expertise
            </h2>
            <p className="text-xl text-white/80 animate-reveal">
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
      </section>

      {/* Scale Animation Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div ref={scaleRef} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Next Event?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              From concept to execution, let CROWDpullers turn your vision into an extraordinary experience
            </p>
            <button 
              ref={magneticRef}
              className="bg-white text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              Plan Your Event Today
            </button>
          </div>
        </div>
      </section>

      {/* Additional parallax elements for depth */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="parallax-bg absolute top-10 left-10 w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="parallax-bg absolute top-32 right-20 w-6 h-6 bg-purple-500 rounded-full"></div>
        <div className="parallax-bg absolute bottom-40 left-1/4 w-3 h-3 bg-pink-500 rounded-full"></div>
        <div className="parallax-bg absolute bottom-20 right-1/3 w-5 h-5 bg-indigo-500 rounded-full"></div>
      </div>
    </div>
  )
}

export default ScrollDemo
