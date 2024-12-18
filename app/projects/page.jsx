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
    <section className='relative 3xl:py-[12.5rem] 3xl:px-10'>
      <div className='flex'>
        {/* Контент */}
        <main className=''>
          <Slogan />
        </main>

        {/* Вертикальное меню */}
        <div className='flex flex-col 3xl:pl-[100px]'>
          <span className='3xl:text-[1.375rem] 3xl:leading-[2.125rem] font-normal'>
            Choose a Category
          </span>
          <aside className='3xl:h-[420px] 3xl:font-medium 3xl:text-[2.5rem] 3xl:leading-[60px]'>
            <ul className='flex flex-col gap-2'>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer ${
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
