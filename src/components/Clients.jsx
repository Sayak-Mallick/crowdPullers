import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Clients = () => {
  const sectionRef = useRef(null)
  const logoContainerRef = useRef(null)

  const clients = [
    { name: "Bharat Chamber of Commerce", category: "Chamber" },
    { name: "Bengal Chamber of Commerce & Industries", category: "Chamber" },
    { name: "Australian Trade Commission (Austrade)", category: "Government" },
    { name: "Rotary Club of Calcutta Chowrenghee", category: "Club" },
    { name: "Mining, Geological & Metallurgical Institute", category: "Institute" },
    { name: "Indian Leather Products Association", category: "Association" },
    { name: "West Bengal Fire and Emergency Services", category: "Government" },
    { name: "HIDCO", category: "Government" },
    { name: "Kolkata Police", category: "Government" },
    { name: "ICICI Bank", category: "Banking" },
    { name: "ISKCON", category: "Religious" },
    { name: "Netaji Indoor Stadium", category: "Venue" },
    { name: "Art of Living Foundation", category: "Spiritual" },
    { name: "Garia Mitali Sangha", category: "Cultural" },
    { name: "Uttarpara Sangeet Chakra", category: "Cultural" },
    { name: "Bridge and Roof Co. (India) Ltd.", category: "Corporate" }
  ]

  const testimonials = [
    {
      name: "Bharat Chamber of Commerce",
      quote: "CROWDpullers has been our trusted partner for multiple events. Their professionalism and attention to detail is exceptional.",
      designation: "Event Coordinator"
    },
    {
      name: "Australian Trade Commission",
      quote: "Outstanding event management services. They consistently deliver beyond our expectations for international exhibitions.",
      designation: "Trade Commissioner"
    },
    {
      name: "HIDCO",
      quote: "From corporate events to cultural celebrations, CROWDpullers brings creativity and excellence to every project.",
      designation: "Project Manager"
    }
  ]

  useEffect(() => {
    const titleElement = sectionRef.current.querySelector('.main-title')
    const underlineElement = sectionRef.current.querySelector('.title-underline')
    const subtitleElement = sectionRef.current.querySelector('.subtitle')
    const testimonialSectionTitle = sectionRef.current.querySelector('.testimonial-section-title')
    const ctaSection = sectionRef.current.querySelector('.cta-section')
    const logoCards = sectionRef.current.querySelectorAll('.logo-card')
    const testimonialCards = sectionRef.current.querySelectorAll('.testimonial-card')

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

    // Infinite scroll animation for client logos
    const logos = logoContainerRef.current.children
    const logoWidth = 300 // Approximate width of each logo card
    const totalWidth = logoWidth * logos.length

    gsap.set(logoContainerRef.current, { width: totalWidth * 2 })

    gsap.to(logoContainerRef.current, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1
    })

    // Testimonial section title animation
    gsap.fromTo(testimonialSectionTitle,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialSectionTitle,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    // Testimonial cards animation
    gsap.fromTo(testimonialCards,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector('.testimonials-section'),
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

    // Add hover animations for logo cards
    logoCards.forEach(card => {
      const icon = card.querySelector('.logo-icon')
      const title = card.querySelector('.logo-title')

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, y: -5, duration: 0.3, ease: "power2.out" })
        gsap.to(icon, { 
          background: "linear-gradient(135deg, #dbeafe, #e9d5ff)", 
          duration: 0.3 
        })
        gsap.to(title, { color: "#2563eb", duration: 0.3 })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" })
        gsap.to(icon, { 
          background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)", 
          duration: 0.3 
        })
        gsap.to(title, { color: "#111827", duration: 0.3 })
      })
    })

    // Add hover animations for testimonial cards
    testimonialCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -10, scale: 1.02, duration: 0.3, ease: "power2.out" })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" })
      })
    })

    // Add hover animation for CTA button
    const ctaButton = sectionRef.current.querySelector('.cta-button')
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, { 
          scale: 1.05, 
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", 
          duration: 0.3, 
          ease: "power2.out" 
        })
      })

      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, { 
          scale: 1, 
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", 
          duration: 0.3, 
          ease: "power2.out" 
        })
      })

      ctaButton.addEventListener('mousedown', () => {
        gsap.to(ctaButton, { scale: 0.95, duration: 0.1 })
      })

      ctaButton.addEventListener('mouseup', () => {
        gsap.to(ctaButton, { scale: 1.05, duration: 0.1 })
      })
    }

  }, [])

  return (
    <section id="clients" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="main-title text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clients</span>
          </h2>
          <div className="title-underline h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="subtitle mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across India for delivering exceptional event experiences.
          </p>
        </div>

        {/* Client Logos Slider */}
        <div className="mb-20">
          <div className="overflow-hidden relative">
            <div 
              ref={logoContainerRef}
              className="flex space-x-8"
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="logo-card flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 min-w-[280px] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="text-center">
                    <div className="logo-icon w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600">
                        {client.name.charAt(0)}
                      </div>
                    </div>
                    <h3 className="logo-title font-semibold text-gray-900 text-sm mb-2 transition-colors duration-300">
                      {client.name}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {client.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-section">
          <h3 className="testimonial-section-title text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative cursor-pointer"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="cta-section mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Join Our Growing Family of Clients</h3>
            <p className="text-xl mb-8 opacity-90">
              Experience the CROWDpullers difference and become part of our success story.
            </p>
            <button className="cta-button bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
