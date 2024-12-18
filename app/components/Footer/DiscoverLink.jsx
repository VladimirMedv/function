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
    <div className='flex 7md:flex-row flex-col items-center 7md:justify-start justify-center '>
      <span className='3xl:text-xl text-xs 3xl:leading-[1.563rem] leading-[0.938rem] font-normal 7md:text-left text-center 3xl:mr-10 7md:mr-5 mr-0 7md:mb-0 mb-4 text-nowrap'>
        Discover our work on:
      </span>
      <div className='flex 3xl:gap-[1.875rem] gap-[0.938rem] justify-center flex-nowrap'>
        {socialLinks.map(({ href, ariaLabel, icon }) => (
          <Link
            key={ariaLabel}
            href={href}
            aria-label={ariaLabel}
            className='relative  3xl:w-[47px] 3xl:h-[47px] w-[30px] h-[30px] flex items-center justify-center'
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
