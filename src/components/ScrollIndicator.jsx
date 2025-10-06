import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const ScrollIndicator = ({ 
  targetSection, 
  tooltipText = "Scroll Down",
  borderColor = "border-white/60",
  hoverColor = "hover:border-blue-300",
  dotColor = "bg-white/80",
  hoverDotColor = "group-hover:bg-blue-300"
}) => {
  const handleClick = () => {
    const targetElement = document.querySelector(`#${targetSection}`)
    if (targetElement) {
      gsap.to(window, { 
        duration: 1.5, 
        scrollTo: targetElement, 
        ease: "power2.inOut" 
      })
    }
  }

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div 
        className={`w-5 h-8 border-2 ${borderColor} rounded-full flex justify-center animate-pulse ${hoverColor} transition-colors duration-300 cursor-pointer group`}
        onClick={handleClick}
      >
        <div className={`w-0.5 h-2 ${dotColor} rounded-full mt-1.5 ${hoverDotColor} transition-colors duration-300`}></div>
      </div>
      {/* Tooltip */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {tooltipText}
      </div>
    </div>
  )
}

export default ScrollIndicator
