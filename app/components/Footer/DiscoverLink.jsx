import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  {
    href: 'https://www.instagram.com/beltugov/',
    ariaLabel: 'Instagram',
    icon: {
      normal: '/images/icons/icon_instagram_',
      hover: '/images/icons/icon_instagram_o.svg',
    },
  },
  {
    href: 'https://www.behance.net/fbeltugov',
    ariaLabel: 'Behance',
    icon: {
      normal: '/images/icons/icon_behance_',
      hover: '/images/icons/icon_behance_o.svg',
    },
  },
  {
    href: 'https://dribbble.com/fbeltugov',
    ariaLabel: 'Dribbble',
    icon: {
      normal: '/images/icons/icon_dribbble_',
      hover: '/images/icons/icon_dribbble_o.svg',
    },
  },
]

function DiscoverLink({ theme = 'w' }) {
  return (
    <div className='flex flex-row max-sm:flex-col items-center max-sm:items-center'>
      <span className='text-xl max-2lg:text-xs font-light sm:text-left max-sm:text-center 2lg:mr-7 mr-5 max-sm:mr-0 max-sm:mb-4 text-nowrap'>
        Discover our work on:
      </span>
      <div className='flex 2lg:gap-[1.875rem] gap-[0.938rem] justify-center flex-nowrap'>
        {socialLinks.map(({ href, ariaLabel, icon }) => (
          <Link
            key={ariaLabel}
            href={href}
            aria-label={ariaLabel}
            className='relative  2lg:w-[47px] 2lg:h-[47px] max-2lg:w-[30px] max-2lg:h-[30px] flex items-center justify-center'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* Normal Icon */}
            <Image
              src={`${icon.normal + theme}.svg`}
              alt={ariaLabel}
              width={47}
              height={47}
              className='absolute top-0 left-0 transition-opacity duration-300 opacity-100 hover:opacity-0'
            />
            {/* Hover Icon */}
            <Image
              src={icon.hover}
              alt={ariaLabel}
              width={47}
              height={47}
              className='absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100'
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DiscoverLink
