import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from './ScrollIndicator'

gsap.registerPlugin(ScrollTrigger)

const Clients = () => {
  const sectionRef = useRef(null)
  const logoContainerRef = useRef(null)

  const clients = [
    { name: "Austrade", logo: "/clients/austrade.png", category: "Government" },
    { name: "BCOC", logo: "/clients/BCOC.png", category: "Chamber" },
    { name: "Biswa Bangla", logo: "/clients/Biswa-Bangla.png", category: "Government" },
    { name: "CINI", logo: "/clients/CINI.png", category: "NGO" },
    { name: "Goodyear", logo: "/clients/goodyear.png", category: "Corporate" },
    { name: "HIDCO", logo: "/clients/HIDCO.png", category: "Government" },
    { name: "Indian Air Force", logo: "/clients/Indian-Air-Force.png", category: "Defense" },
    { name: "ISKCON", logo: "/clients/iskcon.png", category: "Religious" },
    { name: "ITC Limited", logo: "/clients/itc-limited.png", category: "Corporate" },
    { name: "Kolkata Police", logo: "/clients/kolkata-police.png", category: "Government" },
    { name: "Micro Labs", logo: "/clients/Micro-Labs.png", category: "Healthcare" },
    { name: "NCSM", logo: "/clients/NCSM.png", category: "Education" },
    { name: "NIT Durgapur", logo: "/clients/NIT-durgapur.png", category: "Education" },
    { name: "Queensland Government", logo: "/clients/queensland-government.png", category: "Government" },
    { name: "RCGC", logo: "/clients/RCGC.png", category: "Club" },
    { name: "REC", logo: "/clients/REC.png", category: "Corporate" },
    { name: "SE Railway", logo: "/clients/se-railway.png", category: "Government" },
    { name: "SREI", logo: "/clients/srei.png", category: "Financial" },
    { name: "Tata Motors", logo: "/clients/Tata-Motors.png", category: "Automotive" },
    { name: "TMGMSOI", logo: "/clients/TMGMSOI.png", category: "Institute" },
    { name: "WBMDFC", logo: "/clients/WBMDFC.png", category: "Financial" }
  ]

  const testimonials = [
    {
      name: "Austrade",
      quote: "CROWDpullers delivered exceptional event management for our international trade exhibitions. Their attention to detail and professional approach exceeded our expectations.",
      designation: "Trade Commissioner",
      logo: "/clients/austrade.png"
    },
    {
      name: "ITC Limited",
      quote: "Outstanding service delivery across multiple corporate events. Their creativity and execution capabilities are truly world-class.",
      designation: "Corporate Events Manager",
      logo: "/clients/itc-limited.png"
    },
    {
      name: "Tata Motors",
      quote: "From product launches to dealer conferences, CROWDpullers consistently brings innovation and excellence to every project we collaborate on.",
      designation: "Brand Experience Lead",
      logo: "/clients/Tata-Motors.png"
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
    const statItems = sectionRef.current.querySelectorAll('.stat-item')

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
    const logoWidth = 266 // Width of each logo card (260px + 6px gap)
    const totalWidth = logoWidth * (logos.length / 2) // Only half since we duplicate

    gsap.set(logoContainerRef.current, { width: totalWidth * 2 })

    gsap.to(logoContainerRef.current, {
      x: -totalWidth,
      duration: 40, // Slower for better readability
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
      const logoContainer = card.querySelector('.logo-container')
      const title = card.querySelector('.logo-title')

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          scale: 1.05, 
          y: -8, 
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          duration: 0.4, 
          ease: "power2.out" 
        })
        gsap.to(logoContainer, { 
          scale: 1.1,
          rotate: 3,
          duration: 0.4 
        })
        gsap.to(title, { color: "#2563eb", duration: 0.3 })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          scale: 1, 
          y: 0, 
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          duration: 0.4, 
          ease: "power2.out" 
        })
        gsap.to(logoContainer, { 
          scale: 1,
          rotate: 0,
          duration: 0.4 
        })
        gsap.to(title, { color: "#374151", duration: 0.3 })
      })
    })

    // Stats section animation
    gsap.fromTo(statItems,
      { y: 30, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statItems[0],
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    // Add hover animations for testimonial cards
    testimonialCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -10, scale: 1.02, duration: 0.3, ease: "power2.out" })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" })
      })
    })

    // Add hover animations for stat items
    statItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { 
          y: -5, 
          scale: 1.05, 
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3, 
          ease: "power2.out" 
        })
      })

      item.addEventListener('mouseleave', () => {
        gsap.to(item, { 
          y: 0, 
          scale: 1, 
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          duration: 0.3, 
          ease: "power2.out" 
        })
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
    <section id="clients" ref={sectionRef} className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="flex space-x-6"
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="logo-card flex-shrink-0 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 min-w-[260px] max-w-[260px] hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                >
                  <div className="text-center">
                    <div className="logo-container relative w-20 h-20 mx-auto mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="w-full h-full object-contain filter transition-all duration-500 group-hover:brightness-110"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl items-center justify-center">
                        <span className="text-2xl font-bold text-blue-600">
                          {client.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <h3 className="logo-title font-bold text-gray-800 text-sm mb-3 transition-colors duration-300 group-hover:text-blue-600">
                      {client.name}
                    </h3>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 text-xs rounded-full font-medium transition-all duration-300 group-hover:from-blue-100 group-hover:to-purple-100 group-hover:text-blue-700">
                      {client.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gradient overlays for seamless scroll effect */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="stat-item bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm font-medium">Trusted Clients</div>
            </div>
            <div className="stat-item bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm font-medium">Events Delivered</div>
            </div>
            <div className="stat-item bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm font-medium">Years Experience</div>
            </div>
            <div className="stat-item bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-section">
          <div className="text-center mb-16">
            <h3 className="testimonial-section-title text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clients Say</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative cursor-pointer transform transition-all duration-500 hover:scale-105"
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-gray-700 italic mb-8 leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center p-1">
                      <img 
                        src={testimonial.logo} 
                        alt={testimonial.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-50 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-50 to-transparent rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        {/* <div className="cta-section mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Join Our Growing Family of Clients</h3>
            <p className="text-xl mb-8 opacity-90">
              Experience the CROWDpullers difference and become part of our success story.
            </p>
            <button className="cta-button bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div> */}
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator 
        targetSection="contact" 
        borderColor="border-gray-400/60" 
        hoverColor="hover:border-blue-600"
        dotColor="bg-gray-600/80"
        hoverDotColor="group-hover:bg-blue-600"
      />
    </section>
  )
}

export default Clients
