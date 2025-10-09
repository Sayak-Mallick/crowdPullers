import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from './ScrollIndicator'

gsap.registerPlugin(ScrollTrigger)

const Celebscape = () => {
  const sectionRef = useRef(null)
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // CROWDpullers Event Gallery - Real Events Portfolio
  const eventGallery = [
    // 2025 Events
    {
      id: 1,
      title: "Bharat Chamber of Commerce Independence Day",
      year: "2025",
      category: "institutional",
      image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=600&h=400&fit=crop",
      description: "Independence Day celebration organized at BCC office on 15.08.2025",
      venue: "BCC Office"
    },
    {
      id: 2,
      title: "Chief Minister Inauguration - Crescent Expo",
      year: "2025",
      category: "government",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop",
      description: "Stores and fabrication setup at Shilpanna, Alipore for Chief Minister's inauguration",
      venue: "Shilpanna, Alipore"
    },
    {
      id: 3,
      title: "26th Installation - Rotary Club Calcutta Chowrenghee",
      year: "2025",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      description: "26th Installation ceremony for Rotary Club at The Park, Kolkata",
      venue: "The Park, Kolkata"
    },
    {
      id: 4,
      title: "Look East AgTech Summit 2025",
      year: "2025",
      category: "exhibition",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      description: "Exhibition cum Conference as Event Partner for Bengal Chamber of Commerce",
      venue: "Biswa Bangla Convention Centre, Newtown"
    },
    {
      id: 5,
      title: "3 Day Agro F&B Expo and Conference",
      year: "2025",
      category: "exhibition",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      description: "Exposition Partner for Bharat Chamber of Commerce at Netaji Indoor Stadium",
      venue: "Netaji Indoor Stadium"
    },
    {
      id: 6,
      title: "47th Convocation - Sarbabharatiya Sangeet O Sanskriti Parishad",
      year: "2025",
      category: "educational",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop",
      description: "Convocation ceremony organized at Netaji Indoor Stadium",
      venue: "Netaji Indoor Stadium"
    },
    {
      id: 7,
      title: "Indian Leather Products Association Exhibition",
      year: "2025",
      category: "exhibition",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "Event Manager for ILPA Exhibitions & Conferences at Bantala Leather Complex",
      venue: "Bantala Leather Complex"
    },

    // 2024 Events
    {
      id: 8,
      title: "Mining Institute Press Conference",
      year: "2024",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
      description: "Press Conference-cum-Industry meet for MGMI at Taj Taalkutir",
      venue: "Taj Taalkutir"
    },
    {
      id: 9,
      title: "AGC Bose College Diamond Jubilee Fun Fiesta",
      year: "2024",
      category: "educational",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
      description: "Diamond Jubilee celebration with Salman Ali performance at Netaji Indoor Stadium",
      venue: "Netaji Indoor Stadium"
    },
    {
      id: 10,
      title: "Cloud-DNA for Logarhythm Consultancy",
      year: "2024",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      description: "Corporate event organized at Rajkutir, Swabhumi",
      venue: "Rajkutir, Swabhumi"
    },
    {
      id: 11,
      title: "St.Mary's Convent School Golden Jubilee",
      year: "2024",
      category: "educational",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      description: "Golden Jubilee Celebration at Dumurjola Indoor Stadium, Howrah",
      venue: "Dumurjola Indoor Stadium, Howrah"
    },
    {
      id: 12,
      title: "Festa Italiana 2024",
      year: "2024",
      category: "cultural",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
      description: "Multiple stall fabrications for Italian companies at Italian Consulate grounds",
      venue: "Italian Consulate grounds, Alipore"
    },
    {
      id: 13,
      title: "IMME 2024 - Australian Pavilion",
      year: "2024",
      category: "exhibition",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      description: "Event Manager for Austrade and multiple Australian companies at IMME",
      venue: "Science City, Kolkata"
    },
    {
      id: 14,
      title: "RCM Zonal Celebration 2024",
      year: "2024",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      description: "RCM Zonal Celebration at Biswa Bangla Exhibition Centre",
      venue: "Biswa Bangla Exhibition Centre"
    },
    {
      id: 15,
      title: "VISION ZEROOO - Safety Summit",
      year: "2024",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop",
      description: "International safety summit for Bharat Chamber of Commerce",
      venue: "Oberoi Grand"
    },

    // 2023 Events
    {
      id: 16,
      title: "Bengal Meditates by Sri Sri Ravishankar",
      year: "2023",
      category: "spiritual",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      description: "Meditation event organized by Art of Living Foundation at Gitanjali Stadium",
      venue: "Gitanjali Stadium"
    },
    {
      id: 17,
      title: "10th Asian Mining Congress 2023",
      year: "2023",
      category: "exhibition",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      description: "Mining congress organized for MGMI at Taj Taal Kutir, New Town",
      venue: "Taj Taal Kutir, New Town"
    },
    {
      id: 18,
      title: "International Toy Exhibition 2023",
      year: "2023",
      category: "exhibition",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      description: "Toy exhibition organized at Netaji Indoor Stadium",
      venue: "Netaji Indoor Stadium"
    },
    {
      id: 19,
      title: "Kolkata Police New Year Celebration",
      year: "2023",
      category: "institutional",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&h=400&fit=crop",
      description: "New Year celebration for Kolkata Police Sergeant's Institute",
      venue: "The Kolkata Maidan Tent"
    },

    // 2022 Events
    {
      id: 20,
      title: "Kolkata Toy Exhibition 2022",
      year: "2022",
      category: "exhibition",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      description: "First-ever Kolkata Toy Exhibition in collaboration with Bharat Chamber",
      venue: "Netaji Indoor Stadium"
    },
    {
      id: 21,
      title: "Sandhya Majlish by WBHIDCO",
      year: "2022",
      category: "cultural",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "Weekly cultural events held at Rajarhat for WBHIDCO",
      venue: "Rajarhat"
    },
    {
      id: 22,
      title: "Vestige India Recognition Programme",
      year: "2022",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      description: "Annual Award Recognition programme at Netaji Indoor Stadium",
      venue: "Netaji Indoor Stadium"
    },
    {
      id: 23,
      title: "Pujawaalader Gaan featuring Sonu Nigam",
      year: "2022",
      category: "concert",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "Musical evening featuring Sonu Nigam at Netaji Indoor Stadium",
      venue: "Netaji Indoor Stadium"
    },

    // 2020 Events
    {
      id: 24,
      title: "Arijit Singh Live at Eco Park",
      year: "2020",
      category: "concert",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "Live concert by Arijit Singh organized for Garia Mitali Sangha",
      venue: "Eco Park grounds"
    },
    {
      id: 25,
      title: "Bridge & Roof Co. Centenary Celebration",
      year: "2020",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      description: "Centenary celebration with Hon'ble Minister Shri Arjun Ram Meghwal",
      venue: "Netaji Indoor Stadium"
    },
    {
      id: 26,
      title: "Fun Fiesta 2020 with Darshan Rawal",
      year: "2020",
      category: "concert",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "Annual social event featuring Darshan Rawal performance",
      venue: "Netaji Indoor Stadium"
    },

    // 2018-2019 Events
    {
      id: 27,
      title: "Fanaah 2018 - Sonu Nigam & Sunidhi Chauhan",
      year: "2018",
      category: "concert",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "Live concert featuring Sonu Nigam and Sunidhi Chauhan",
      venue: "Netaji Indoor Stadium"
    },
    {
      id: 28,
      title: "Lakshya 5 - Shreya Ghoshal Nite",
      year: "2018",
      category: "concert",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "Musical evening with Shreya Ghoshal for Surendranath Group of Colleges",
      venue: "Netaji Indoor Stadium"
    },
    {
      id: 29,
      title: "Uttarpara Sangeet Chakra Classical Conference",
      year: "2018",
      category: "cultural",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "63rd Annual Classical Programme at Uttarpara",
      venue: "Jaikrishna Library grounds, Uttarpara"
    },

    // 2015-2016 Events
    {
      id: 30,
      title: "ISKCON Golden Jubilee 2015",
      year: "2015",
      category: "spiritual",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      description: "Golden Jubilee celebration with Guinness World Record event",
      venue: "Netaji Indoor Stadium"
    },
    {
      id: 31,
      title: "World Robot Olympiad 2016",
      year: "2016",
      category: "technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      description: "National level robotics competition organized by NCSM",
      venue: "Netaji Indoor Stadium"
    },
    {
      id: 32,
      title: "Bharat Chamber New Building Inauguration",
      year: "2016",
      category: "institutional",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop",
      description: "Inauguration by Hon'ble President of India on 23.08.2016",
      venue: "Bharat Chamber of Commerce"
    }
  ]

  const years = ['all', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015']
  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'concert', label: 'Musical Concerts' },
    { value: 'corporate', label: 'Corporate Events' },
    { value: 'exhibition', label: 'Exhibitions & Conferences' },
    { value: 'educational', label: 'Educational Institutions' },
    { value: 'cultural', label: 'Cultural Programs' },
    { value: 'institutional', label: 'Government & Institutional' },
    { value: 'spiritual', label: 'Spiritual & Religious' },
    { value: 'technology', label: 'Technology Events' },
    { value: 'government', label: 'Government Events' }
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
    <section id="celebscape" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-50/30 to-orange-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold rounded-full mb-4">
              Event Portfolio
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            CELEB<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">SCAPE</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover our comprehensive portfolio of successfully executed events spanning over a decade - 
            from government inaugurations and corporate galas to cultural celebrations and international exhibitions.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200/50">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-6">
              {/* Year Filter */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-gray-700 font-semibold mr-3 text-sm uppercase tracking-wide">Year:</span>
                {years.map(year => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-5 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium ${
                      selectedYear === year
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 hover:shadow-md'
                    }`}
                  >
                    {year === 'all' ? 'All Years' : year}
                  </button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-semibold mr-3 text-sm uppercase tracking-wide">Type:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-300 font-medium text-sm"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value} className="bg-white text-gray-700">
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Counter */}
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                <span className="text-gray-600 text-sm font-medium">
                  Showing <span className="font-bold text-indigo-600">{filteredEvents.length}</span> event{filteredEvents.length !== 1 ? 's' : ''}
                  {selectedYear !== 'all' && <span> from <span className="font-bold text-indigo-600">{selectedYear}</span></span>}
                  {selectedCategory !== 'all' && <span> in <span className="font-bold text-indigo-600">{categories.find(c => c.value === selectedCategory)?.label}</span></span>}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="gallery-item group relative bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl overflow-hidden hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm leading-relaxed font-medium">
                      {event.description}
                    </p>
                  </div>
                </div>
                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {event.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-gray-900 font-bold text-lg mb-3 group-hover:text-indigo-700 transition-colors line-clamp-2 leading-tight">
                  {event.title}
                </h3>
                {event.venue && (
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span className="mr-2">📍</span>
                    <span className="font-medium">{event.venue}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-xs font-semibold rounded-full">
                    {categories.find(c => c.value === event.category)?.label || event.category}
                  </span>
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-2xl text-gray-900 font-bold mb-3">No Events Found</h3>
            <p className="text-gray-600 font-medium">Try adjusting your filters to see more events.</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">Events Executed</div>
          </div>
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">100+</div>
            <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">Prestigious Clients</div>
          </div>
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
            <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">Celebrity Events</div>
          </div>
        </div>

        {/* Featured Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Notable <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Achievements</span>
            </h3>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">Discover some of our most prestigious and memorable events that showcase our expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏛️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Presidential Inauguration</h4>
              <p className="text-gray-600 leading-relaxed">Organized inauguration of Bharat Chamber's new building by Hon'ble President of India</p>
            </div>
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🎤</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Celebrity Concerts</h4>
              <p className="text-gray-600 leading-relaxed">Hosted live performances by Arijit Singh, Sonu Nigam, Shreya Ghoshal, and Sunidhi Chauhan</p>
            </div>
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌏</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">International Events</h4>
              <p className="text-gray-600 leading-relaxed">Managed multiple international exhibitions and trade missions including Austrade pavilions</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator 
        targetSection="clients" 
        borderColor="border-gray-400/60" 
        hoverColor="hover:border-blue-600"
        dotColor="bg-gray-600/80"
        hoverDotColor="group-hover:bg-blue-600"
      />
    </section>
  )
}

export default Celebscape
