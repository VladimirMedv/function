import Hero from './components/Hero'
import Projects from './components/Projects/Projects'
import Services from './components/Services'
import Clients from './components/Clients'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Services />
      <Clients />
      <AboutMe />
      <Footer />
    </div>
  )
}
