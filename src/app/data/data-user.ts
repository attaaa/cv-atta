import { DataUser } from '../models/data-user.model';

export const dataUser: DataUser = {
  name: 'Muhammad Hatta Eka Putra',
  phone: 6281221447275,
  email: 'hatta.putra@gmail.com',
  experiences: [
    {
      startDate: new Date('08 01 2022'),
      endDate: new Date('10 01 2023'),
      role: 'Software Developer - Frontend',
      company: 'Xtremax Indonesia',
      description:
        'Contributed to the development and enhancement of frontend functionalities, ensuring an optimal user experience. Implemented version control, API integrations, coding standards, and testing practices. Collaborated with cross-functional teams in an Agile environment to deliver high-quality web solutions.',
      listJobDetail: [
        {
          name: 'Version Control Management',
          description:
            'Expertly managed version control using Git, overseeing branch creation, pull requests, code reviews, conflict resolution, and maintaining a structured commit history.',
        },
        {
          name: 'API Integration',
          description:
            'Proficient in integrating and presenting data from APIs using REST and GraphQL.',
        },
        {
          name: 'Coding Standards and Testing',
          description:
            'Followed company coding standards and best practices, developed unit tests using Jest, and created comprehensive documentation to maintain code quality.',
        },
        {
          name: 'Cross-Functional Collaboration',
          description:
            'Collaborated closely with Product Owners, Backend Developers, Designers, and Marketing teams to translate project requirements into interactive web solutions.',
        },
        {
          name: 'Agile Methodologies',
          description:
            'Actively participated in Agile methodologies, utilizing Sprint cycles to ensure timely project deliveries.',
        },
      ],
    },
    {
      startDate: new Date('08 01 2020'),
      endDate: new Date('12 01 2021'),
      role: 'Developer',
      company: 'Telkom Direktorat Digital Business',
      description:
        'Developed RPA technologies, designed a web app using Angular, Express, and MongoDB, and deployed on Linux. Conducted code reviews, debugging, and implemented OCR for enhanced data extraction in RPA workflows.',
      listJobDetail: [
        {
          name: 'RPA Development',
          description:
            'Researched and developed Robotic Process Automation (RPA) technologies to enhance workflow automation.',
        },
        {
          name: 'Web Application Development',
          description:
            'Designed and built a complete web application using Angular, Express, and MongoDB to facilitate RPA operations.',
        },
        {
          name: 'Deployment and Configuration',
          description:
            'Configured and deployed the web application on a Linux Ubuntu server for seamless access and performance.',
        },
        {
          name: 'Code Reviews and Debugging',
          description:
            'Conducted code reviews and debugging to maintain code quality and ensure optimal functionality.',
        },
        {
          name: 'OCR Implementation',
          description:
            'Researched and successfully implemented Optical Character Recognition (OCR) technologies to enhance data extraction and processing capabilities within RPA workflows.',
        },
      ],
    },
    {
      startDate: new Date('02 01 2020'),
      endDate: new Date('08 01 2020'),
      role: 'Developer Intern',
      company: 'Telkom Direktorat Digital Business',
      description:
        'Conducted research, acquired knowledge, and actively contributed to the development of existing RPA tools. Designed, developed, and successfully deployed a Laravel website on a Linux Ubuntu server.',
      listJobDetail: [
        {
          name: 'RPA Development',
          description:
            'Conducted research, acquired knowledge, and actively contributed to the development of existing RPA tools.',
        },
        {
          name: 'Web Development with Laravel',
          description:
            'Designed, developed, and successfully deployed a Laravel website on a Linux Ubuntu server.',
        },
      ],
    },
    {
      startDate: new Date('06 01 2019'),
      endDate: new Date('08 01 2019'),
      role: 'Frontend Developer Intern',
      company: 'Sagara Teknologi Asia',
      description:
        'Developed a fully functional blog website using Quasar, a Vue.js-based framework, resulting in an engaging and responsive user experience. Conducted code reviews to maintain code quality and resolve code conflicts. Managed project development using Git version control.',
      listJobDetail: [
        {
          name: 'Web Development with Quasar',
          description:
            'Developed a fully functional blog website using Quasar, a Vue.js-based framework, resulting in an engaging and responsive user experience.',
        },
        {
          name: 'Code Reviews',
          description:
            'Conducted code reviews to maintain code quality and resolve code conflicts.',
        },
        {
          name: 'Project Management with Git',
          description: 'Managed project development using Git version control.',
        },
      ],
    },
  ],
  educations: [
    {
      startDate: new Date('08 01 2016'),
      endDate: new Date('10 01 2020'),
      schoolName: 'Telkom University',
      major: 'Bachelor of Informatics',
    },
    {
      startDate: new Date('01 01 2013'),
      endDate: new Date('02 01 2016'),
      schoolName: 'SMAN 1 Dompu',
      major: 'Science',
    },
    {
      startDate: new Date('08 01 2010'),
      endDate: null,
      schoolName: 'Everywhere',
      major: 'Self Learning',
    },
  ],
  skills: [
    {
      name: 'HTML',
      description:
        'Proficient in creating structured and semantic markup for web content.',
    },
    {
      name: 'CSS',
      description:
        'Skilled in styling web pages, including layout design and responsive development.',
    },
    {
      name: 'JavaScript',
      description:
        'Extensive experience in client-side scripting, enhancing user interactivity.',
    },
    {
      name: 'Angular',
      description:
        'Adept at building dynamic and scalable web applications using the Angular framework.',
    },
    {
      name: 'React',
      description:
        'Expertise in developing interactive user interfaces with the React library.',
    },
    {
      name: 'VueJS',
      description:
        'Proficient in building reactive and component-based applications using Vue.js.',
    },
    {
      name: 'Git',
      description: '',
    },
    {
      name: 'Docker',
      description: '',
    },
    {
      name: 'Kubernetes',
      description: '',
    },
    {
      name: 'Vs Code',
      description: '',
    },
    {
      name: 'Vs Code',
      description: '',
    },
  ],
  certificates: [],
  portfolios: [
    {
      startDate: new Date('10 01 2023'),
      endDate: new Date('10 20 2023'),
      name: 'Devatta',
      description: 'My personal frontend portfolio project.',
      imageUrl: ['/assets/portfolio/devatta.png'],
      link: 'https://devatta.com',
    },
    {
      startDate: new Date('09 01 2023'),
      endDate: new Date('10 20 2023'),
      name: 'Sunday Creative Lab',
      description:
        'Building portfolio website for small creative agency studio.',
      imageUrl: ['assets/portfolio/sundaystd.png'],
      link: 'https://sundaystd.id',
    },
    {
      startDate: new Date('12 01 2022'),
      endDate: new Date('09 29 2023'),
      name: 'Nimvio',
      description:
        'Contribute as frontend developer in building CMS product by Xtremax.',
      imageUrl: ['assets/portfolio/nimvio.png'],
      link: 'https://nimvio.com',
    },
    {
      startDate: new Date('01 01 2021'),
      endDate: new Date('08 01 2021'),
      name: 'Anthrophile',
      description: 'Transforming UI design into fully functional website.',
      imageUrl: ['assets/portfolio/anthrophile.png'],
      link: 'https://anthrophile.net',
    },
    {
      startDate: new Date('10 01 2020'),
      endDate: new Date('10 01 2023'),
      name: 'Amintas',
      description:
        'Transforming UI design into android app using quasar hybrid framework.',
      imageUrl: ['assets/portfolio/amintas.png'],
      link: '#',
    },
  ],
  // additional data
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muh-hatta/',
    },
    {
      name: 'Github',
      url: 'https://github.com/attaaa',
    },
  ],
};
