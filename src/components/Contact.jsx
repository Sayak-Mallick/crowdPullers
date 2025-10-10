import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const titleRef = useRef(null)
  const infoRef = useRef(null)
  const submitButtonRef = useRef(null)
  const logoRef = useRef(null)

  const contactInfo = [
    {
      title: "Head Office",
      address: "23, Nabin Kundu Lane, College Street",
      city: "Kolkata - 700 009, India",
      icon: "🏢"
    },
    {
      title: "Branch Office",
      address: "19, Ashutosh Shastri Road, Beleghata",
      city: "Kolkata - 700 010, India",
      icon: "🏪"
    }
  ]

  const partners = [
    { name: "Miss Prantika Mazumder", phone: "983029938", role: "Partner" },
    { name: "Mr. Jayanta Saha", phone: "9875586039 / 9051342284", role: "Partner" },
    { name: "Mr. Swarup Chakraborty", phone: "98303 36402", role: "Partner" },
    { name: "Mr. Supratim Roy", phone: "98303 33821", role: "Partner" },
  ]

  useEffect(() => {
    const title = titleRef.current
    const info = infoRef.current
    const form = formRef.current
    const submitButton = submitButtonRef.current
    const logo = logoRef.current

    // Enhanced title animation with dynamic effects
    const titleElements = title.children
    gsap.fromTo(titleElements[0], // h2 element
      { y: 60, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    gsap.fromTo(titleElements[1], // divider line
      { width: 0, opacity: 0 },
      {
        width: "6rem",
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    gsap.fromTo(titleElements[2], // paragraph
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    // Enhanced form elements animation with different entry directions
    const formElements = form.querySelectorAll('.form-element')
    formElements.forEach((element, index) => {
      const isEven = index % 2 === 0
      gsap.fromTo(element,
        { 
          x: isEven ? -50 : 50, 
          y: 30,
          opacity: 0,
          scale: 0.95,
          rotation: isEven ? -2 : 2
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          }
        }
      )
    })

    // Submit button floating animation
    if (submitButton) {
      gsap.fromTo(submitButton,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: formElements.length * 0.1 + 0.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      )

      // Continuous subtle floating animation
      gsap.to(submitButton, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      })
    }

    // Enhanced info cards animation with staggered 3D effects
    const infoCards = info.querySelectorAll('div > div')
    gsap.fromTo(infoCards,
      { 
        y: 60, 
        opacity: 0, 
        rotationX: 45,
        transformPerspective: 1000,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: info,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )

    // Logo floating animation
    if (logo) {
      gsap.fromTo(logo,
        { y: 30, opacity: 0, scale: 0.8, rotation: -10 },
        {
          y: 0,
          opacity: 0.8,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: logo,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      )

      // Continuous gentle rotation
      gsap.to(logo, {
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      })
    }

    // Interactive hover animations for form inputs
    const inputs = form.querySelectorAll('input, select, textarea')
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      input.addEventListener('blur', () => {
        gsap.to(input, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    // Handle the event_type field mapping to eventType in state
    const fieldName = name === 'event_type' ? 'eventType' : name
    setFormData({
      ...formData,
      [fieldName]: value
    })
  }

  const handleSubmit = () => {
    // Don't prevent default - let FormSubmit handle the submission
    setIsSubmitting(true)
    
    // Button press animation
    if (submitButtonRef.current) {
      gsap.to(submitButtonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      })
    }
    
    // Success animation will be handled by FormSubmit redirect
    if (submitButtonRef.current) {
      gsap.to(submitButtonRef.current, {
        backgroundColor: "#10B981",
        duration: 0.5,
        ease: "power2.out"
      })
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to create an unforgettable event? Let's discuss your vision and make it a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            ref={formRef}
            className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
            
            <form 
              action="https://formsubmit.co/crowdpullers.kol@gmail.com" 
              method="POST" 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* Hidden fields for FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission from CrowdPullers Website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${window.location.origin}/thank-you.html`} />
              
              <div className="form-element">
                <label className="block text-slate-300 mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-element">
                <label className="block text-slate-300 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-element">
                <label className="block text-slate-300 mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-element">
                <label className="block text-slate-300 mb-2 font-medium">Event Type</label>
                <select
                  name="event_type"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                >
                  <option value="">Select event type</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Conference">Conference</option>
                  <option value="Exhibition">Exhibition</option>
                  <option value="Cultural Event">Cultural Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-element">
                <label className="block text-slate-300 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your event requirements..."
                />
              </div>

              <button
                ref={submitButtonRef}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-8">
            {/* Office Locations */}
            {/* Office Locations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-white">Our Offices</h3>
              {contactInfo.map((office, index) => (
                <div
                  key={index}
                  className="office-card bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      rotationY: 10,
                      rotationX: 5,
                      transformPerspective: 1000,
                      duration: 0.3,
                      ease: "power2.out"
                    })
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      rotationY: 0,
                      rotationX: 0,
                      duration: 0.3,
                      ease: "power2.out"
                    })
                  }}
                >
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{office.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{office.title}</h4>
                      <p className="text-gray-300 text-sm">{office.address}</p>
                      <p className="text-gray-300 text-sm">{office.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Partners */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Our Partners</h3>
              <div className="space-y-4">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="partner-card bg-blue-600/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:-translate-y-1 hover:bg-blue-600/30 hover:border-blue-400/30 transition-all duration-300 cursor-pointer"
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1.02,
                        rotationZ: 1,
                        duration: 0.3,
                        ease: "back.out(1.7)"
                      })
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1,
                        rotationZ: 0,
                        duration: 0.3,
                        ease: "power2.out"
                      })
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-white">{partner.name}</h4>
                        <p className="text-slate-300 text-sm">{partner.role}</p>
                      </div>
                      <a 
                        href={`tel:${partner.phone}`}
                        className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-300"
                      >
                        {partner.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Website */}
            {/* <div 
              className="website-card bg-blue-600 p-6 rounded-xl text-center hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  rotationY: -5,
                  transformPerspective: 1000,
                  duration: 0.4,
                  ease: "back.out(1.7)"
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  rotationY: 0,
                  duration: 0.4,
                  ease: "power2.out"
                })
              }}
            >
              <h4 className="text-lg font-semibold mb-2">Visit Our Website</h4>
              <a 
                href="http://www.crowdpullersevent.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-slate-200 transition-colors duration-300"
              >
                www.crowdpullersevent.com
              </a>
            </div> */}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700 text-center">
          <div className="mb-6">
            <img 
              ref={logoRef}
              src="/crowdPullers.png" 
              alt="CrowdPullers Logo" 
              className="h-16 w-auto mx-auto mb-4 opacity-80"
            />
          </div>
          <p className="text-slate-400 mb-4">
           © {new Date().getFullYear()} CROWDpullers. All rights reserved. | ISO 9001:2015 Certified Company
          </p>
          <p className="text-slate-500 text-sm">
            Efficient • Fast • Personalised
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
