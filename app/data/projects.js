const projects = [
  {
    id: 'Arshaluys', // Уникальный идентификатор для проекта
    showOnMainPage: true, // Метка для отображения на главной странице
    mainImage: '/images/projects/cover_arshaluys.jpg', // Главное фото
    title: 'Arshaluys', // Название проекта
    works: ['Logo', 'Product Branding'], // Перечень работ/услуг
    projectPage: {
      pageTitle: 'Project 1 - Detailed View', // Заголовок для страницы проекта
      descriptions: [
        'This is a high-level description of Project 1.', // Краткое описание
        'More details about Project 1, its goals, and the process.', // Дополнительное описание
      ],
      mainPhoto: '/images/projects/project-1/main.jpg', // Главное фото (может быть тем же)
      video: '/videos/projects/project-1/presentation.mp4', // Видео-материал (если есть)
      gallery: [
        '/images/projects/project-1/gallery-1.jpg',
        '/images/projects/project-1/gallery-2.jpg',
        '/images/projects/project-1/gallery-3.jpg',
      ], // Галерея фото
    },
  },
  {
    id: 'Cancer-screening', // Уникальный идентификатор для проекта
    showOnMainPage: true, // Метка для отображения на главной странице
    mainImage: '/images/projects/cover_who.jpg', // Главное фото
    title: 'Cancer screening\ncampaign in Moscow', // Название проекта
    works: ['Key-visual'], // Перечень работ/услуг
    projectPage: {
      pageTitle: 'Project 1 - Detailed View', // Заголовок для страницы проекта
      descriptions: [
        'This is a high-level description of Project 1.', // Краткое описание
        'More details about Project 1, its goals, and the process.', // Дополнительное описание
      ],
      mainPhoto: '/images/projects/project-1/main.jpg', // Главное фото (может быть тем же)
      video: '/videos/projects/project-1/presentation.mp4', // Видео-материал (если есть)
      gallery: [
        '/images/projects/project-1/gallery-1.jpg',
        '/images/projects/project-1/gallery-2.jpg',
        '/images/projects/project-1/gallery-3.jpg',
      ], // Галерея фото
    },
  },
  {
    id: 'Smartstroy', // Уникальный идентификатор для проекта
    showOnMainPage: true, // Метка для отображения на главной странице
    mainImage: '/images/projects/cover_smartstroy.jpg', // Главное фото
    title: 'Smartstroy', // Название проекта
    works: ['Logo', 'Corporate identity'], // Перечень работ/услуг
    projectPage: {
      pageTitle: 'Project 1 - Detailed View', // Заголовок для страницы проекта
      descriptions: [
        'This is a high-level description of Project 1.', // Краткое описание
        'More details about Project 1, its goals, and the process.', // Дополнительное описание
      ],
      mainPhoto: '/images/projects/project-1/main.jpg', // Главное фото (может быть тем же)
      video: '/videos/projects/project-1/presentation.mp4', // Видео-материал (если есть)
      gallery: [
        '/images/projects/project-1/gallery-1.jpg',
        '/images/projects/project-1/gallery-2.jpg',
        '/images/projects/project-1/gallery-3.jpg',
      ], // Галерея фото
    },
  },
  {
    id: 'Test',
    showOnMainPage: false,
    mainImage: '/images/projects/test.jpg',
    title: 'Project 2',
    works: ['Logo', 'Brand Identity', 'Brand Guideline', 'AD Key-Visual'],
    projectPage: {
      pageTitle: 'Project 2 - Discover the Story',
      descriptions: [
        'This project focused on developing a strong visual identity.',
        'Comprehensive branding materials were created for the client.',
      ],
      mainPhoto: '/images/projects/project-2/main.jpg',
      video: null, // Если видео отсутствует
      gallery: [
        '/images/projects/project-2/gallery-1.jpg',
        '/images/projects/project-2/gallery-2.jpg',
      ],
    },
  },
]

export default projects
