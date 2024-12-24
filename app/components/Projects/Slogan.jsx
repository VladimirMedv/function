'use client'

import AnimatedText from '../AnimatedText'

function Slogan() {
  const slogans = [
    'Innovation',
    'Strategy',
    'Identity',
    'Branding',
    'Design',
    'Creation',
    'Solutions',
  ]

  return (
    <div className='relative 3xl:w-[1194px] 2lg:w-[836px] 7md:w-[728px] 4sm:w-[440px] 3sm:w-[340px] 3xl:text-[13.125rem] 2lg:text-[9.188rem] 7md:text-[8rem] 4sm:text-[4.835rem] 3sm:text-[3.5rem] 3xl:leading-[10rem] 2lg:leading-[7rem] 7md:leading-[6.063rem] 4sm:leading-[4.835rem] 3sm:leading-[3.5rem] font-bold -tracking-[0.03em]'>
      <div className='3xl:h-[10rem] 2lg:h-[7rem] 7md:h-[6.5rem] 4sm:h-[4.1rem]'>
        OurCreative
      </div>
      <div className='3xl:h-[10rem] 2lg:h-[7rem] 7md:h-[6.5rem] 4sm:h-[4.1rem]'>
        Approach
      </div>
      <div className='3xl:h-[10rem] 2lg:h-[7rem] 7md:h-[6.5rem] 4sm:h-[4.1rem] flex items-center'>
        <span>to</span>
        <AnimatedText phrases={slogans} />
      </div>
    </div>
  )
}

export default Slogan
