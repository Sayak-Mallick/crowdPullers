import { useRevealAnimation, useStaggerAnimation } from '../hooks/useScrollAnimations'
import ScrollIndicator from './ScrollIndicator'

const Services = () => {
  const titleRef = useRevealAnimation({ direction: 'up', distance: 50, duration: 1 })
  const cardsRef = useStaggerAnimation({ stagger: 0.15, direction: 'up', distance: 40, duration: 0.8 })

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



  return (
    <section id="services" className="relative py-24 bg-white animate-reveal">
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
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator 
        targetSection="events" 
        borderColor="border-gray-400/60" 
        hoverColor="hover:border-blue-600"
        dotColor="bg-gray-600/80"
        hoverDotColor="group-hover:bg-blue-600"
      />
    </section>
  )
}

export default Services
