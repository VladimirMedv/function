import Link from 'next/link'
import { FaTelegram } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'

const socialLinks = [
  {
    href: 'https://wa.me/79264266855',
    ariaLabel: 'WhatsApp',
    label: 'WhatsApp',
    icon: RiWhatsappFill,
  },
  {
    href: 'https://t.me/Fedor_Beltugov',
    ariaLabel: 'Telegram',
    label: 'Telegram',
    icon: FaTelegram,
  },
]
function Contacts() {
  return (
    <div className='flex flex-col items-center justify-center mb-20'>
      <Link
        href='mailto:hello@functionaldesign.studio'
        className='2lg:text-[5.5rem] md:text-[3.5rem] sm:text-[2.3rem] max-sm:text-[1.6rem] underline cursor-pointer hover:text-secondary -tracking-[0.03em]'
      >
        hello@functionaldesign.studio
      </Link>
      <div className='2lg:mt-14 md:mt-10 mt-8 flex flex-row max-sm:flex-col items-center max-sm:items-center'>
        <span className='text-[1.875rem] max-2lg:text-lg font-normal sm:text-left'>
          Contact via Messenger:
        </span>
        <div className='flex  flex-wrap gap-4 justify-center'>
          {socialLinks.map(({ href, ariaLabel, label, icon: Icon }) => (
            <Link
              key={ariaLabel}
              href={href}
              aria-label={ariaLabel}
              className='flex items-center justify-center font-medium hover:text-secondary transition-colors duration-300 max-sm:mt-4 2lg:ml-10 ml-5 text-[1.875rem] max-2lg:text-lg '
              target='_blank'
              rel='noopener noreferrer'
            >
              {label}
              <Icon
                className='max-2lg:size-[25px] ml-5 max-2lg:ml-[10px]'
                size={40}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contacts
