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
        <div className='absolute bottom-10 left-10 hidden group-hover:block'>
          <h2
            className='text-white 2lg:text-[50px] text-3xl  2lg:leading-[62px] leading-9'
            style={{ whiteSpace: 'pre-line' }}
          >
            {title}
          </h2>
          <p className='text-white 2lg:text-[26px] text-base font-light 2lg:leading-8 leading-5'>
            {works.join(', ')}
          </p>
        </div>
      </Link>
    </article>
  )
}
