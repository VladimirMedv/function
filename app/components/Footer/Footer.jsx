'use client'
import { usePageInfo } from '../../context/PageInfoContext'
import Contacts from './Contacts'
import ContactForm from '../ContactForm'
import Copyright from './Copyright'
import DiscoverLink from './DiscoverLink'

export default function Footer() {
  const { pageInfo } = usePageInfo()

  return (
    <footer
      className={`bg-footer text-text ${
        !pageInfo?.is404 && '3xl:pt-[150px]'
      } 7md:py-[80px] py-[60px] 3xl:pb-[100px] 3xl:gap-[6.25rem] flex flex-col gap-16 ${
        pageInfo?.is404 && 'absolute bottom-0 bg-primary'
      } w-full`}
    >
      {!pageInfo?.is404 && (
        <>
          <Contacts />
          <div className='flex flex-row 3xl:px-56 2lg:px-40 7md:px-[1.875rem]'>
            <div className='3sm:flex-1 flex-none 2lg:text-[3.125rem] 4sm:text-3xl 3sm:text-xl text-left 2lg:leading-[4.063rem] 4sm:leading-[2.375rem] 3sm:leading-[1.75rem] font-medium flex flex-col justify-between'>
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
      <div className='flex 7md:flex-row flex-col 3xl:px-56 2lg:px-40 7md:pl-[1.875rem] 7md:gap-0 gap-10'>
        <div className='flex-1 '>
          <DiscoverLink />
        </div>

        <div className='flex-1 flex  7md:justify-start items-center justify-center'>
          <Copyright />
        </div>
      </div>
    </footer>
  )
}
