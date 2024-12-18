'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import LogoB from './LogoB'
import DiscoverLink from '../Footer/DiscoverLink'
import Image from 'next/image'

const menuItems = [
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contacts', label: 'Contact Us' },
]

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const renderMenuItems = (onClick) =>
    menuItems.map(({ href, label }) => (
      <li key={href}>
        <Link
          href={href}
          className={`hover:underline hover:text-secondary transition-colors duration-300 ${
            isMenuOpen ? 'text-const-dark-gray' : 'text-text'
          }`}
          onClick={onClick}
        >
          {label}
        </Link>
      </li>
    ))

  return (
    <nav className='flex items-center justify-between'>
      {/* Основное меню */}
      <ul className='hidden 7md:flex 2lg:gap-10 gap-[1.875rem] font-normal text-sm leading-[1.1rem] text-nowrap'>
        {renderMenuItems()}
      </ul>

      {/* Бургер-меню */}
      <button
        className={`md:hidden focus:outline-none transition-transform transform z-[51] ${
          isMenuOpen ? 'rotate-90' : ''
        }`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <Image
          src={
            isMenuOpen
              ? '/images/icons/menu_mob_b.svg'
              : '/images/icons/menu_mob_w.svg'
          }
          width={25}
          height={25}
          alt='Open menu'
          className='text-text'
        />
      </button>

      {/* Выпадающее меню для мобильных */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-bgwhite z-50 flex flex-col overflow-hidden transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='flex items-center justify-between p-5'>
          <LogoB />
        </div>
        <ul className='flex flex-col items-start mt-3 p-5 font-medium text-[33px] leading-10  4sm:gap-[3.125rem] 3sm:gap-10 opacity-100 transition-opacity duration-300'>
          {renderMenuItems(toggleMenu)}
        </ul>
        <div className='absolute w-full flex flex-col items-center justify-center bottom-0 gap-[3.125rem] mb-[40px] p-5 text-dark-gray opacity-100 transition-opacity duration-300'>
          <DiscoverLink theme='b' />
        </div>
      </div>
    </nav>
  )
}

export default Menu
