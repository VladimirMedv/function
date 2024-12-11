import Contacts from './Contacts'
import ContactForm from '../ContactForm'
import Copyright from './Copyright'
import DiscoverLink from './DiscoverLink'

export default function Footer() {
  return (
    <footer className='bg-footer text-text 2lg:pt-[150px] sm:py-[80px] 2lg:pb-[100px] max-sm:py-[60px]'>
      <Contacts />
      <ContactForm />
      <div className='flex flex-row max-sm:flex-col items-center justify-between  max-sm:gap-10 2lg:px-56 md:px-36 px-5'>
        <div className='flex items-start w-1/2 max-sm:w-full max-sm:items-center max-sm:justify-center'>
          <DiscoverLink />
        </div>
        <div className='flex items-start w-1/2 max-sm:w-full max-sm:items-center max-sm:justify-center'>
          <Copyright />
        </div>
      </div>
    </footer>
  )
}
