import Image from 'next/image'

export default function Avatar() {
  return (
    <Image
      src='/images/ava_2.jpg'
      alt='Fëdor Beltugov Avatar'
      width={220}
      height={220}
      className='
        w-[4.063rem] h-[4.063rem] 
        sm:w-[5.938rem] sm:h-[5.938rem] 
        md:w-[8.063rem] md:h-[8.063rem] 
        2lg:w-[8.438rem] 2lg:h-[8.438rem] 
        3xl:w-[13.75rem] 3xl:h-[13.75rem]
        rounded-full grayscale transition-all duration-300 hover:grayscale-0
        3xl:-mt-28 2lg:-mt-16 md:-mt-16 sm:-mt-12 -mt-8'
    />
  )
}
