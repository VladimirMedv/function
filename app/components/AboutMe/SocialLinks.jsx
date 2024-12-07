import Link from 'next/link'
import { FaTelegramPlane } from 'react-icons/fa'
import { RiWhatsappFill, RiLinkedinFill } from 'react-icons/ri'

const socialLinks = [
  {
    href: 'https://wa.me/79264266855',
    ariaLabel: 'WhatsApp',
    icon: RiWhatsappFill,
  },
  {
    href: 'https://t.me/Fedor_Beltugov',
    ariaLabel: 'Telegram',
    icon: FaTelegramPlane,
  },
  {
    href: 'https://www.linkedin.com/in/fedor-beltugov-a6896a37/',
    ariaLabel: 'LinkedIn',
    icon: RiLinkedinFill,
  },
]

export default function SocialLinks() {
  return (
    <div className='mt-6 flex flex-row max-sm:flex-col items-center max-sm:items-start'>
      <span className='text-xl max-2lg:text-xs font-light sm:text-left mr-7 max-2lg:mr-5'>
        Get in touch with me through:
      </span>
      <div className='flex  flex-wrap gap-4 justify-center'>
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
