import Link from 'next/link'
import Image from 'next/image'

const socialLinks = [
  {
    href: 'https://wa.me/79264266855',
    ariaLabel: 'WhatsApp',
    icon: {
      normal: '/images/icons/icon_whatsapp_w.svg',
      hover: '/images/icons/icon_whatsapp_o.svg',
    },
  },
  {
    href: 'https://t.me/Fedor_Beltugov',
    ariaLabel: 'Telegram',
    icon: {
      normal: '/images/icons/icon_telegram_w.svg',
      hover: '/images/icons/icon_telegram_o.svg',
    },
  },
  {
    href: 'https://www.linkedin.com/in/fedor-beltugov-a6896a37/',
    ariaLabel: 'LinkedIn',
    icon: {
      normal: '/images/icons/icon_linkedin_w.svg',
      hover: '/images/icons/icon_linkedin_o.svg',
    },
  },
]

export default function SocialLinks() {
  return (
    <div className='mt-6 flex flex-row max-sm:flex-col items-center max-sm:items-start'>
      <span className='text-xl max-2lg:text-xs font-light sm:text-left mr-7 max-2lg:mr-5'>
        Get in touch with me through:
      </span>
      <div className='flex flex-nowrap gap-4 justify-center'>
        {socialLinks.map(({ href, ariaLabel, icon }) => (
          <Link
            key={ariaLabel}
            href={href}
            aria-label={ariaLabel}
            className='group size-[35px] max-2lg:size-[22px] flex items-center justify-center transition-colors duration-300 max-sm:mt-4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='relative w-8 h-8 max-2lg:w-6 max-2lg:h-6'>
              <Image
                src={icon.normal}
                alt={`${ariaLabel} icon`}
                width={32}
                height={32}
                className='absolute inset-0 transition-opacity duration-300 group-hover:opacity-0'
              />
              <Image
                src={icon.hover}
                alt={`${ariaLabel} icon hover`}
                width={32}
                height={32}
                className='absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
              />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
