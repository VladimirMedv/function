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
            { text: 'Corporate identity', url: 'https://link1.com' },
            { text: 'Product identity', url: 'https://link2.com' },
            { text: 'Logo', url: 'https://link3.com' },
          ],
        },
      },
    ],
  },
  {
    href: '/services/logo',
    label: 'Logo',
    description: `Designing a logo that captures the brand’s identity and communicates its core message effectively and distinctively.`,
    steps: [
      // Add specific steps for Logo here
    ],
  },
  {
    href: '/services/packaging',
    label: 'Packaging',
    description: `Creating impactful packaging designs that attract customers, enhance the unboxing experience, and align with the brand’s identity.`,
    steps: [
      // Add specific steps for Packaging here
    ],
  },
  {
    href: '/services/brand-guidelines',
    label: 'Brand guidelines',
    description: `Developing comprehensive brand guidelines to ensure consistency in the use of visual elements and communication strategies.`,
    steps: [
      // Add specific steps for Brand Guidelines here
    ],
  },
  {
    href: '/services/ui-ux',
    label: 'UI/UX',
    description: `Designing user interfaces and experiences that prioritize usability, aesthetics, and user satisfaction.`,
    steps: [
      // Add specific steps for UI/UX here
    ],
  },
  {
    href: '/services/promo-design',
    label: 'Promo design',
    description: `Creating promotional designs that effectively convey the brand’s message and engage the target audience.`,
    steps: [
      // Add specific steps for Promo Design here
    ],
  },
  {
    href: '/services/content-design',
    label: 'Content design',
    description: `Crafting visually appealing and engaging content that aligns with the brand’s identity and goals.`,
    steps: [
      // Add specific steps for Content Design here
    ],
  },
]

export default SERVICES_DATA
