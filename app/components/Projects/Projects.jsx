import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <section className='bg-primary text-text py-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold mb-8'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <ProjectItem title='Project 1' />
          <ProjectItem title='Project 2' />
          <ProjectItem title='Project 3' />
          <ProjectItem title='Project 4' />
        </div>
        <div className='text-center mt-8'>
          <button className='bg-secondary text-primary py-2 px-4 rounded hover:bg-text'>
            All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
