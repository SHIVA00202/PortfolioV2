import Hero from '../component/Hero'
import NoiseBackground from '../component/NoiseBackground'
import GotBackground from '../component/GotBackground'
import ScrollLitHeading from '../component/ScrollLitHeading'
import StickyCards from '../component/StickyCards'
import Project from '../component/Project'
import Contact from '../component/Contact'
import OurServices from '../component/Ourservices'
import { useRef } from 'react'
import Skills from '../component/Skills'
import Internships from '../component/Internships'

const HomePage = () => {
  const sectionRef = useRef(null)

  return (
    <div className="m-3">
      <NoiseBackground />

      {/* HERO SPACE (reserves layout height) */}
      <div className="relative h-[93vh]">
        <div className="sticky top-0 z-20">
          <Hero />
        </div>
      </div>

      {/* CONTENT STARTS AFTER HERO */}
      <div className="relative z-10">
        {/* Scroll Section */}
        <section id='about' ref={sectionRef} className="relative h-[400vh]">
          <div className="sticky top-0 h-screen">
            <GotBackground>
              <ScrollLitHeading sectionRef={sectionRef} />
            </GotBackground>
          </div>
        </section>
          <Skills/>
        {/* Services */}
        <section id=''>
          <div className="hidden lg:block">
          <StickyCards />
        </div>
        <div className="lg:hidden">
          <OurServices />
        </div>
        </section>
      

        {/* Projects */}
        <section id="projects">
          <Project />
        </section>
        
        {/* Testimonials */}
        <section id="testimonials">
          <Internships/>
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default HomePage
