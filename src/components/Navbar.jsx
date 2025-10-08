import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    // Animate navbar on mount
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Celebscape', href: '#celebscape' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      gsap.to(window, { duration: 1.2, scrollTo: element, ease: "power2.inOut" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' : 'bg-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <img 
              src="/crowdPullers.png" 
              alt="CrowdPullers Logo" 
              className="h-12 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 text-sm font-medium transition-all cursor-pointer duration-300 relative group ${
                    scrolled 
                      ? 'text-slate-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-800 hover:text-blue-600'
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition duration-300 ${isOpen ? 'opacity-0' : 'my-1'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden border-t border-slate-200 transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-600 w-full text-left rounded-lg cursor-pointer transition-all duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
