import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Celebscape = () => {
  const sectionRef = useRef(null)
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Sample event gallery data - replace with actual images
  const eventGallery = [
    {
      id: 1,
      title: "Bollywood Celebrity Concert",
      year: "2024",
      category: "concert",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
      description: "Star-studded musical evening with top Bollywood celebrities"
    },
    {
      id: 2,
      title: "Corporate Gala with Film Stars",
      year: "2024",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      description: "Exclusive corporate event featuring renowned film personalities"
    },
    {
      id: 3,
      title: "Celebrity Wedding Extravaganza",
      year: "2023",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      description: "Luxury celebrity wedding celebration"
    },
    {
      id: 4,
      title: "Sports Celebrity Award Night",
      year: "2023",
      category: "awards",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      description: "Honoring sports personalities at grand award ceremony"
    },
    {
      id: 5,
      title: "Music Festival with International Artists",
      year: "2023",
      category: "concert",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "Multi-day music festival featuring global superstars"
    },
    {
      id: 6,
      title: "Celebrity Product Launch",
      year: "2022",
      category: "launch",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop",
      description: "High-profile product launch with celebrity endorsements"
    },
    {
      id: 7,
      title: "Television Awards Ceremony",
      year: "2022",
      category: "awards",
      image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&h=400&fit=crop",
      description: "Annual television industry awards night"
    },
    {
      id: 8,
      title: "Celebrity Fashion Show",
      year: "2022",
      category: "fashion",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop",
      description: "Glamorous fashion show with celebrity showstoppers"
    },
    {
      id: 9,
      title: "Charity Gala with Stars",
      year: "2021",
      category: "charity",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      description: "Celebrity charity fundraising event"
    },
    {
      id: 10,
      title: "Film Premiere Red Carpet",
      year: "2021",
      category: "premiere",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
      description: "Grand film premiere with celebrity appearances"
    },
    {
      id: 11,
      title: "Celebrity Cricket Match",
      year: "2021",
      category: "sports",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop",
      description: "Celebrity cricket tournament for charity"
    },
    {
      id: 12,
      title: "New Year Celebrity Bash",
      year: "2020",
      category: "party",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop",
      description: "Exclusive New Year celebration with top celebrities"
    }
  ]

  const years = ['all', '2024', '2023', '2022', '2021', '2020']
  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'concert', label: 'Concerts' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'wedding', label: 'Weddings' },
    { value: 'awards', label: 'Awards' },
    { value: 'launch', label: 'Launches' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'charity', label: 'Charity' },
    { value: 'premiere', label: 'Premieres' },
    { value: 'sports', label: 'Sports' },
    { value: 'party', label: 'Parties' }
  ]

  // Filter events based on selected year and category
  const filteredEvents = eventGallery.filter(event => {
    const yearMatch = selectedYear === 'all' || event.year === selectedYear
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory
    return yearMatch && categoryMatch
  })

  useEffect(() => {
    const galleryItems = sectionRef.current.querySelectorAll('.gallery-item')
    
    // Animate gallery items
    gsap.fromTo(galleryItems,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    )
  }, [filteredEvents])

  return (
    <section id="celebscape" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl">📸</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            CELEB<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">SCAPE</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our spectacular journey through years of celebrity events, star-studded occasions, 
            and unforgettable moments captured in time.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-8">
            {/* Year Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white font-semibold mr-2">Year:</span>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {year === 'all' ? 'All Years' : year}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white font-semibold mr-2">Type:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 focus:border-yellow-400 focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value} className="bg-gray-800 text-white">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Counter */}
          <div className="text-center">
            <span className="text-gray-400">
              Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
              {selectedYear !== 'all' && ` from ${selectedYear}`}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.value === selectedCategory)?.label}`}
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="gallery-item group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
                {/* Year Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {event.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm capitalize">
                    {categories.find(c => c.value === event.category)?.label || event.category}
                  </span>
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl text-white font-bold mb-2">No Events Found</h3>
            <p className="text-gray-400">Try adjusting your filters to see more events.</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{eventGallery.length}+</div>
            <div className="text-gray-300">Events Captured</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
            <div className="text-gray-300">Years Archive</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">{categories.length - 1}</div>
            <div className="text-gray-300">Event Categories</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
            <div className="text-gray-300">Memories Created</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold py-4 px-8 rounded-full text-lg hover:from-yellow-300 hover:to-pink-400 transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-2xl">
            View More Events
          </button>
        </div>
      </div>
    </section>
  )
}

export default Celebscape
