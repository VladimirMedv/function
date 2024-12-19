'use client'
import { useState } from 'react'
import ProjectsList from '../components/Projects/ProjectsList'
import Slogan from '../components/Projects/Slogan'

function PageProjects() {
  const [activeCategory, setActiveCategory] = useState('All projects')

  // Фиксированный список категорий меню
  const categories = [
    'All projects',
    'Corporate identity',
    'Product identity',
    'Personal identity',
    'Naming',
    'Logo',
    'Packaging',
  ]

  return (
    <section className='relative 2lg:py-[12.5rem] 2lg:px-10'>
      <div className='flex 2lg:flex-col 3xl:flex-row'>
        {/* Контент */}
        <main className=''>
          <Slogan />
        </main>

        {/* Вертикальное меню */}
        <div className='flex flex-col 3xl:pl-[100px] 3xl:mt-0 mt-[80px]'>
          <span className='2lg:text-[1.375rem] 2lg:leading-[2.125rem] font-normal'>
            Choose a Category
          </span>
          <aside className='3xl:h-[420px] 2lg:h-[180px] font-medium 2lg:text-[2.5rem] 2lg:leading-[60px]'>
            <ul className='flex 3xl:flex-col 2lg:flex-row gap-2 2lg:flex-wrap'>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer text-nowrap ${
                    activeCategory === category
                      ? 'text-secondary underline'
                      : 'hover:text-secondary hover:underline transition-colors duration-300'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <ProjectsList activeCategory={activeCategory} />
    </section>
  )
}

export default PageProjects
