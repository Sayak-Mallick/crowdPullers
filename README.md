
# CrowdPullers - Premium Event Management

A modern, interactive website for CrowdPullers Event Management Company featuring cutting-edge scroll-driven animations and smooth user experience.

## 🚀 Live Demo
**Live URL**: [https://crowd-pullers.vercel.app/](https://crowd-pullers.vercel.app/)

## ✨ Key Features

### 🎯 Advanced Scroll Animations
- **Smooth Scrolling**: Powered by Lenis for fluid, natural scrolling experience
- **Scroll-Triggered Animations**: GSAP ScrollTrigger for precise, performant animations
- **Parallax Effects**: Multi-layer parallax backgrounds for depth and immersion
- **Interactive Counters**: Numbers animate from 0 to target values when scrolled into view
- **Stagger Animations**: Sequential reveals for cards, lists, and content sections
- **Reveal Effects**: Elements fade and slide in from various directions

### 🎨 Modern Design
- Responsive design that works on all devices
- Glass morphism effects with backdrop blur
- Gradient backgrounds and smooth transitions
- Professional color scheme with accessibility in mind
- Interactive hover effects and micro-animations

### 🔧 Technical Features
- Built with React 19 and Vite for optimal performance
- Tailwind CSS for rapid styling and consistency
- GSAP (GreenSock) for professional-grade animations
- Lenis for smooth scrolling implementation
- Custom animation hooks for reusability
- Performance optimized with GPU acceleration

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP, ScrollTrigger, Lenis
- **Build Tool**: Vite (Rolldown)
- **Deployment**: Vercel

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Sayak-Mallick/crowdPullers.git

# Navigate to project directory
cd crowdPullers

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎭 Animation Features

### Available Animation Types:
1. **Reveal Animations**: Fade in with movement (up, down, left, right, scale)
2. **Parallax Scrolling**: Background elements move at different speeds
3. **Interactive Counters**: Numbers count up when element enters viewport
4. **Stagger Effects**: Child elements animate in sequence
5. **Text Reveals**: Words or characters appear one by one
6. **Magnetic Effects**: Elements follow mouse cursor
7. **3D Perspective**: Elements rotate in 3D space on scroll
8. **SVG Path Drawing**: Paths draw themselves as user scrolls

### Quick Implementation:
```javascript
// Using custom hooks
const titleRef = useRevealAnimation({ direction: 'up', distance: 100 })
const counterRef = useCounterAnimation({ start: 0, end: 500, duration: 2 })

// Using CSS classes
<div className="animate-reveal">Animated content</div>
<div className="stagger-children">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section with parallax
│   ├── About.jsx       # About section with stagger animations
│   ├── Services.jsx    # Services with card reveals
│   ├── ScrollDemo.jsx  # Comprehensive animation showcase
│   └── ...
├── hooks/              # Custom React hooks
│   └── useScrollAnimations.js  # Animation hooks
├── utils/              # Utility functions
│   └── ScrollAnimations.js     # Advanced animation presets
└── App.jsx            # Main app with Lenis setup
```

## 🎯 Performance Optimizations

- Uses `transform` and `opacity` for smooth GPU acceleration
- Efficient ScrollTrigger batching for multiple animations
- Respects `prefers-reduced-motion` for accessibility
- Optimized animation timing with requestAnimationFrame
- Lazy loading and efficient re-renders

## 🌟 Services Offered

- **Corporate Events**: Product launches, marketing events, corporate parties
- **Exhibitions & Conferences**: Trade shows, business conferences, networking events  
- **Cultural Events**: Music concerts, festivals, traditional celebrations
- **Wedding Events**: Complete wedding planning and management
- **Educational Events**: Academic conferences, workshops, seminars

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+ 
- ✅ Safari 12+
- ✅ Edge 79+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**CrowdPullers Event Management**
- Website: [crowd-pullers.vercel.app](https://crowd-pullers.vercel.app/)
- Email: info@crowdpullers.com

---

⭐ **Star this repository if you found it helpful!**
