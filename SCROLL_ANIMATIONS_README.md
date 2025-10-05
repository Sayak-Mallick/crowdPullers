# CrowdPullers - Smooth Scroll Animations

This project has been enhanced with advanced scroll-driven animations using **Lenis** for smooth scrolling and **GSAP ScrollTrigger** for precise animation control.

## 🎯 Features Implemented

### 1. **Smooth Scrolling with Lenis**
- Fluid, controlled scrolling that replaces jerky native browser scrolling
- Customizable easing curves and duration
- Better performance with requestAnimationFrame-based updates
- Mobile-optimized touch scrolling

### 2. **Scroll-Driven Animations**
- **Animated Reveals**: Elements fade and slide in when entering viewport
- **Parallax Scrolling**: Background elements move at different speeds for depth
- **Interactive Data Visualization**: Counters animate from 0 to target value
- **Stagger Animations**: Child elements animate in sequence
- **Scale Animations**: Elements scale and fade in with bouncy effects

### 3. **Animation Hooks**
Custom React hooks for easy implementation:

```javascript
import { 
  useRevealAnimation, 
  useParallaxAnimation, 
  useCounterAnimation, 
  useStaggerAnimation 
} from './hooks/useScrollAnimations'

// Usage examples:
const titleRef = useRevealAnimation({ direction: 'up', distance: 100, duration: 1.2 })
const parallaxRef = useParallaxAnimation({ speed: 0.5 })
const counterRef = useCounterAnimation({ start: 0, end: 500, duration: 2 })
const cardsRef = useStaggerAnimation({ stagger: 0.2, direction: 'up' })
```

### 4. **CSS Classes for Quick Implementation**
Simply add these classes to any element:

```html
<!-- Basic reveal animation -->
<div class="animate-reveal">Content appears on scroll</div>

<!-- Parallax background -->
<div class="parallax-bg">Moves at different speed</div>

<!-- Stagger children -->
<div class="stagger-children">
  <div>Child 1</div>
  <div>Child 2</div>
  <div>Child 3</div>
</div>

<!-- Scale animation -->
<div class="scale-on-scroll">Scales up when visible</div>
```

## 🚀 Getting Started

### Installation
```bash
npm install lenis gsap
```

### Setup in your React app:

1. **Initialize Lenis in App.jsx:**
```javascript
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    // Connect with GSAP
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))

    return () => lenis.destroy()
  }, [])
}
```

2. **Add CSS for animations** (see App.css)

3. **Use hooks or CSS classes** in your components

## 🎨 Animation Types

### Reveal Animations
- **Fade Up**: Elements slide up and fade in
- **Fade Down**: Elements slide down and fade in
- **Fade Left/Right**: Elements slide horizontally
- **Scale**: Elements scale up from smaller size

### Parallax Effects
- **Background Parallax**: Background elements move slower than foreground
- **Multi-layer Parallax**: Different elements at different speeds
- **Horizontal Parallax**: Side-to-side movement

### Interactive Data
- **Counter Animations**: Numbers count up when scrolled into view
- **Progress Bars**: Bars fill as user scrolls
- **Chart Animations**: Data visualizations animate based on scroll

### Stagger Effects
- **Sequential Reveals**: Child elements appear one after another
- **Wave Effects**: Staggered animations create wave-like motion
- **Grid Animations**: Cards or tiles animate in sequence

## 🎛️ Customization Options

### Lenis Configuration:
```javascript
const lenis = new Lenis({
  duration: 1.2,          // Scroll duration
  easing: (t) => t,       // Easing function
  direction: 'vertical',   // Scroll direction
  smooth: true,           // Enable smooth scrolling
  mouseMultiplier: 1,     // Mouse wheel sensitivity
  touchMultiplier: 2,     // Touch scroll sensitivity
})
```

### Animation Hook Options:
```javascript
useRevealAnimation({
  direction: 'up',        // 'up', 'down', 'left', 'right', 'scale'
  distance: 100,          // Distance to move
  duration: 1.2,          // Animation duration
  delay: 0,               // Animation delay
  start: "top 85%",       // ScrollTrigger start position
  end: "bottom 15%"       // ScrollTrigger end position
})
```

## 📱 Performance & Accessibility

### Performance Optimizations:
- Uses `transform` and `opacity` for GPU acceleration
- `will-change` and `backface-visibility` for smooth animations
- RequestAnimationFrame for optimal timing
- Efficient ScrollTrigger batching

### Accessibility:
- Respects `prefers-reduced-motion` setting
- Provides fallbacks for users who prefer reduced motion
- Maintains keyboard navigation and screen reader compatibility

## 🛠️ Components Enhanced

1. **Hero Section**: Parallax backgrounds, counter animations, reveals
2. **About Section**: Stagger animations, scale effects
3. **Services Section**: Card reveals with stagger
4. **ScrollDemo**: Comprehensive demonstration of all features

## 📚 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🔧 Troubleshooting

### Common Issues:

1. **Animations not working**: Check if GSAP and ScrollTrigger are properly registered
2. **Jerky scrolling**: Ensure native `scroll-behavior: smooth` is disabled
3. **Performance issues**: Reduce the number of animated elements or adjust settings

### Debug Mode:
```javascript
// Enable GSAP debug mode
gsap.config({ trialWarn: false, nullTargetWarn: false })

// Add ScrollTrigger markers for debugging
ScrollTrigger.create({
  trigger: element,
  markers: true, // Shows start/end markers
  // ... other options
})
```

## 🎯 Next Steps

1. Add more animation presets (typewriter, morphing, etc.)
2. Implement scroll-driven SVG path animations
3. Add mouse-following animations
4. Create animation timeline controls
5. Add WebGL-based scroll effects

---

**Note**: This implementation provides a solid foundation for scroll-driven animations. You can extend and customize it based on your specific needs!
