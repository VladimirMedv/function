import Link from 'next/link'
import ProjectItem from './ProjectItem'
import projects from '../../data/projects'
import Image from 'next/image'

export default function Projects({ currentService, showAll }) {
  const arrowW = '/images/arrow-right_w.svg'
  const arrow = '/images/arrow-right_o.svg'

  const filteredProjects = projects.filter((project) => {
    if (showAll) return true // Показать все проекты
    if (currentService) {
      return (
        Array.isArray(project.services) &&
        project.services.includes(currentService)
      )
    }
    return project.showOnMainPage // Главная страница
  })

  return (
    <section>
      <div className='2lg:px-10 px-5'>
        <div className='flex flex-col 2lg:gap-10 gap-5'>
          {filteredProjects.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              mainImage={project.mainImage}
              title={project.title}
              works={project.works}
            />
          ))}
        </div>
        <div className='flex justify-end text-center mt-8'>
          <Link
            href='/projects'
            className='text-text hover:text-secondary 2lg:text-3xl text-lg flex items-center gap-4 group font-medium transition-colors duration-300'
          >
            All Projects
            <div className='relative flex items-center'>
              <Image
                src={arrowW}
                alt='arrow'
                width={158}
                height={22}
                className='2lg:w-[158px] 2lg:h-[22px] w-[99.23px] h-[13.95px] transition duration-300 transform opacity-100 group-hover:translate-x-2 group-hover:opacity-0'
              />
              <Image
                src={arrow}
                alt='hover-arrow'
                width={158}
                height={22}
                className='2lg:w-[158px] 2lg:h-[22px] w-[99.23px] h-[13.95px] absolute left-0 transition duration-300 transform translate-x-0 opacity-0 group-hover:translate-x-2 group-hover:opacity-100'
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
