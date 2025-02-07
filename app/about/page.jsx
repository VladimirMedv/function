import Image from 'next/image'
import Constructor from '../components/Constructor'
import AboutMe from '../components/AboutMe/AboutMe'
import Clients from '../components/Clients'
import Services from '../components/Services'
import Projects from '../components/Projects/Projects'

function About() {
  return (
    <div className='flex flex-col 3xl:gap-[12.5rem] 7md:gap-[9.375rem] 4sm:gap-[7.5rem] 3sm:gap-[5rem]'>
      <div className='relative 3xl:py-[6.875rem] 2lg:py-20 py-[3.75rem]'>
        {/* Изображение с точным позиционированием */}
        <Image
          src={'/images/about.svg'}
          alt='Services'
          width={1543}
          height={641}
          className='h-auto object-cover 3xl:w-[1543px] 2lg:w-[968px] 4sm:w-[440px] 3sm:w-[409px]'
        />
        {/* Секция с текстом, который будет под изображением */}
        <section className='flex flex-col items-center justify-center px-5 7md:px-10 py-0 3xl:-mt-[59px] 2lg:-mt-[44.2px] 4sm:-mt-[31.5px] -mt-[22.2px]'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-wrap justify-center 3xl:w-[1468px] 2lg:w-[892px] 7md:w-[728px] 4sm:w-[440px] 3sm:w-[320px] font-medium 3xl:text-[3.125rem] 2lg:text-[2.5rem] 4sm:text-[1.875rem] 3sm:text-[1.188rem] 3xl:leading-[4.063rem] 2lg:leading-[3.125rem] 4sm:leading-[2.375rem] 3sm:leading-[1.625rem]'>
              The studio's mission is to create functional and aesthetically
              refined brand identities that address key business challenges,
              drive growth, and open new markets. Combining analytics, art,
              and creativity, we deliver unique solutions that achieve
              tangible results.
            </div>
          </div>
        </section>
      </div>
      <div className='3xl:-mb-[12.5rem] 4sm:-mb-[9.375rem] 3sm:-mb-[7.5rem]'>
        <AboutMe />
      </div>
      <Clients />
      <Services sectionStyle='3xl:px-56 2lg:px-40' />
      <Projects />

      <section className='flex 7md:flex-row flex-col items-start justify-center px-[10%] 2lg:gap-48 7md:gap-32 4sm:gap-20 gap-10 text-text 3xl:pb-[12.5rem] 7md:pb-[9.4rem] pb-[6.25rem]'>
        <div>
          <h1 className='2lg:text-[3.125rem]  4sm:text-3xl 4sm:leading-[38px] 2lg:leading-[65px] font-medium 4sm:block hidden whitespace-pre-line 3xl:-mt-[11px] 2lg:-mt-[27px] 7md:-mt-[6px]'>
            {`Request for\n a commercial\n offer`}
          </h1>
          <h1 className='4sm:hidden block text-2xl leading-[30px] font-medium whitespace-pre-line'>
            {`Request for\n a commercial offer`}
          </h1>
        </div>
        <div className='flex-1'>
          <Constructor
            btnBgColor='bg-gray-title'
            btnBgActiveColor='bg-secondary'
          />
        </div>
      </section>
    </div>
  )
}

export default About
