import Link from 'next/link' // Импортируем компонент Link для навигации

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (typeof window !== 'undefined' ? window.location.origin : '')

export const metadata = {
  title: 'Services | Creative Agency',
  description:
    'Explore our wide range of services, including corporate identity, product identity, branding, UI/UX design, and more.',
  keywords: [
    'services',
    'corporate identity',
    'product identity',
    'branding',
    'UI/UX design',
    'logo design',
    'packaging',
    'content design',
  ],
  openGraph: {
    title: 'Services | Creative Agency',
    description:
      'Explore our wide range of services, including corporate identity, product identity, branding, UI/UX design, and more.',
    url: `${siteUrl}/services`,
    type: 'website',
  },
}

export default function Services() {
  return (
    <section className='bg-primary text-text py-16 flex items-center justify-center 2lg:px-56 md:px-36 px-[20px]'>
      <div className='2lg:w-[1468px] max-2lg:w-[890px] max-md:w-[728px] max-sm:w-[440px] mx-auto'>
        <div
          className='flex items-center text-3xl 2lg:text-5xl flex-wrap 2lg:leading-[4.063rem] leading-[2.375rem]'
          style={{ wordBreak: 'keep-all', wordWrap: 'break-word' }} // Сохраняем целостность слов и предложений
        >
          <h2 className='font-normal inline-block mr-2 text-gray-title'>
            Services
          </h2>
          {/* Список сервисов с переходом на страницы */}
          {[
            {
              href: '/services/corporate-identity',
              label: 'Corporate identity',
            },
            { href: '/services/product-identity', label: 'Product identity' },
            { href: '/services/personal-identity', label: 'Personal identity' },
            { href: '/services/brand-support', label: 'Brand support' },
            { href: '/services/naming', label: 'Naming' },
            { href: '/services/logo', label: 'Logo' },
            { href: '/services/packaging', label: 'Packaging' },
            { href: '/services/brand-guidelines', label: 'Brand guidelines' },
            { href: '/services/ui-ux', label: 'UI/UX' },
            { href: '/services/promo-design', label: 'Promo design' },
            { href: '/services/content-design', label: 'Content design' },
          ].map((service, index, array) => (
            <span
              key={index}
              className='inline-block'
            >
              <Link
                href={service.href}
                className='hover:underline hover:text-secondary whitespace-nowrap' // Предотвращаем переносы внутри слов
                aria-label={service.label}
                title={service.label}
              >
                {service.label}
              </Link>
              {index < array.length - 1 && <span>,&nbsp;</span>}{' '}
              {/* Добавляем запятую, если элемент не последний */}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
