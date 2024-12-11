import Link from 'next/link'
import Image from 'next/image'

export default function ProjectItem({ id, mainImage, title, works }) {
  return (
    <article className='relative group w-full overflow-hidden 2lg:rounded-[20px] sm:rounded-[10px] max-sm:rounded-[6.51px] 2lg:h-[704px] max-md:w-[728px] sm:h-[416px] max-sm:h-[340px]'>
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
          className='w-full h-full object-cover group-hover:scale-105 transition-all duration-[850ms] ease-in-out 2lg:h-[704px] max-md:w-[728px]  sm:h-[416px] max-sm:h-[340px]'
          priority={true} // SEO: Высокий приоритет загрузки
        />
        {/* Текст в левом нижнем углу */}
        <div className='absolute bottom-[60px] left-[60px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out'>
          <h2
            className='text-text text-3xl leading-[37.71px] font-medium'
            style={{ whiteSpace: 'pre-line' }}
          >
            {title}
          </h2>
          <p className='text-text text-base font-normal leading-[20.11px] tracking-[-0.03em]'>
            {works.join(', ')}
          </p>
        </div>
      </Link>
    </article>
  )
}
