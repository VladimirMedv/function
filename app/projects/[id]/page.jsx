import { notFound } from 'next/navigation'
import Image from 'next/image'
import projects from '../../data/projects'

// Генерация метаданных для SEO
export async function generateMetadata({ params }) {
  const { id } = await params

  // Ищем проект по id
  const project = projects.find((proj) => proj.id === id)

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    }
  }

  const { title, mainImage } = project
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (typeof window !== 'undefined' ? window.location.origin : '')

  return {
    title: `${title} - Projects`,
    description: `Explore the details of ${title}. Check out the services, gallery, and video of this project.`,
    keywords: `${title}, projects, portfolio, web development`,
    openGraph: {
      title: title,
      description: `Explore the details of ${title}.`,
      images: [
        {
          url: mainImage,
          width: 1920,
          height: 1080,
          alt: `${title} main image`,
        },
      ],
      type: 'website',
      url: `${siteUrl}/projects/${id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: `Explore the details of ${title}.`,
      image: mainImage,
    },
  }
}

export default async function ProjectPage({ params }) {
  const { id } = await params

  // Ищем проект по id
  const project = projects.find((proj) => proj.id === id)

  if (!project) {
    notFound() // Возвращаем 404, если проект не найден
  }

  const { title, mainImage, works, projectPage } = project
  const { descriptions, gallery, video } = projectPage

  return (
    <main className='3xl:py-[12.5rem] 7md:py-[9.375rem] py-[7.5rem] px-10 bg-primary text-text'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>{title}</h1>
        <Image
          src={mainImage}
          alt={`${title} main image`}
          width={1920}
          height={1080}
          className='w-full h-auto object-cover rounded-lg mb-8'
          priority
        />
        <h2 className='text-2xl font-semibold mb-4'>Services:</h2>
        <ul className='list-disc ml-6 text-lg mb-8'>
          {works.map((work, index) => (
            <li key={index}>{work}</li>
          ))}
        </ul>
        {descriptions.map((text, index) => (
          <p
            key={index}
            className='text-lg leading-8 mb-6'
          >
            {text}
          </p>
        ))}
        {gallery && gallery.length > 0 && (
          <div className='mt-10'>
            <h2 className='text-2xl font-semibold mb-4'>Gallery:</h2>
            <div className='grid grid-cols-1 7md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {gallery.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={600}
                  height={400}
                  className='w-full h-auto object-cover rounded-lg'
                />
              ))}
            </div>
          </div>
        )}
        {video && (
          <div className='mt-10'>
            <h2 className='text-2xl font-semibold mb-4'>Video:</h2>
            <video
              controls
              className='w-full rounded-lg'
            >
              <source
                src={video}
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </main>
  )
}
