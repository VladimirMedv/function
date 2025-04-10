import ProjectItem from './ProjectItem'
import projects from '../../data/projects'

export default function ProjectsList({ activeCategory }) {
  // Сопоставление категорий меню с услугами проектов
  const categoryMapping = {
    'Corporate identity': '/services/corporate-identity',
    'Product identity': '/services/product-identity',
    'Personal identity': '/services/personal-identity',
    Naming: '/services/naming',
    Logo: '/services/logo',
    Packaging: '/services/packaging',
  }

  const filteredProjects =
    activeCategory === 'All projects'
      ? projects
      : projects.filter((project) =>
          project.services.includes(categoryMapping[activeCategory] || '')
        )

  return (
    <section className='bg-primary text-text max-sm:py-[7.5rem]'>
      <div className='2lg:px-5 px-2.5'>
        {/* Список проектов */}
        <div className='flex flex-col 2lg:gap-5 gap-2.5'>
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
      </div>
    </section>
  )
}
