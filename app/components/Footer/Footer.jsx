'use client'
import { usePageInfo } from '../../context/PageInfoContext'
import Contacts from './Contacts'
import ContactForm from '../ContactForm'
import Copyright from './Copyright'
import DiscoverLink from './DiscoverLink'

export default function Footer() {
  const { pageInfo } = usePageInfo()

  return (
    <footer className='bg-footer text-text 3xl:pt-[150px] md:py-[80px] py-[60px] 3xl:pb-[100px] 3xl:gap-[6.25rem] flex flex-col gap-16 bottom-0 w-full'>
      {!pageInfo?.is404 && (
        <>
          <Contacts />
          <div className='flex flex-row 3xl:px-56 2lg:px-40 md:px-[1.875rem]'>
            <div className='md:flex-1 flex-none 3xl:text-[3.125rem] text-3xl text-left 3xl:leading-[4.063rem] leading-[2.375rem] font-medium flex flex-col justify-between'>
              <div className=' whitespace-pre-line'>{`Order\na service`}</div>
            </div>
            <div className='flex-1 flex flex-col float-start justify-start gap-[66px] 3xl:gap-[100px]'>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </>
      )}
      <div className='flex md:flex-row flex-col 3xl:px-56 2lg:px-40 md:pl-[1.875rem] md:gap-0 gap-10'>
        <div className='flex-1 '>
          <DiscoverLink />
        </div>

        <div className='flex-1 flex  md:justify-start items-center justify-center'>
          <Copyright />
        </div>
      </div>
    </footer>
  )
}
