const projects = [
  {
    id: 'Arshaluys', // Уникальный идентификатор для проекта
    showOnMainPage: true, // Метка для отображения на главной странице
    mainImage: '/images/projects/cover_arshaluys.jpg', // Главное фото
    title: 'Arshaluys', // Название проекта
    works: ['Logo', 'Product Branding'], // Перечень работ/услуг
    services: ['/services/corporate-identity', '/services/product-identity'], // Привязка к сервисам
    projectPage: {
      pageTitle: 'Project 1 - Detailed View', // Заголовок для страницы проекта
      descriptions: [
        'This is a high-level description of Project 1.', // Краткое описание
        'More details about Project 1, its goals, and the process.', // Дополнительное описание
      ],
      mainPhoto: '/images/projects/cover_arshaluys.jpg', // Главное фото (может быть тем же)
      video: '/videos/projects/project-1/presentation.mp4', // Видео-материал (если есть)
      gallery: [
        '/images/projects/cover_arshaluys.jpg',
        '/images/projects/cover_arshaluys.jpg',
        '/images/projects/cover_arshaluys.jpg',
      ], // Галерея фото
    },
  },
  {
    id: 'Cancer-screening', // Уникальный идентификатор для проекта
    showOnMainPage: true, // Метка для отображения на главной странице
    mainImage: '/images/projects/cover_who.jpg', // Главное фото
    title: 'Cancer screening\ncampaign in Moscow', // Название проекта
    works: ['Key-visual'], // Перечень работ/услуг
    services: ['/services/personal-identity'], // Привязка к сервисам
    projectPage: {
      pageTitle: 'Project 1 - Detailed View', // Заголовок для страницы проекта
      descriptions: [
        'This is a high-level description of Project 1.', // Краткое описание
        'More details about Project 1, its goals, and the process.', // Дополнительное описание
      ],
      mainPhoto: '/images/projects/cover_who.jpg', // Главное фото (может быть тем же)
      video: '/videos/projects/project-1/presentation.mp4', // Видео-материал (если есть)
      gallery: [
        '/images/projects/cover_who.jpg',
        '/images/projects/cover_who.jpg',
        '/images/projects/cover_who.jpg',
      ], // Галерея фото
    },
  },
  {
    id: 'Smartstroy', // Уникальный идентификатор для проекта
    showOnMainPage: true, // Метка для отображения на главной странице
    mainImage: '/images/projects/cover_smartstroy.jpg', // Главное фото
    title: 'Smartstroy', // Название проекта
    works: ['Logo', 'Corporate identity'], // Перечень работ/услуг
    services: ['/services/personal-identity'], // Привязка к сервисам
    projectPage: {
      pageTitle: 'Project 1 - Detailed View', // Заголовок для страницы проекта
      descriptions: [
        'This is a high-level description of Project 1.', // Краткое описание
        'More details about Project 1, its goals, and the process.', // Дополнительное описание
      ],
      mainPhoto: '/images/projects/cover_smartstroy.jpg', // Главное фото (может быть тем же)
      video: '/videos/projects/project-1/presentation.mp4', // Видео-материал (если есть)
      gallery: [
        '/images/projects/cover_smartstroy.jpg',
        '/images/projects/cover_smartstroy.jpg',
        '/images/projects/cover_smartstroy.jpg',
      ], // Галерея фото
    },
  },
  {
    id: 'Caspian gold',
    showOnMainPage: false,
    mainImage: '/images/projects/cover_caspian-gold.jpg',
    title: 'Caspian gold',
    works: ['Logo', 'Brand Identity', 'Brand Guideline', 'AD Key-Visual'],
    services: ['/services/personal-identity'], // Привязка к сервисам
    projectPage: {
      pageTitle: 'Project 2 - Discover the Story',
      descriptions: [
        'This project focused on developing a strong visual identity.',
        'Comprehensive branding materials were created for the client.',
      ],
      mainPhoto: '/images/projects/cover_caspian-gold.jpg',
      video: null, // Если видео отсутствует
      gallery: [
        '/images/projects/cover_caspian-gold.jpg',
        '/images/projects/cover_caspian-gold.jpg',
      ],
    },
  },
]

export default projects
