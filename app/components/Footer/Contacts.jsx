import Link from 'next/link'
import Image from 'next/image'

const socialLinks = [
  {
    href: 'https://wa.me/79264266855',
    ariaLabel: 'WhatsApp',
    label: 'WhatsApp',
    icon: {
      normal: '/images/icons/icon_whatsapp_2_',
      hover: '/images/icons/icon_whatsapp_2_o.svg',
    },
  },
  {
    href: 'https://t.me/Fedor_Beltugov',
    ariaLabel: 'Telegram',
    label: 'Telegram',
    icon: {
      normal: '/images/icons/icon_telegram_2_',
      hover: '/images/icons/icon_telegram_2_o.svg',
    },
  },
]

function Contacts({ theme = 'w' }) {
  return (
    <div className='flex flex-col items-center justify-center mb-20'>
      {/* Email link */}
      <Link
        href='mailto:hello@functionaldesign.studio'
        className='2lg:text-[5.5rem] md:text-[3.5rem] sm:text-[2.3rem] max-sm:text-[1.6rem] underline cursor-pointer hover:text-secondary transition-colors duration-300 -tracking-[0.03em] font-medium'
      >
        hello@functionaldesign.studio
      </Link>

      {/* Social links */}
      <div className='2lg:mt-14 md:mt-10 mt-8 flex flex-row max-sm:flex-col items-center max-sm:items-center'>
        <span className='text-[1.875rem] max-2lg:text-lg 2lg:leading-[3.775rem] leading-[2.364rem] font-medium sm:text-left'>
          Contact via Messenger:
        </span>
        <div className='flex flex-nowrap gap-4 justify-center max-sm:mt-4 2lg:ml-10 ml-5'>
          {socialLinks.map(({ href, ariaLabel, label, icon }) => (
            <Link
              key={ariaLabel}
              href={href}
              aria-label={ariaLabel}
              className={`group flex items-center justify-center font-medium ${
                theme == 'w' ? 'text-text' : 'text-dark-gray'
              } 2lg:leading-[3.775rem] leading-[2.364rem] transition-colors duration-300 text-[1.875rem] max-2lg:text-lg `}
              target='_blank'
              rel='noopener noreferrer'
            >
              {/* Label */}
              <span className='mr-3 group-hover:text-secondary transition-colors duration-300 2lg:text-[1.875rem] text-[1.125rem]'>
                {label}
              </span>

              {/* SVG icons */}
              <span className='relative w-8 h-8'>
                <Image
                  src={`${icon.normal + theme}.svg`}
                  alt={`${label} icon`}
                  width={40}
                  height={40}
                  className='absolute inset-0 transition-opacity duration-300 group-hover:opacity-0'
                />
                <Image
                  src={icon.hover}
                  alt={`${label} icon hover`}
                  width={40}
                  height={40}
                  className='absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contacts
