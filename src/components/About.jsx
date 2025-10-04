import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const cardsRef = useRef(null)
  const visionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const content = contentRef.current
    const cards = cardsRef.current
    const vision = visionRef.current

    // Title animation
    gsap.fromTo(title,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    // Content cards animation
    gsap.fromTo(content.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )

    // Feature cards animation
    gsap.fromTo(cards.children,
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cards,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )

    // Vision section animation
    gsap.fromTo(vision,
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: vision,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            About <span className="text-blue-600">CROWDpullers</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                CROWDpullers is an Event Management company that helps in intelligently shaping and responding to customers' demands. We are constantly creating better platforms to reach out to customers, and as one of India's leading event management companies, we plan and execute events that go beyond any expectations.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Expertise</h3>
              <p className="text-slate-600 leading-relaxed">
                Our vast experience and professional expertise give us the competitive edge in the events industry. With us, you can be assured of high performance, complete customer satisfaction, and value for your money.
              </p>
            </div>
          </div>

          {/* Right Column - Features */}
          <div ref={cardsRef} className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900">ISO 9001:2015 Certified</h4>
              </div>
              <p className="text-slate-600">Quality management systems ensuring excellence in every event.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900">Innovative Concepts</h4>
              </div>
              <p className="text-slate-600">Creative and stylish execution that exceeds expectations.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900">Cost Effective Solutions</h4>
              </div>
              <p className="text-slate-600">Affordable solutions without compromising on quality and excellence.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900">Customer Satisfaction</h4>
              </div>
              <p className="text-slate-600">Complete customer satisfaction and value for your investment.</p>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div
          ref={visionRef}
          className="mt-20 text-center bg-blue-600 text-white p-12 rounded-2xl shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            We are ready to make a difference in your business performance and turn your visions into highly marketable solutions. From initial planning to final execution, we work on every aspect that makes an event a huge success.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
