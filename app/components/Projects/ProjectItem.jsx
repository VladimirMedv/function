import Link from 'next/link'
import Image from 'next/image'

export default function ProjectItem({ id, mainImage, title, works }) {
  return (
    <article className='relative group w-full overflow-hidden 7md:rounded-[5px] rounded-[6.51px] 2lg:h-auto 4sm:h-[416px] 3sm:h-[340px]'>
      {/* Ссылка на страницу проекта */}
      <Link
        href={`/projects/${id}`}
        className='block'
      >
        {/* Изображение на всю ширину экрана */}
        <Image
          src={mainImage}
          alt={`${title} main image`}
          width={1920} // Задаем реальную ширину для Next.js Image
          height={1080} // Задаем пропорциональную высоту
          className='w-full h-full object-cover group-hover:scale-105 transition-all duration-[850ms] ease-in-out 2lg:h-auto 4sm:h-[416px] 3sm:h-[340px]'
          priority={true} // SEO: Высокий приоритет загрузки
        />
        {/* Текст в левом нижнем углу */}
        <div className='absolute 3xl:bottom-[60px] 3xl:left-[60px] 7md:bottom-[40px] 7md:left-[40px] bottom-5 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out'>
          <h2
            className='text-text 3xl:text-[3.125rem] text-3xl 3xl:leading-[62.85px] leading-[37.71px] font-medium'
            style={{ whiteSpace: 'pre-line' }}
          >
            {title}
          </h2>
          <p className='text-text 3xl:text-[1.625rem] text-base font-normal 3xl:leading-[2.043] leading-[20.11px] tracking-[-0.03em]'>
            {works.join(', ')}
          </p>
        </div>
      </Link>
    </article>
  )
}
