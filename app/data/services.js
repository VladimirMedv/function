const SERVICES_DATA = [
  {
    href: '/services/corporate-identity',
    label: 'Corporate identity',
    description: `Creating a brand identity that reflects the uniqueness of the brand and strengthens its competitive advantages. A complete process — from research and concept development to finalized materials and brand guidelines — aimed at shaping a cohesive and recognizable brand image.`,
    steps: [
      {
        title: 'Research and Analysis',
        details: `Brand, target audience, competitor, market, and current trend analysis. Creation of a mood board to define the visual direction of the brand identity.`,
        duration: '20+ business days',
      },
      {
        title: 'Brand Visual Concept',
        details: `Development of the brand's visual concept: logo, brand mark, color palette, typography, graphic elements, visual patterns, photographic style, and brand blocks.`,
        duration: '15+ business days',
        revisions: '1 concept, 2 rounds of revisions',
      },
      {
        title: 'Creation of Brand Materials',
        details: `Adaptation of the brand’s visual concept for various channels and materials, tailored to the brand’s characteristics and objectives. This includes the creation of business documentation, corporate identity items, presentations, master mockups, advertising materials, and other brand elements.`,
        duration: '10+ business days',
      },
      {
        title: 'Brand Guidelines and Materials',
        details: `Development of a brand guidelines document with recommendations on the use of visual elements, and the systematization of all brand assets, including logos, fonts, color schemes, and other components.`,
        duration: '8+ business days',
        note: {
          note_links: [
            {
              text: 'Click here to view a sample brand guidelines PDF.',
              url: 'https://link.com',
            },
          ],
        },
      },
    ],
  },
  {
    href: '/services/product-identity',
    label: 'Product Identity',
    description: `Creating an identity that reflects the uniqueness of the product and enhances its competitive advantages in the market. A complete process — from research and concept development to preparation of materials and guidelines — aimed at forming a cohesive and recognizable brand image.`,
    steps: [
      {
        title: 'Research and Analysis',
        details: `Analyzing the product, target audience, competitors, and market trends. Assessing unique characteristics and competitive advantages. Defining the visual and positioning direction of the brand and creating a mood board that reflects the conceptual foundation of the identity.`,
        duration: '15+ business days',
      },
      {
        title: 'Brand Visual Concept',
        details: `Creating the visual concept of the product identity: logo, brand mark, packaging for various product lines and sizes, including material selection and the creation of graphic elements for each type of packaging.`,
        duration: '25+ business days',
        revisions: '1 concept, 2 rounds of revisions',
      },
      {
        title: 'Creation of Brand Materials',
        details: `Adapting the visual concept of the product identity for different product lines and packaging sizes, including the development of mandatory and graphic elements, packaging layouts, and transport packaging. Preparing POS materials, advertising elements, and other branding assets.`,
        duration: '15+ business days',
        revisions: 'от $1500',
      },
      {
        title: 'Brand Guidelines and Materials',
        details: `Developing brand guidelines with recommendations on how to use visual elements of the product identity, and organizing all source materials, including logos, fonts, color schemes, packaging layouts, and other components.`,
        duration: '8+ business days',
        revisions: 'от $1500',
      },
    ],
  },
  {
    href: '/services/personal-identity',
    label: 'Personal identity',
    description: `Creation of a unique identity that reflects the individuality, values, and professional strengths of the person. A full cycle of work — from in-depth research of the individual and target audience to the development of visual elements and a brand guideline — aimed at shaping a cohesive, recognizable image and strengthening the personal brand.`,
    steps: [
      {
        title: 'In-Depth Interview and Research',
        details: `Conducting a detailed and expert interview to explore the individual’s personality, values, goals, and professional environment. Analysis of the target audience and competitors. Based on this data, the conceptual foundation of the identity and a mood board are created.`,
        duration: '10+ business days',
      },
      {
        title: 'Development of Visual Elements',
        details: `Creating a logo, color palette, typography, graphic elements, and photo style that best reflect the individuality and values of the brand.`,
        duration: '15+ business days',
        revisions: '1 concept, 2 rounds of revisions',
      },
      {
        title: 'Brand Guidelines and Materials',
        details: `Adapting the visual concept to various media, including social media design, publication layouts, presentations, business documentation, packaging, and other materials to ensure brand consistency. Developing a guideline with recommendations for using the visual components of the brand and organizing materials for convenient use.`,
        duration: '8+ business days',
      },
    ],
  },
  {
    href: '/services/brand-support',
    label: 'Brand support',
    description: `Brand support and development throughout its lifecycle. Ensuring the long-term relevance of the identity through regular monitoring, adaptation, and expansion. This includes overseeing brand standards compliance, market perception analysis, and staff training to ensure proper application of the brand in their activities.`,
    steps: [
      {
        title: 'Brand Supervision and Analysis',
        details: `Ensuring correct application of brand elements across various media and communications in accordance with established standards, as well as regular assessment ofbrand perception by consumers and analysis of the competitive environment to make timely strategic adjustments.`,
      },
      {
        title: 'Brand Adaptation and Expansion',
        details: `Creating a logo, color palette, typography, graphic elements, and photo style that best reflect the individuality and values of the brand.`,
        duration: '15+ business days',
        revisions: '1 concept, 2 rounds of revisions',
      },
      {
        title: 'Employee Training and Support',
        details: `Conducting training sessions and workshops for employees to ensure they properly represent and utilize the brand in their activities.`,
      },
    ],
  },
  {
    href: '/services/naming',
    label: 'Naming',
    description: `Development of unique and strategically appropriate names for brands, products, or services. Market and competitor analysis is conducted, and creative techniques are used to create names aligned with project goals. Evaluation and validation of options ensure their uniqueness and strategic relevance.`,
    steps: [
      {
        title: 'Briefing and Research',
        details: `Discussion of project goals, brand values, and target audience expectations during a detailed briefing. In-depth research of the product, market, and competitors to identify unique opportunities and niches.`,
        duration: '7+ business days',
      },
      {
        title: 'Name Generation',
        details: `Creation of name options using creative methods: associative and verbal mixing, generating new words by combining existing ones, utilizing cultural and historical references, as well as competitor analysis to ensure uniqueness. Final name options are presented with a rationale for their strategic relevance, along with an extended evaluation based on internal analysis, testing, and expert opinions.`,
        duration: '10+ business days',
        revisions: '20 options, 2 rounds of revisions',
      },
      {
        title: 'Trademark Check and Registration (Optional)',
        details: `Checking the availability of trademarks. Full legal registration is available through trusted partners in international markets.\n\nThe next stage of brand development:`,
        note: {
          note_links: [
            { text: 'Corporate identity', url: '/services/corporate-identity' },
            { text: 'Product identity', url: '/services/product-identity' },
            { text: 'Logo', url: '/services/logo' },
          ],
        },
      },
    ],
  },
  {
    href: '/services/logo',
    label: 'Logo',
    description: `Creation of a logo that accurately reflects the values and key characteristics of the brand. Development of concepts, including the selection of color schemes, typography, and stylistic elements, followed by the presentation of final versions adapted for different formats and media. The result is a logo that effectively conveys the brand's identity and serves as the foundation for further visual communication.`,
    steps: [
      {
        title: 'Briefing and Research',
        details: `Conducting a briefing to define the project's goals and the brand's values. Analyzing the audience, competitors, and cultural context to identify unique opportunities. Creating a mood board to visualize the brand’s style and character.`,
        duration: '7+ business days',
      },
      {
        title: 'Logo Development',
        details: `Creation of a brand mark and logo: refining concepts, including color solutions, typography, and stylistic features. Presentation of final variants, including the brand mark, logo, permissible compositions, and color variations, adapted for various formats and media.`,
        duration: '12+ business days',
        revisions: '3 options, 1 rounds of revisions',
      },
      {
        title: 'Logobook and Logo Assets',
        details: `Development of a logobook with recommendations on logo usage across various media and in different formats and scales. Includes safe zone guidelines, typography, color palette, and source files in both vector and raster formats.`,
        duration: '5+ business days',
        note: {
          note_links: [
            {
              text: 'Click here to view a sample logobook PDF.',
              url: 'https://link.com',
            },
          ],
        },
        details_sub: 'The next stage of brand development:',
        note_sub: {
          note_links: [
            { text: 'Corporate identity', url: '/services/corporate-identity' },
            { text: 'Product identity', url: '/services/product-identity' },
            {
              text: 'Personal identity',
              url: '/services/personal-identity',
            },
          ],
        },
      },
    ],
  },
  {
    href: '/services/packaging',
    label: 'Packaging',
    description: `Comprehensive packaging development: from product, audience, and competitor analysis to the preparation of production-ready materials. Packaging is designed to reflect brand identity, highlight competitive advantages, and meet market requirements. The design is adapted to various sizes and formats, ensuring versatility and brand consistency across all levels of communication.`,
    steps: [
      {
        title: 'Research and Analysis',
        details: `Evaluation of the product, target audience, competitors, and market trends to identify unique characteristics and competitive advantages. Development of the brand’s visual and positioning direction, including the creation of a mood board that reflects the conceptual foundation of the brand identity.`,
        duration: '15+ business days',
      },
      {
        title: 'Concept and Design Development',
        details: `Development of conceptual solutions that reflect the brand identity, including the selection of materials, shapes, and functional features of the packaging. Detailed elaboration of graphic elements: logo, brand mark, typography, and color palette.`,
        duration: '25+ business days',
        revisions: '1 concept, 2 rounds of revisions',
      },
      {
        title: 'Design Adaptation and Prepress Preparation',
        details: `Adaptation of the packaging design for product lines, sizes, and types of products. Preparation of final layouts and technical files for printing, including specifications required for production.`,
        duration: '15+ business days',
      },
      {
        title: 'Brand Guidelines and Materials',
        details: `Development of a guide with recommendations for packaging usage, including logo placement, typography, color palette, and other design elements. Ensuring compliance with brand standards at all stages of production and application.`,
        duration: '8+ business days',
      },
    ],
  },
  {
    href: '/services/brand-guidelines',
    label: 'Brand guidelines',
    description: `The development of Brand Guidelines is a key step in maintaining brand integrity. It includes the analysis of visual solutions, structuring of brand elements, and preparation of source materials. The guidelines standardize the application of brand components, ensuring consistency and brand recognition.`,
    steps: [
      {
        title: 'Style Analysis and Standardization',
        details: `Audit of layouts and visual solutions. Identification of key elements, development of stylistic solutions, and rules for their application to form a unified brand concept.`,
        duration: '3+ business days',
      },
      {
        title: 'Brand Guidelines Structure Development',
        details: `Structuring the Brand Guidelines: positioning, values, and key brand messages. Development of recommendations for the application of the logo, fonts, color palette, graphics, and other elements. Definition of a set of rules and technical requirements for each category.`,
        duration: '4+ business days',
      },
      {
        title: 'Material Adaptation and Description',
        details: `Adaptation of graphics and layouts for different formats and media in a unified style. Detailed description of layouts and materials with recommendations for application and production.`,
        duration: '4+ business days',
      },
      {
        title: 'Preparation of Source Materials',
        details: `Development of source files for logos, fonts, graphics, and other elements. Ensuring compliance with technical requirements for print and digital production.`,
        duration: '4+ business days',

        details_sub:
          'The guidelines ensure brand integrity and standardize the use of visual elements across all communication levels. The development of Brand Guidelines is a key part of comprehensive work in creating',
        note_sub: {
          note_links: [
            { text: 'Corporate identity', url: '/services/corporate-identity' },
            { text: 'Product identity', url: '/services/product-identity' },
            {
              text: 'Personal identity',
              url: '/services/personal-identity',
            },
          ],
        },
      },
    ],
  },
  {
    href: '/services/ui-ux',
    label: 'UI/UX',
    description: `UI/UX design focuses on creating convenient, functional, and visually refined digital products. This includes the development of landing pages, corporate websites, e‑commerce platforms, mobile, and web applications tailored to the brand's goals.`,
    steps: [
      {
        title: 'Research and Analysis',
        details: `Assessment of the target audience, competitive environment, and industry trends. Formulating business objectives and defining functional requirements for further development.`,
        duration: '5+ business days',
      },
      {
        title: 'Wireframing and User Flow',
        details: `Creation of wireframes for key screens and user flow diagrams, defining navigation logic and user experience.`,
        duration: '10+ business days',
      },
      {
        title: 'Content and Copywriting',
        details: `Creation and integration of content (text, images, videos). Adapting materials for devices and platforms while considering the brand's concept. Developing text content and forming media assets.`,
        duration: '12+ business days',
      },
      {
        title: 'Interface Design Development',
        details: `Designing key screens and product pages, including the homepage, internal templates, forms, and interface elements. Designing with the brand's visual characteristics, functionality, and user convenience in mind. This includes responsive design, dynamic content animation, and screen transitions.`,
        duration: '20+ business days',
      },
      {
        title: 'Development and Integration',
        details: `Implementing UI/UX design into the product, including responsive layout and programming, using advanced technologies to create a functional digital product.`,
        duration: '25+ business days',
      },
      {
        title: 'Testing, Optimization, and Deployment',
        details: `Testing on various devices to identify functional and operational defects. System optimization, error correction, and content finalization. Deploying the product on target platforms with ensured stable performance.`,
        duration: '10+ business days',
      },
      {
        title: 'Post-Launch Support',
        details: `Providing technical support after the product launch: monitoring, identifying and fixing errors, optimizing functionality and performance based on analytics and user feedback. Adapting the product to changing requirements and continuous improvement.`,
      },
    ],
  },
  {
    href: '/services/promo-design',
    label: 'Key Visual',
    description: `The Key Visual strengthens the brand identity, expressing its uniqueness through visual elements and creating a unified concept for all advertising materials. The development of the key visual image complements the existing identity, enhancing brand recognition and maintaining consistency across all communication channels.`,
    steps: [
      {
        title: 'Research and Analysis',
        details: `Market research, target audience analysis, and competitor evaluation. Identifying audience needs and analyzing marketing trends. The results form the basis for creating a unique visual identity that reinforces the brand's positioning.`,
        duration: '7+ business days',
      },
      {
        title: 'Strategy and Concept',
        details: `Development of the strategic foundation and key message that reflects the brand's values. Creation of a creative concept based on unique metaphors to effectively convey the core ideas.`,
        duration: '10+ business days',
      },
      {
        title: 'Key Visual Development',
        details: `Creation of a visual image that complements the existing brand identity and strengthens its strategic message, forming a cohesive style that supports the brand’s perception.`,
        duration: '12+ business days',
        revisions: '3 options, 1 rounds of revisions',
      },
      {
        title: 'Adaptation and Preparation of Materials',
        details: `Adaptation of the Key Visual for various formats and communication channels: digital media, outdoor advertising, print materials, events, and other communications. Preparation of source files for use across all platforms, taking into account the requirements of each format.`,
        duration: '5+ business days',
      },
    ],
  },
  {
    href: '/services/content-design',
    label: 'Content design',
    description: `Creating unified content for all platforms and social networks, forming a system of materials that ensures brand identity. Designing profiles, posts, stories, highlights, and other formats in accordance with the brand's identity.`,
    steps: [
      {
        title: 'Analysis and Concept Formation',
        details: `Researching the brand, its audience, and competitive landscape. Defining key goals, selecting social networks and platforms for communication. Developing a visual concept that strengthens the brand identity, taking platform specifics into account.`,
        duration: '7+ business days',
      },
      {
        title: 'Creative Development',
        details: `Creating content in the unified brand style, ensuring recognition across all channels. Forming a content system with different types of materials. Designing profiles, posts, stories, highlights, and other formats that maintain the visual unity of the brand.`,
        duration: '10+ business days',
        revisions: '2 options, 1 rounds of revisions',
      },
      {
        title: 'Content Adaptation and Preparation',
        details: `Adapting content to the requirements of social networks and platforms. Preparing source files and templates according to technical specifications.`,
        duration: '5+ business days',
      },
    ],
  },
]

export default SERVICES_DATA
