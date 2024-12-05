import Link from 'next/link' // Импортируем компонент Link для навигации

export default function Services() {
  return (
    <section className='bg-primary text-text py-16 flex items-center justify-center'>
      <div className='2lg:w-[1468px] max-2lg:w-[890px] max-md:w-[728px] max-sm:w-[440px] mx-auto'>
        <div className='flex items-center space-x-2 text-3xl 2lg:text-5xl flex-wrap'>
          <h2 className=' font-normal inline-block'>Services</h2>
          {/* Список сервисов с переходом на страницы */}
          <Link
            href='/services/corporate-identity'
            className='hover:underline hover:text-secondary'
            aria-label='Corporate identity'
            title='Corporate identity'
          >
            Corporate identity
          </Link>
          ,&nbsp;
          <Link
            href='/services/product-identity'
            className='hover:underline hover:text-secondary'
            aria-label='Product identity'
            title='Product identity'
          >
            Product identity
          </Link>
          ,&nbsp;
          <Link
            href='/services/personal-identity'
            className='hover:underline hover:text-secondary'
            aria-label='Personal identity'
            title='Personal identity'
          >
            Personal identity
          </Link>
          ,&nbsp;
          <Link
            href='/services/brand-support'
            className='hover:underline hover:text-secondary'
            aria-label='Brand support'
            title='Brand support'
          >
            Brand support
          </Link>
          ,&nbsp;
          <Link
            href='/services/naming'
            className='hover:underline hover:text-secondary'
            aria-label='Naming'
            title='Naming'
          >
            Naming
          </Link>
          ,&nbsp;
          <Link
            href='/services/logo'
            className='hover:underline hover:text-secondary'
            aria-label='Logo'
            title='Logo'
          >
            Logo
          </Link>
          ,&nbsp;
          <Link
            href='/services/packaging'
            className='hover:underline hover:text-secondary'
            aria-label='Packaging'
            title='Packaging'
          >
            Packaging
          </Link>
          ,&nbsp;
          <Link
            href='/services/brand-guidelines'
            className='hover:underline hover:text-secondary'
            aria-label='Brand guidelines'
            title='Brand guidelines'
          >
            Brand guidelines
          </Link>
          ,&nbsp;
          <Link
            href='/services/ui-ux'
            className='hover:underline hover:text-secondary'
            aria-label='UI/UX'
            title='UI/UX'
          >
            UI/UX
          </Link>
          ,&nbsp;
          <Link
            href='/services/promo-design'
            className='hover:underline hover:text-secondary'
            aria-label='Promo design'
            title='Promo design'
          >
            Promo design
          </Link>
          ,&nbsp;
          <Link
            href='/services/content-design'
            className='hover:underline hover:text-secondary'
            aria-label='Content design'
            title='Content design'
          >
            Content design
          </Link>
        </div>
      </div>
    </section>
  )
}
