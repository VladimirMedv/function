import Image from 'next/image'

export default function Hero() {
  return (
    <section className='relative bg-primary text-text py-16 overflow-hidden'>
      {/* Фоновое изображение */}
      <Image
        src='/images/logo-f_orange.svg'
        alt='logo'
        width={556}
        height={877}
        className='absolute inset-0 mx-auto w-[556px] h-[877px] z-0 hidden 2lg:block'
      />

      {/* Заголовки */}
      <div className='relative z-10 text-center -space-y-44'>
        {' '}
        {/* Минимальный отступ между заголовками */}
        <h1 className='2lg:text-[15rem] md:text-[9.75rem] font-bold translate-x-[-15%]'>
          Think.
        </h1>
        <h1 className='2lg:text-[15rem] md:text-[9.75rem] font-bold translate-x-[20%]'>
          Create.
        </h1>
        <h1 className='2lg:text-[15rem] md:text-[9.75rem] font-bold translate-x-[-10%]'>
          Function.
        </h1>
      </div>

      {/* Описание */}
      <p className='relative z-10 text-lg max-w-5xl mx-auto mt-3 2lg:text-[2.5rem] leading-[3.125rem]'>
        Functional design for solving practical business challenges, driving
        growth, and entering new markets.
      </p>
    </section>
  )
}
