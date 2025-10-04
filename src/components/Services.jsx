import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  const services = [
    {
      title: "Corporate Events",
      description: "Professional corporate parties, product launches, marketing and public relations events.",
      icon: "🏢",
      features: ["Product Launches", "Corporate Parties", "Marketing Events", "Public Relations"]
    },
    {
      title: "Exhibitions & Conferences",
      description: "Complete exhibition management and conference organization with innovative concepts.",
      icon: "🎪",
      features: ["Trade Shows", "Business Conferences", "Industry Exhibitions", "Networking Events"]
    },
    {
      title: "Cultural Events",
      description: "Traditional and modern cultural celebrations, festivals, and entertainment shows.",
      icon: "🎭",
      features: ["Music Concerts", "Cultural Festivals", "Traditional Celebrations", "Entertainment Shows"]
    },
    {
      title: "Government Events",
      description: "Official government functions, ceremonies, and public events management.",
      icon: "🏛️",
      features: ["Official Ceremonies", "Public Functions", "Government Meetings", "State Events"]
    },
    {
      title: "Sports Events",
      description: "Comprehensive sports event management from tournaments to award ceremonies.",
      icon: "🏆",
      features: ["Tournaments", "Award Ceremonies", "Sports Festivals", "Athletic Competitions"]
    },
    {
      title: "Educational Events",
      description: "Academic conferences, seminars, workshops, and institutional celebrations.",
      icon: "🎓",
      features: ["Academic Conferences", "Workshops", "Seminars", "Convocations"]
    }
  ]

  useEffect(() => {
    const title = titleRef.current
    const cards = cardsRef.current

    // Title animation
    gsap.fromTo(title,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    // Cards animation
    gsap.fromTo(cards.children,
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cards,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    )
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From intimate gatherings to large-scale events, we conceptualize and execute a variety of themes with professional expertise.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-200 hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-slate-600 text-center mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-blue-600 text-white p-12 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Plan Your Next Event?</h3>
            <p className="text-xl mb-8">
              Let us turn your vision into an unforgettable experience with our professional event management services.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-1">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
