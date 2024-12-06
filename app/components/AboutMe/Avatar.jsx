import Image from 'next/image'

export default function Avatar() {
  return (
    <Image
      src='/images/ava_2.jpg'
      alt='Fëdor Beltugov Avatar'
      width={150}
      height={150}
      className='
        w-[5.938rem] h-[5.938rem] 
        sm:w-[8.063rem] sm:h-[8.063rem] 
        md:w-[8.438rem] md:h-[8.438rem] 
        2lg:w-[13.75rem] 2lg:h-[13.75rem]
        rounded-full grayscale transition-all duration-300 hover:grayscale-0'
    />
  )
}
