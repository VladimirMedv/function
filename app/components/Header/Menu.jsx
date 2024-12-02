'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className='flex items-center justify-between'>
      {/* Основное меню */}
      <ul className='hidden md:flex space-x-[20px] md:space-x-[40px]'>
        <li>
          <Link
            href='/projects'
            className='2lg:text-[22px] md:text-sm text-text hover:underline hover:text-secondary transition-all font-normal'
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href='/services'
            className='2lg:text-[22px] md:text-sm text-text hover:underline hover:text-secondary transition-all font-normal'
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='2lg:text-[22px] md:text-sm text-text hover:underline hover:text-secondary transition-all font-normal'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='/contacts'
            className='2lg:text-[22px] md:text-sm text-text hover:underline hover:text-secondary transition-all font-normal'
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Бургер-меню */}
      <button
        className='md:hidden text-text focus:outline-none font-normal 2lg:text-[1.375rem] md:text-sm'
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </button>

      {/* Выпадающее меню для мобильных */}
      {isMenuOpen && (
        <ul className='absolute top-16 left-0 w-full bg-primary shadow-lg p-6 flex flex-col space-y-4'>
          <li>
            <Link
              href='/projects'
              className='text-lg text-text hover:underline hover:text-secondary transition-all'
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='/services'
              className='text-lg text-text hover:underline hover:text-secondary transition-all'
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='text-lg text-text hover:underline hover:text-secondary transition-all'
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='text-lg text-text hover:underline hover:text-secondary transition-all'
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Menu
