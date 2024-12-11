import Hero from './components/Hero'
import Projects from './components/Projects/Projects'
import Services from './components/Services'
import Clients from './components/Clients'
import AboutMe from './components/AboutMe/AboutMe'

export default function Home() {
  return (
    <div className='bg-primary text-text flex flex-col 2lg:gap-[12.5rem] sm:gap-[9.375rem] max-sm:gap-[7.5rem]'>
      <Hero />
      <Projects />
      <Services />
      <Clients />
      <AboutMe />
    </div>
  )
}
