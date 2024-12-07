import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa'

const socialLinks = [
  {
    href: 'https://www.instagram.com/beltugov/',
    ariaLabel: 'Instagram',
    icon: FaInstagram,
  },
  {
    href: 'https://www.behance.net/fbeltugov',
    ariaLabel: 'Behance',
    icon: FaBehance,
  },
  {
    href: 'https://dribbble.com/fbeltugov',
    ariaLabel: 'Dribbble',
    icon: FaDribbble,
  },
]

function DiscoverLink() {
  return (
    <div className='flex flex-row max-sm:flex-col items-center max-sm:items-center'>
      <span className='text-xl max-2lg:text-xs font-light sm:text-left max-sm:text-center 2lg:mr-7 mr-5 max-sm:mr-0'>
        Discover our work on:
      </span>
      <div className='flex gap-4 justify-center flex-nowrap'>
        {socialLinks.map(({ href, ariaLabel, icon: Icon }) => (
          <Link
            key={ariaLabel}
            href={href}
            aria-label={ariaLabel}
            className='size-[35px] max-2lg:size-[22px] flex items-center justify-center rounded-xl max-2lg:rounded-md bg-white hover:bg-secondary transition-colors duration-300 max-sm:mt-4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon
              className='text-footer max-2lg:size-[16px]'
              size={20}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DiscoverLink
