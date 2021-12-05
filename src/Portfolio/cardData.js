const cardData = [
  {
    title: 'RAINFALL',
    subtitle: 'DATA INTELLIGENCE PLATFORM',
    description: [
      `
      Rainfall is a decentralized platform that unlocks the financial value in the digital life of every connected individual by leveraging edge-based AI and privacy-preserving blockchain technology.
      I built and improved numerous sections on the front-end of the company's website, including the entirety of the investor's page where interested entities are able to submit investment preferences, which is then automatically stored on a spreadsheet and confirmed by the investor through an HTML email.
      `,
    ],
    stack: 'React, Node',
    full_stack: 'React, Node, CSS, HTML',
    demo_url: 'https://rainfall.one',
    cover: '/rainfall.jpg',
    imgs: ['/rainfall-1.png','/rainfall-2.png','/rainfall-7.png','/rainfall-8.png','/rainfall-3.png','/rainfall-4.png','/rainfall-6.png','/rainfall-5.png'],
    flipped: false,
  },
  {
    title: 'CLEVER COUNSEL',
    subtitle: 'LEGAL SERVICE PLATFORM',
    description: [
      `Clever Counsel is a full-stack application that I, as part of a team of 6, built from the ground up, to assist Bet Tzedek Legal Services as a centralized platform for case intake and wage claim management in conjunction with the California Labor Commissioner's office. 
      I integrated a web scraping system using Beautiful Soup to verify legal information through the California Secretary of State website and assisted in building a scalable API that connected the database to the multi-layered front-end user interfaces for both account management and intake submissions.
      `,
    ],
    stack: 'React, Node, Python',
    full_stack: 'React, Node, Python, Flask, MySQL, CSS, Selenium, Beautiful Soup, AWS Lambda, Formik',
    cover: '/bet-tzedek.jpg',
    imgs: ['/clevercounsel-1.png','/clevercounsel-2.png','/clevercounsel-3.png'],
    flipped: true,
  },
  {
    title: 'NUMBERS API',
    subtitle: 'TRIVIA RESOURCE',
    description: [
      `The Numbers API is an open-source project built to provide trivia, math, and date related facts about any number.
      My contribution to the project has consisted of transitioning the outdated front-end from jQuery to a more modern React architecture,
      updating the models used to scrape and generate text files from Wikipedia, and improving documentation surrounding the API for both users and contributors.
      `
    ],
    stack: 'JavaScript, Python, Express',
    full_stack: 'React, JavaScript, Python, Node, Express, jQuery, CSS',
    github_url: 'https://github.com/rithmschool/numbers_api',
    demo_url: 'https://numbersapi.com/',
    cover: '/numbers-api.jpg',
    imgs: ['/numbersapi-1.png','/numbersapi-2.png','/numbersapi-3.png'],
    flipped: false,
  },
  {
    title: 'JOBLY',
    subtitle: 'PROFESSIONAL NETWORK',
    description: [
      `Jobly is a full-stack web application inspired by Linked-In. 
      The front-end user interface is built as a single page application for seamless navigation which securely connects to the relational database through the backend API which deals with authentication, application logic, and data operations.
      It has many similar functionalities as Linked-In such as user and company profile managment as well as employment exploration and application.`
    ],
    stack: 'React, Express, Redux, PostgreSQL, ',
    full_stack: 'React, Node, Express, Redux, PostgreSQL, Bootstrap',
    github_url: 'https://github.com/martinjwkim/react-jobly',
    demo_url: 'https://martinjwkim-jobly.herokuapp.com',
    cover: '/jobly.jpeg',
    imgs: ['/generic-background.png'],
    flipped: true,
  },
  {
    title: 'WARBLER',
    subtitle: 'SOCIAL NETWORK',
    description: [
      `Warbler is a full-stack web application inspired by Twitter.
      Like Twitter, users are able to explore and follow one another and tweets are able to be posted, retweeted, liked, and commented on, creating a unique experience tailored for each profile. `
    ],
    stack: 'Python, Flask, PostgreSQL',
    full_stack: 'Python, Flask, PostgreSQL, SQLAlchemy, Jinja, BCrypt, WTForms',
    github_url: 'https://github.com/martinjwkim/warbler',
    demo_url: 'https://martinjwkim-warbler.herokuapp.com',
    cover: '/warbler.jpeg',
    imgs: ['/warbler-1.png','/warbler-4.png','/warbler-3.png','/warbler-2.png'],
    flipped: false,
  },
  {
    title: 'CRYPTO TICKER',
    subtitle: 'INVESTMENT TRACKER',
    description: [
      `Crypto Ticker is an application used to display real-time cryptocurrency and financial stock information on an LED matrix panel using a Raspberry Pi.
      At an adjustable rate, the software cycles through the different assets inputed by the user, retrieves its real-time data through a third party API, and maps a pattern to display the data on the connected LED panel.
      `
    ],
    stack: 'Python, Docker',
    full_stack: 'Python, Docker',
    github_url: 'https://github.com/martinjwkim/cryptoticker',
    cover: '/crypto-ticker.png',
    imgs: ['/generic-background.png'],
    flipped: true,
  },
];

export default cardData;