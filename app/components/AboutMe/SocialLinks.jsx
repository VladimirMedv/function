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
    <div className='mt-6 flex 7md:flex-row flex-col items-start 7md:items-center'>
      <span className='3xl:text-[1.25rem] text-[0.75rem] 3xl:leading-[2.375rem] leading-[1rem] font-normal text-left 3xl:mr-[1.875rem] 7md:mr-5'>
        Get in touch with me through:
      </span>
      <div className='flex flex-nowrap gap-4 justify-center'>
        {socialLinks.map(({ href, ariaLabel, icon }) => (
          <Link
            key={ariaLabel}
            href={href}
            aria-label={ariaLabel}
            className='group 3xl:size-[2.188rem] size-[1.375rem] flex items-center justify-center transition-colors duration-300 7md:mt-0 mt-4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='relative 3xl:w-[2.188rem] 3xl:h-[2.188rem] w-[1.375rem] h-[1.375rem]'>
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
