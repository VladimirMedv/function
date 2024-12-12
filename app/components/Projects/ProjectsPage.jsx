import Link from 'next/link'
import ProjectItem from './ProjectItem'
import projects from '../../data/projects'

export default function Projects() {
  return (
    <section className='bg-primary text-text 2lg:py-[12.5rem] sm:py-[9.375rem] max-sm:py-[7.5rem] '>
      <div className=' 2lg:px-10 px-5'>
        {/* Список проектов в столбик */}
        <div className='flex flex-col 2lg:gap-10 gap-5'>
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              mainImage={project.mainImage}
              title={project.title}
              works={project.works}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
