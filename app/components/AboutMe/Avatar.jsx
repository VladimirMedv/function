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
        4sm:w-[5.938rem]  4sm:h-[5.938rem] 
        7md:w-[8.063rem] 7md:h-[8.063rem] 
         
        2lg:w-[13.75rem] 2lg:h-[13.75rem]
        rounded-full grayscale transition-all duration-300 hover:grayscale-0
        2lg:-mt-28 7md:-mt-16 4sm:-mt-12 -mt-8' //2lg:w-[8.438rem] 2lg:h-[8.438rem]  2lg:-mt-16
    />
  )
}
