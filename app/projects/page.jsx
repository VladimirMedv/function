'use client'
import React, { useState } from 'react'
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
      <section className='relative 3xl:py-[6.875rem] 2lg:py-20 py-[3.75rem] 2lg:px-10 px-5'>
        <div className='flex flex-col 2lg:flex-row'>
          {/* Контент */}
          <main className=''>
            <Slogan />
          </main>

          {/* Вертикальное меню */}
          <div className='flex flex-col 3xl:pl-[100px] 2lg:mt-0 mt-[20px] 3xl:ml-[100px] 2lg:ml-8 max-2lg:gap-5'>
            <span className='3xl:text-[1.375rem] 3xl:leading-[2.125rem] text-sm leading-[23.87px] font-normal'>
              Choose a Category
            </span>
            <aside className='3xl:h-[420px] 2lg:h-[295px] 7md:w-[707px] 3sm:w-[370px] font-medium 3xl:text-[2.5rem] 2lg:text-[1.75rem] text-[1.375rem] 3xl:leading-[60px] 2lg:leading-[2.633rem] leading-[2.063rem]'>
              <ul className='flex 2lg:flex-col flex-row 3xl:gap-2 2lg:gap-1 2lg:flex-nowrap flex-wrap'>
                {categories.map((category, index) => (
                  <React.Fragment key={index}>
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
                    {/* Добавляем запятую только для маленьких экранов и не последнего элемента */}
                    {index < categories.length - 1 && (
                      <span className='hidden max-2lg:inline text-text pr-2'>
                        ,
                      </span>
                    )}
                  </React.Fragment>
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
