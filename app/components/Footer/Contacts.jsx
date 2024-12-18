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
    <div className='flex flex-col items-center justify-center'>
      {/* Email link */}
      <Link
        href='mailto:hello@functionaldesign.studio'
        className='3xl:text-[6.563rem] 2lg:text-[5.125rem] md:text-[3.313rem] sm:text-[2rem] ssm:text-[1.5rem] underline cursor-pointer hover:text-secondary transition-colors duration-300 -tracking-[0.03em] font-medium 3xl:leading-[131px] 2lg:leading-[82px] md:leading-[66px] leading-[42px]'
      >
        hello@functionaldesign.studio
      </Link>

      {/* Social links */}
      <div className='2lg:mt-14 md:mt-10 mt-8 flex md:flex-row flex-col items-center 3xl:gap-10 md:gap-[1.875rem] gap-[2px]'>
        <span className='3xl:text-[1.875rem] text-lg 3xl:leading-[3.775rem] leading-[2.364rem] font-normal'>
          Contact via Messenger:
        </span>
        <div className='flex flex-nowrap justify-center max-sm:mt-4 3xl:gap-10 gap-5'>
          {socialLinks.map(({ href, ariaLabel, label, icon }) => (
            <Link
              key={ariaLabel}
              href={href}
              aria-label={ariaLabel}
              className={`group flex items-center justify-center font-medium ${
                theme == 'w' ? 'text-text' : 'text-dark-gray'
              } 3xl:text-[1.875rem] text-lg 3xl:leading-[3.775rem] leading-[2.364rem] transition-colors duration-300`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {/* Label */}
              <span className='mr-3 group-hover:text-secondary transition-colors duration-300'>
                {label}
              </span>

              {/* SVG icons */}
              <span className='relative 3xl:w-10 3xl:h-10 w-6 h-6'>
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
