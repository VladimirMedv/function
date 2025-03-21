import Image from 'next/image'

export default function Hero() {
  return (
    <section className='relative bg-primary text-text py-16 overflow-hidden'>
      {/* Заголовки с анимацией */}
      <div className='relative z-10 text-center -space-y-32 max-7md:-space-y-20 max-4sm:-space-y-12'>
        <h1 className='2lg:text-[15rem] 7md:text-[9.75rem] max-7md:text-[6rem] max-4sm:text-[3.5rem] font-bold translate-x-[-15%] opacity-0 animate-[appear_1s_ease-out_forwards]'>
          Think.
        </h1>
        <h1 className='2lg:text-[15rem] 7md:text-[9.75rem] max-7md:text-[6rem] max-4sm:text-[3.5rem] font-bold translate-x-[20%] opacity-0 animate-[appear_1s_ease-out_0.3s_forwards]'>
          Create.
        </h1>
        <h1 className='2lg:text-[15rem] 7md:text-[9.75rem] max-7md:text-[6rem] max-4sm:text-[3.5rem] font-bold translate-x-[-10%] opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]'>
          Function.
        </h1>
      </div>

      {/* Описание */}
      <p className='relative z-10 text-lg max-w-5xl mx-auto mt-3 2lg:text-[2.5rem] max-7md:text-[1.5rem] max-4sm:text-[1rem] leading-[3.125rem] max-7md:leading-[2rem] max-4sm:leading-[1.5rem] font-medium text-center px-4'>
        Functional design for solving practical business challenges, driving
        growth, and entering new markets.
      </p>
    </section>
  )
}
