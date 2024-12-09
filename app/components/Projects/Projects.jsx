import Link from 'next/link'
import ProjectItem from './ProjectItem'
import projects from '../../data/projects'
import Image from 'next/image'

export default function Projects() {
  const arrowW = '/images/arrow-right_w.svg'
  const arrow = '/images/arrow-right.svg'

  return (
    <section className='bg-primary text-text py-16'>
      <div className=' 2lg:px-10 px-5'>
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
            className='text-white hover:text-secondary 2lg:text-3xl text-lg transition-all leading-9 flex items-center 2lg:gap-7 gap-4 group'
            href='/projects'
          >
            All Projects
            <Image
              src={arrowW}
              alt='arrow'
              width={158}
              height={22}
              className='inline-block group-hover:hidden 2lg:w-[158px] 2lg:h-[22px] w-[99.23px] h-[13.95px]'
            />
            <Image
              src={arrow}
              alt='hover-arrow'
              width={158}
              height={22}
              className='hidden group-hover:inline-block 2lg:w-[158px] 2lg:h-[22px] w-[99.23px] h-[13.95px]'
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
