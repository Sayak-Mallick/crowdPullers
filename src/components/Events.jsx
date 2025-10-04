import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Events = () => {
  const sectionRef = useRef(null)

  const recentEvents = [
    {
      title: "Bharat Chamber of Commerce Independence Day 2025",
      date: "15.08.2025",
      location: "BCC Office",
      category: "Corporate",
      image: "🇮🇳"
    },
    {
      title: "Look East AgTech Summit 2025",
      date: "14.05.2025",
      location: "Biswa Bangla Convention Centre",
      category: "Conference",
      image: "🌾"
    },
    {
      title: "3 Day Agro F&B Expo and Conference",
      date: "13-15.06.2025",
      location: "Netaji Indoor Stadium",
      category: "Exhibition",
      image: "🍽️"
    },
    {
      title: "47th Convocation 2025",
      date: "29.03.2025",
      location: "Netaji Indoor Stadium",
      category: "Academic",
      image: "🎓"
    },
    {
      title: "Diamond Jubilee Fun Fiesta",
      date: "14.01.2025",
      location: "Netaji Indoor Stadium",
      category: "Cultural",
      image: "💎"
    },
    {
      title: "Golden Jubilee Celebration",
      date: "22.11.2024",
      location: "Dumurjola Indoor Stadium",
      category: "Celebration",
      image: "🏆"
    }
  ]

  const stats = [
    { number: "500+", label: "Events Organized", icon: "🎪" },
    { number: "15+", label: "Years Experience", icon: "📅" },
    { number: "100+", label: "Happy Clients", icon: "😊" },
    { number: "50+", label: "Awards Won", icon: "🏆" }
  ]

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.event-card')
    const statCards = sectionRef.current.querySelectorAll('.stat-card')
    const titleElement = sectionRef.current.querySelector('.main-title')
    const underlineElement = sectionRef.current.querySelector('.title-underline')
    const subtitleElement = sectionRef.current.querySelector('.subtitle')
    const ctaSection = sectionRef.current.querySelector('.cta-section')
    
    // Main title animation
    gsap.fromTo(titleElement,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleElement,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    // Title underline animation
    gsap.fromTo(underlineElement,
      { width: 0 },
      {
        width: 96,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleElement,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    // Subtitle animation
    gsap.fromTo(subtitleElement,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleElement,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    // Stats cards animation
    gsap.fromTo(statCards,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector('.stats-grid'),
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    )

    // Event cards animation
    gsap.fromTo(cards,
      { y: 50, opacity: 0, rotateY: 15 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector('.events-grid'),
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    )

    // CTA section animation
    gsap.fromTo(ctaSection,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaSection,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    // Add hover animations for event cards
    cards.forEach(card => {
      const button = card.querySelector('.event-button')
      const emoji = card.querySelector('.event-emoji')
      const title = card.querySelector('.event-title')

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.03, y: -10, duration: 0.3, ease: "power2.out" })
        gsap.to(emoji, { scale: 1.1, duration: 0.3, ease: "back.out(1.7)" })
        gsap.to(title, { color: "#93c5fd", duration: 0.3 })
        gsap.to(button, { opacity: 1, duration: 0.3 })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" })
        gsap.to(emoji, { scale: 1, duration: 0.3, ease: "back.out(1.7)" })
        gsap.to(title, { color: "#ffffff", duration: 0.3 })
        gsap.to(button, { opacity: 0, duration: 0.3 })
      })
    })

    // Add hover animations for stat cards
    statCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, y: -5, duration: 0.3, ease: "power2.out" })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" })
      })
    })

    // Add hover animations for CTA buttons
    const primaryButton = sectionRef.current.querySelector('.cta-button-primary')
    const secondaryButton = sectionRef.current.querySelector('.cta-button-secondary')

    if (primaryButton) {
      primaryButton.addEventListener('mouseenter', () => {
        gsap.to(primaryButton, { 
          scale: 1.05, 
          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)", 
          duration: 0.3, 
          ease: "power2.out" 
        })
      })

      primaryButton.addEventListener('mouseleave', () => {
        gsap.to(primaryButton, { 
          scale: 1, 
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", 
          duration: 0.3, 
          ease: "power2.out" 
        })
      })

      primaryButton.addEventListener('mousedown', () => {
        gsap.to(primaryButton, { scale: 0.95, duration: 0.1 })
      })

      primaryButton.addEventListener('mouseup', () => {
        gsap.to(primaryButton, { scale: 1.05, duration: 0.1 })
      })
    }

    if (secondaryButton) {
      secondaryButton.addEventListener('mouseenter', () => {
        gsap.to(secondaryButton, { scale: 1.05, duration: 0.3, ease: "power2.out" })
      })

      secondaryButton.addEventListener('mouseleave', () => {
        gsap.to(secondaryButton, { scale: 1, duration: 0.3, ease: "power2.out" })
      })

      secondaryButton.addEventListener('mousedown', () => {
        gsap.to(secondaryButton, { scale: 0.95, duration: 0.1 })
      })

      secondaryButton.addEventListener('mouseup', () => {
        gsap.to(secondaryButton, { scale: 1.05, duration: 0.1 })
      })
    }

  }, [])

  return (
    <section id="events" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="main-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Events</span>
          </h2>
          <div className="title-underline h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="subtitle mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our expertise through successful events that have made lasting impressions across India.
          </p>
        </div>

        {/* Statistics */}
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/10 cursor-pointer"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Events Grid */}
        <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentEvents.map((event, index) => (
            <div
              key={index}
              className="event-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="text-center mb-6">
                <div className="event-emoji text-6xl mb-4">
                  {event.image}
                </div>
                <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-300 text-xs font-semibold rounded-full mb-4">
                  {event.category}
                </div>
              </div>

              <h3 className="event-title text-xl font-bold text-white mb-4 transition-colors duration-300">
                {event.title}
              </h3>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              <button className="event-button w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold opacity-0 transition-all duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-section mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-12 rounded-3xl border border-white/10">
            <h3 className="text-3xl font-bold mb-4">Want to See More Events?</h3>
            <p className="text-xl mb-8 text-gray-300">
              Explore our extensive portfolio of successful events spanning over 15 years of excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-button-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300">
                View All Events
              </button>
              <button className="cta-button-secondary border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Plan Your Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
