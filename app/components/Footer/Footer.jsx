import Contacts from './Contacts'
import ContactForm from '../ContactForm'
import Copyright from './Copyright'
import DiscoverLink from './DiscoverLink'

export default function Footer() {
  return (
    <footer className='bg-footer text-text 2lg:pt-[150px] sm:py-[80px] 2lg:pb-[100px] max-sm:py-[60px]'>
      <Contacts />
      <div className='flex flex-row 2lg:px-56 md:px-36 mb-14'>
        <div className='flex-1 max-sm:flex-none 2lg:text-[3.125rem] text-3xl text-left 2lg:leading-[4.063rem] leading-[2.375rem] font-medium flex flex-col justify-between'>
          <div>
            Order
            <br />a service
          </div>
          <div>
            <DiscoverLink />
          </div>
        </div>
        <div className='flex-1 flex flex-col float-start justify-start gap-[60px] 2lg:gap-[100px]'>
          <div>
            <ContactForm />
          </div>
          <div className='flex justify-start'>
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  )
}
