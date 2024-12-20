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
    <>
      <section className='relative 3xl:pt-[12.5rem] 2lg:pt-[9.375rem] pt-[6.25rem] 3xl:pb-[9.375rem] 2lg:pb-[6.25rem] pb-10 2lg:px-10'>
        <div className='flex flex-col 2lg:flex-row'>
          {/* Контент */}
          <main className=''>
            <Slogan />
          </main>

          {/* Вертикальное меню */}
          <div className='flex flex-col 3xl:pl-[100px] 2lg:mt-0 mt-[80px] 3xl:ml-[100px] 2lg:ml-8'>
            <span className='3xl:text-[1.375rem] 3xl:leading-[2.125rem] text-sm leading-[23.87px] font-normal'>
              Choose a Category
            </span>
            <aside className='3xl:h-[420px] 2lg:h-[295px] 7md:h-[99px] 4sm:h-[132px] 3sm:h-[120px] font-medium 3xl:text-[2.5rem] 2lg:text-[1.75rem] text-[1.375rem] 3xl:leading-[60px] 2lg:leading-[2.633rem] leading-[2.063rem]'>
              <ul className='flex 2lg:flex-col flex-row gap-2 2lg:flex-nowrap flex-wrap'>
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
      </section>
      <div className='2lg:pb-5 pb-2.5'>
        <ProjectsList activeCategory={activeCategory} />
      </div>
    </>
  )
}

export default PageProjects
