import Hero from './components/Hero'
import Projects from './components/Projects/Projects'
import Services from './components/Services'
import Clients from './components/Clients'
import AboutMe from './components/AboutMe/AboutMe'

export default function Home() {
  return (
    <div className='bg-primary text-text flex flex-col 3xl:gap-[12.5rem] 7md:gap-[9.375rem]  4sm:gap-[7.5rem]'>
      <Hero />
      <Projects />
      <Services sectionStyle='3xl:-mt-[3.75rem] -mt-[2.5rem] 3xl:px-56 2lg:px-40' />
      <Clients />
      <AboutMe />
    </div>
  )
}
