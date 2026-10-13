export type Project = {
    id: number
    title: string
    description: string
    technologies: string[]
    status: string
    githubUrl: string
    demoUrl?: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Online Phone Shop',
        description: 
        'A phone shopping application with a Spring Boot backend and React frontend. The backend manages phone, brand, category, and variant data.',
        technologies: [
            'Java',
            'Spring Boot',
            'React',
            'TypeScript',
            'MySQL'
        ],
        status: 'In Progress',
        githubUrl: 'https://github.com/aungmyoooamo572-web/phone_shop_demo.git',
    },
    {
        id: 2,
        title: 'Bookstore Application',
        description: 
        'A bookstore application for working with book, author, and category data through a React frontend and Spring Boot API.',
        technologies: [
            'Java',
            'Spring Boot',
            'React',
            'MySQL',
        ],
        status: 'Practice Project',
        githubUrl: 'https://github.com/aungmyoooamo572-web/Online-Bookstore.git',
    },
    {
    id: 3,
    title: 'E-Commerce Microservices Platform',
    description:
      'An event-driven distributed system implementing the Saga pattern with RabbitMQ. Features Spring Cloud Gateway, JWT authentication, and isolated MySQL databases for resilient distributed transactions.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'RabbitMQ',
      'MySQL',
      'JWT',
      'Microservices',
    ],
    status: 'Completed',
    githubUrl: 'https://github.com/aungmyoooamo572-web/ecommerce-microservices',
  },
]