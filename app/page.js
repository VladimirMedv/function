import Hero from './components/Hero'
import Projects from './components/Projects/Projects'
import Services from './components/Services'
import Clients from './components/Clients'
import AboutMe from './components/AboutMe/AboutMe'

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Services />
      <Clients />
      <AboutMe />
    </div>
  )
}
