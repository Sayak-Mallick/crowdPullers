import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './EventGallery.css'

gsap.registerPlugin(ScrollTrigger)

const EventGallery = () => {
  const sectionRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 4

  // Comprehensive events data from the document
  const eventsData = [
    // 2025 Events
    {
      id: 1,
      title: "Bharat Chamber of Commerce Independence Day",
      date: "15.08.2025",
      location: "BCC Office",
      category: "Corporate",
      description: "Independence Day celebration organized for Bharat Chamber of Commerce",
      image: "/clients/BCOC.png",
      year: "2025"
    },
    {
      id: 2,
      title: "Shilpanna Store Setup & Fabrication",
      date: "10.07.2025",
      location: "Shilpanna, Alipore",
      category: "Exhibition",
      description: "Store setup and fabrication for Crescent Expo Syndicate and Rohan Gloves Manufacturing for Chief Minister inauguration",
      image: "/crowdPullers.png",
      year: "2025"
    },
    {
      id: 3,
      title: "26th Installation - Rotary Club of Calcutta Chowrenghee",
      date: "12.07.2025",
      location: "The Park, Kolkata",
      category: "Social",
      description: "Installation ceremony for Rotary Club of Calcutta Chowrenghee",
      image: "/crowdPullers.png",
      year: "2025"
    },
    {
      id: 4,
      title: "Look East AgTech Summit 2025",
      date: "14.05.2025",
      location: "Biswa Bangla Convention Centre, Newtown",
      category: "Conference",
      description: "Exhibition cum Conference as Event Partner for Bengal Chamber of Commerce & Industries",
      image: "/clients/Biswa-Bangla.png",
      year: "2025"
    },
    {
      id: 5,
      title: "3 Day Agro F&B Expo and Conference",
      date: "13-15.06.2025",
      location: "Netaji Indoor Stadium",
      category: "Exhibition",
      description: "Exposition Partner for Bharat Chamber of Commerce Agro F&B Expo",
      image: "/clients/BCOC.png",
      year: "2025"
    },
    {
      id: 6,
      title: "47th Convocation 2025",
      date: "29.03.2025",
      location: "Netaji Indoor Stadium",
      category: "Academic",
      description: "Convocation ceremony for Sarbabharatiya Sangeet O Sanskriti Parishad",
      image: "/crowdPullers.png",
      year: "2025"
    },
    {
      id: 7,
      title: "Indian Leather Products Association Exhibition",
      date: "7-8.03.2025",
      location: "Bantala Leather Complex",
      category: "Exhibition",
      description: "Event Manager for ILPA Exhibitions & Conferences",
      image: "/crowdPullers.png",
      year: "2025"
    },
    {
      id: 8,
      title: "Austmine Workshop",
      date: "04.03.2025",
      location: "Novotel",
      category: "Corporate",
      description: "Event and workshop organized for Austmine, NSW, Australia",
      image: "/clients/austrade.png",
      year: "2025"
    },
    {
      id: 9,
      title: "Diamond Jubilee Fun Fiesta",
      date: "14.01.2025",
      location: "Netaji Indoor Stadium",
      category: "Cultural",
      description: "AGC Bose College of Commerce (formerly Bangabashi College) Diamond Jubilee celebration",
      image: "/crowdPullers.png",
      year: "2025"
    },
    // 2024 Events
    {
      id: 10,
      title: "Cloud-DNA Event",
      date: "29.11.2024",
      location: "Rajkutir, Swabhumi",
      category: "Technology",
      description: "Cloud-DNA event organized for Logarhythm Consultancy Pvt. Ltd.",
      image: "/crowdPullers.png",
      year: "2024"
    },
    {
      id: 11,
      title: "Golden Jubilee - St.Mary's Convent School",
      date: "22.11.2024",
      location: "Dumurjola Indoor Stadium, Howrah",
      category: "Academic",
      description: "Golden Jubilee Celebration of St.Mary's Convent School, Howrah",
      image: "/crowdPullers.png",
      year: "2024"
    },
    {
      id: 12,
      title: "Indo Italian Chamber of Commerce Stall",
      date: "21.11.2024",
      location: "Italian Consulate grounds, Alipore",
      category: "International",
      description: "Event Manager for IICCI stall at Italian Consulate",
      image: "/crowdPullers.png",
      year: "2024"
    },
    {
      id: 13,
      title: "Australian Trade Commission - IMME 2024",
      date: "22-26.10.2024",
      location: "Science City, Kolkata",
      category: "International",
      description: "Event Manager for Austrade stall and multiple Australian companies at IMME 2024",
      image: "/clients/austrade.png",
      year: "2024"
    },
    {
      id: 14,
      title: "HUMANXAI Event",
      date: "06.09.2024",
      location: "Peerless Inn",
      category: "Technology",
      description: "HUMANXAI event organized for Philanthropic Technical Association",
      image: "/crowdPullers.png",
      year: "2024"
    },
    {
      id: 15,
      title: "VISION ZEROOO - Safety Summit",
      date: "31.07-01.08.2024",
      location: "Oberoi Grand",
      category: "Corporate",
      description: "Safety, Health & Wellbeing summit for India & Malaysia by Bharat Chamber of Commerce",
      image: "/clients/BCOC.png",
      year: "2024"
    },
    {
      id: 16,
      title: "25th Installation - Rotary Club",
      date: "16.07.2024",
      location: "The Park",
      category: "Social",
      description: "25th Installation Meeting for Rotary Club of Calcutta Chowrenghee",
      image: "/crowdPullers.png",
      year: "2024"
    },
    {
      id: 17,
      title: "14th National Manufacturing Conclave",
      date: "16.03.2024",
      location: "Taj Vivanta",
      category: "Corporate",
      description: "Manufacturing and MSME Excellence Award ceremony for Bengal Chamber of Commerce",
      image: "/clients/Biswa-Bangla.png",
      year: "2024"
    },
    // 2023 Events
    {
      id: 18,
      title: "Bengal Meditates with Sri Sri Ravishankar",
      date: "03.12.2023",
      location: "Gitanjali Stadium",
      category: "Spiritual",
      description: "Art of Living Foundation meditation event with Sri Sri Ravishankar",
      image: "/crowdPullers.png",
      year: "2023"
    },
    {
      id: 19,
      title: "10th Asian Mining Congress 2023",
      date: "06-09.11.2023",
      location: "Taj Taal Kutir, New Town",
      category: "Conference",
      description: "Mining, Metallurgical & Geological Institute of India conference",
      image: "/crowdPullers.png",
      year: "2023"
    },
    {
      id: 20,
      title: "International Toy Exhibition 2023",
      date: "04-05.11.2023",
      location: "Netaji Indoor Stadium",
      category: "Exhibition",
      description: "International Toy Exhibition organized at Netaji Indoor Stadium",
      image: "/crowdPullers.png",
      year: "2023"
    },
    // Historical Events (2022 and earlier)
    {
      id: 21,
      title: "Kolkata Toy Exhibition 2022",
      date: "17-18.11.2022",
      location: "Netaji Indoor Stadium",
      category: "Exhibition",
      description: "First ever Kolkata Toy Exhibition in eastern region, organized with Bharat Chamber of Commerce",
      image: "/clients/BCOC.png",
      year: "2022"
    },
    {
      id: 22,
      title: "Vestige India Annual Award Recognition",
      date: "02.06.2022",
      location: "Netaji Indoor Stadium",
      category: "Corporate",
      description: "Annual Award Recognition programme for Vestige India Pvt. Ltd.",
      image: "/crowdPullers.png",
      year: "2022"
    },
    {
      id: 23,
      title: "9th Asian Mining Congress",
      date: "04-05.04.2022",
      location: "Biswa Banga Convention Centre",
      category: "Conference",
      description: "Asian Mining Congress organized by MGMI",
      image: "/clients/Biswa-Bangla.png",
      year: "2022"
    },
    {
      id: 24,
      title: "Arijit Singh Live in Concert",
      date: "02.02.2020",
      location: "Eco Park grounds",
      category: "Entertainment",
      description: "Live concert organized for Garia Mitali Sangha",
      image: "/crowdPullers.png",
      year: "2020"
    },
    {
      id: 25,
      title: "Centenary Celebrations - Bridge and Roof Co.",
      date: "10.01.2020",
      location: "Netaji Indoor Stadium",
      category: "Corporate",
      description: "100th anniversary celebration of Bridge and Roof Co. (India) Ltd.",
      image: "/crowdPullers.png",
      year: "2020"
    },
    {
      id: 26,
      title: "NRC Speech by Hon. Home Minister",
      date: "01.10.2019",
      location: "Netaji Indoor Stadium",
      category: "Political",
      description: "NRC speech by Hon'ble Home Minister Mr. Amit Shah organized for BJP",
      image: "/crowdPullers.png",
      year: "2019"
    },
    {
      id: 27,
      title: "Intimasia 2019",
      date: "07-09.08.2019",
      location: "Netaji Indoor Stadium",
      category: "Exhibition",
      description: "Intimasia exhibition organized for Peppermint Group",
      image: "/crowdPullers.png",
      year: "2019"
    },
    {
      id: 28,
      title: "8th Asian Mining Congress & Exhibition",
      date: "06-10.11.2019",
      location: "Westin Hotel & Eco Park",
      category: "Conference",
      description: "Mining congress at Westin with Austrade Exhibition at Eco Park",
      image: "/clients/austrade.png",
      year: "2019"
    },
    {
      id: 29,
      title: "Lakshya 5 - Shreya Ghoshal Nite",
      date: "28.12.2018",
      location: "Netaji Indoor Stadium",
      category: "Entertainment",
      description: "Musical night featuring Shreya Ghoshal for Surendranath Group of Colleges",
      image: "/crowdPullers.png",
      year: "2018"
    },
    {
      id: 30,
      title: "National Defence Production Seminar",
      date: "14-16.09.2018",
      location: "Westin Hotel",
      category: "Government",
      description: "Seminar on Defence Production focus Eastern India for Bharat Chamber with Ministry of Defence",
      image: "/clients/BCOC.png",
      year: "2018"
    },
    // Additional key events
    {
      id: 31,
      title: "ISKCON Golden Jubilee",
      date: "August 2015",
      location: "Netaji Indoor Stadium",
      category: "Spiritual",
      description: "Golden Jubilee Celebration of ISKCON",
      image: "/clients/iskcon.png",
      year: "2015"
    },
    {
      id: 32,
      title: "SREI Silver Jubilee",
      date: "April 2015",
      location: "Netaji Indoor Stadium",
      category: "Corporate",
      description: "Silver Jubilee Celebration of SREI",
      image: "/clients/srei.png",
      year: "2015"
    },
    {
      id: 33,
      title: "Hon'ble President of India - BHARAT CHAMBER Inauguration",
      date: "23.08.2016",
      location: "Bharat Chamber Building",
      category: "Government",
      description: "Inauguration of BHARAT CHAMBER's new building by Hon'ble President of India",
      image: "/clients/BCOC.png",
      year: "2016"
    }
  ]

  const categories = ['all', 'Corporate', 'Exhibition', 'Conference', 'Cultural', 'Academic', 'International', 'Technology', 'Entertainment', 'Government', 'Spiritual', 'Social']

  const filteredEvents = selectedCategory === 'all' 
    ? eventsData 
    : eventsData.filter(event => event.category === selectedCategory)

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)
  const currentEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  )

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.gallery-card')
    const titleElement = sectionRef.current.querySelector('.gallery-title')
    const filterButtons = sectionRef.current.querySelectorAll('.filter-btn')

    // Title animation
    gsap.fromTo(titleElement,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleElement,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    // Filter buttons animation
    gsap.fromTo(filterButtons,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: filterButtons[0],
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )

    // Cards animation
    gsap.fromTo(cards,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cards[0],
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )

    // Hover animations
    cards.forEach(card => {
      const image = card.querySelector('.card-image')
      const content = card.querySelector('.card-content')
      
      card.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.05, duration: 0.5, ease: "power2.out" })
        gsap.to(content, { y: -5, duration: 0.5, ease: "power2.out" })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" })
        gsap.to(content, { y: 0, duration: 0.5, ease: "power2.out" })
      })
    })

  }, [currentEvents])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: sectionRef.current.offsetTop - 100, behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="event-gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">
            Our Event <span className="gradient-text">Gallery</span>
          </h2>
          <p className="gallery-subtitle">
            Explore our comprehensive portfolio of {eventsData.length}+ successfully organized events across various categories
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-container">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category === 'all' ? 'All Events' : category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="gallery-grid">
          {currentEvents.map(event => (
            <div key={event.id} className="gallery-card">
              <div className="card-image-container">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="card-image"
                  onError={(e) => {
                    e.target.src = '/crowdPullers.png'
                  }}
                />
                <div className="card-overlay">
                  <span className="event-category">{event.category}</span>
                  <span className="event-year">{event.year}</span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-meta">
                  <span className="event-date">📅 {event.date}</span>
                  <span className="event-location">📍 {event.location}</span>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="card-footer">
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>
            
            <div className="pagination-numbers">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <button 
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="gallery-stats">
          <div className="stat-item">
            <h3>{eventsData.length}+</h3>
            <p>Events Organized</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>{categories.length - 1}</h3>
            <p>Event Categories</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventGallery
