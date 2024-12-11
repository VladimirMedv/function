import Link from 'next/link'
import ProjectItem from './ProjectItem'
import projects from '../../data/projects'
import Image from 'next/image'

export default function Projects() {
  const arrowW = '/images/arrow-right_w.svg'
  const arrow = '/images/arrow-right.svg'

  return (
    <section>
      <div className='2lg:px-10 px-5'>
        {/* Список проектов в столбик */}
        <div className='flex flex-col 2lg:gap-10 gap-5'>
          {projects
            .filter((project) => project.showOnMainPage) // Отображаем только проекты с `showOnMainPage: true`
            .map((project) => (
              <ProjectItem
                key={project.id}
                id={project.id}
                mainImage={project.mainImage}
                title={project.title}
                works={project.works}
              />
            ))}
        </div>
        {/* Ссылка на страницу всех проектов */}
        <div className='flex justify-end text-center mt-8'>
          <Link
            href='/projects'
            className='text-white hover:text-secondary 2lg:text-3xl text-lg flex items-center gap-4 group font-medium transition-colors duration-300'
          >
            All Projects
            <div className='relative flex items-center'>
              {/* Белая стрелка */}
              <Image
                src={arrowW}
                alt='arrow'
                width={158}
                height={22}
                className='transition duration-300 transform opacity-100 group-hover:translate-x-2 group-hover:opacity-0'
              />
              {/* Чёрная стрелка */}
              <Image
                src={arrow}
                alt='hover-arrow'
                width={158}
                height={22}
                className='absolute left-0 transition duration-300 transform translate-x-0 opacity-0 group-hover:translate-x-2 group-hover:opacity-100'
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
