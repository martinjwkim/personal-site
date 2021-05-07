const cardData = [
  {
    title: 'CLEVER COUNSEL',
    subtitle: 'LEGAL SERVICE PLATFORM',
    description: [
      `Clever Counsel is a full-stack application that I, as part of a team of 6, built from the ground up, to assist Bet Tzedek Legal Services as a centralized platform for case intake and wage claim management in conjunction with the California Labor Commissioner's office. 
      I integrated a web scraping system using Beautiful Soup to verify legal information through the California Secretary of State website. 
      I also assisted in building a scalable API that connected the database to the multi-layered front-end user interfaces for both account management and intake submissions.
      Most recently, I am implementing a serverless crawler using AWS Lambda that performs Selenium related tasks in headless Chrome.`,
    ],
    stack: 'React, Node, Python',
    cover: '/clever-counsel.jpg',
    img_1: '/clevercounsel-1.png',
    img_2: '/clevercounsel-2.png',
    img_3: '/clevercounsel-3.png',
    flipped: true,
  },
  {
    title: 'NUMBERS API',
    subtitle: 'TRIVIA RESOURCE',
    description: [
      `The Numbers API is an open-source project built to provide trivia, math, and date related facts about any number.
      My contribution to the project has consisted of transitioning the outdated front-end from jQuery to a more modern React architecture,
      updating the models used to scrape and generate text files from Wikipedia, and improving documentation surrounding the API for both users and contributers.
      `
    ],
    stack: 'JavaScript, Python, Express',
    github_url: 'https://github.com/rithmschool/numbers_api',
    demo_url: 'https://numbersapi.com/',
    cover: '/numbers-api.jpg',
    img_1: '/numbersapi-1.png',
    img_2: '/numbersapi-2.png',
    img_3: '/numbersapi-3.png',
    flipped: false,
  },
  {
    title: 'JOBLY',
    subtitle: 'PROFESSIONAL NETWORK',
    description: [
      `Jobly is a full-stack web application inspired by Linked-In. 
      The front-end user interface is built as a single page application for seamless navigation which securely connects to the relational database through the backend API which deals with authentication, application logic, and data operations.`
    ],
    stack: 'React, Express, Redux, PostgreSQL',
    github_url: 'https://github.com/martinjwkim/react-jobly',
    demo_url: 'https://google.com/',
    cover: '/jobly.jpeg',
    img_1: '/generic-background.png',
    img_2: '/generic-background.png',
    img_3: '/generic-background.png',
    flipped: true,
  },
  {
    title: 'WARBLER',
    subtitle: 'SOCIAL NETWORK',
    description: [
      '• Built various scalable API routes with Flask for a multi-layered React front-end web user interface.',
      '• Designed a clean user login and form creation using React & CSS that proved user-friendly and simplified overall management.',
      '• Integrated a web scraping system using Beautiful Soup to verify legal information through the California Secretary of State website.'
    ],
    stack: 'Python, Flask, PostgreSQL',
    github_url: 'https://github.com/martinjwkim/warbler',
    demo_url: 'https://martinjwkim-warbler.herokuapp.com',
    cover: '/warbler.jpeg',
    img_1: '/warbler-1.png',
    img_2: '/warbler-4.png',
    img_3: '/warbler-3.png',
    img_4: '/warbler-2.png',
    flipped: false,
  },
  {
    title: 'CRYPTO TICKER',
    subtitle: 'INVESTMENT TRACKER',
    description: [
      '• Built various scalable API routes with Flask for a multi-layered React front-end web user interface.',
      '• Designed a clean user login and form creation using React & CSS that proved user-friendly and simplified overall management.',
      '• Integrated a web scraping system using Beautiful Soup to verify legal information through the California Secretary of State website.'
    ],
    stack: 'Python, Docker',
    github_url: 'https://github.com/martinjwkim/cryptoticker',
    cover: '/crypto-ticker.png',
    img_1: '/generic-background.png',
    img_2: '/generic-background.png',
    img_3: '/generic-background.png',
    flipped: true,
  },
];

export default cardData;