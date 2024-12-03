export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Voxa - AI Voice Assistant',
      desc: 'Voxa is a voice-activated AI assistant designed to provide seamless, fully voice-to-voice interaction. A sleek and modern AI that you can use from any web browser.',
      subdesc:
        'It uses a combination of advanced speech-to-text and text-to-speech pipelines integrated with OpenAI\'s GPT & Whsiper models, as well as ElevenLab\'s API to deliver intelligent, conversational responses.',
      href: 'https://voxa-mp.vercel.app',
      texture: './textures/project/Project1.mp4',
      logo: './assets/voxa.png',
      logoStyle: {
        backgroundColor: '#291033',
        border: '0.2px solid #280E33',
        boxShadow: '0px 0px 60px 0px #C94AFF',
      },
      arrow: './assets/arrow1.png',
      dots: './assets/dots1.png',
      spotlight: './assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: './assets/react.svg',
        },
        {
          id: 2,
          name: 'TypeScript',
          path: './assets/typescript.png',
        },
        {
          id: 3,
          name: 'TailwindCSS',
          path: './assets/tailwindcss.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: './assets/python.png',
        },
      ],
    },
    {
      title: 'Social Distribution - Blogging Platform',
      desc: 'Social Distribution is a Blogging/Social Network platform where users can share posts and interact with their friends. Developed in JavaScript & React for the front-end and Python & Django for the back-end.',
      subdesc:
        'Member of a 5-person team where my primary role was front-end design and development while also helping out with back-end HTTP connection handling.',
      href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
      texture: './textures/project/Project2.mp4',
      logo: './assets/uofa.png',
      logoStyle: {
        backgroundColor: '#091D12',
        border: '0.2px solid #052D17',
        boxShadow: '0px 0px 60px 0px #238360',
      },
      arrow: './assets/arrow2.png',
      dots: './assets/dots2.png',
      spotlight: './assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: './assets/react.svg',
        },
        {
          id: 2,
          name: 'JavaScript',
          path: './assets/javascript.png',
        },
        {
          id: 3,
          name: 'Python',
          path: './assets/python.png',
        },
        {
          id: 4,
          name: 'Django',
          path: './assets/django.svg',
        },
      ],
    },
    {
      title: 'Gobber\'s Hoard - Looter/Stealth Game',
      desc: 'In Gobber\'s Hoard you play as Gobber, a mischievous goblin returning to his old master\'s tower to reclaim its treasures. Strategy and timing are key in this lighthearted adventure!',
      subdesc:
        'Member of a 5-person team where my primary roles were level design and building, implementing mechanics using custom made plugins, and general quality assurance and bug testing.',
      href: 'https://bathrobe-studios.github,io',
      texture: './textures/project/Project3.mp4',
      logo: './assets/gobbershoard.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB5',
      },
      arrow: './assets/arrow3.png',
      dots: './assets/dots3.png',
      spotlight: './assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'JavasSript',
          path: './assets/javascript.png',
        },
        {
          id: 2,
          name: 'RPG Maker MV',
          path: './assets/rpgmaker.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      reactLogoPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'University of Alberta',
      pos: 'BACHELOR OF SCIENCE',
      duration: '2019 - 2024',
      title: "Graduated from the University of Alberta achieving a bachelor of science degree in computer science with specialization.",
      icon: './assets/uofa.png',
    },
    {
      id: 2,
      name: 'Code Ninjas',
      pos: 'PROGRAMMING INSTRUCTOR',
      duration: '2022 - 2024',
      title: "Taught children and teenagers fundamental programming practices via a programming curriculum which utilizes JavaScript, Lua, C#, Makecode Arcade, and Unity.",
      icon: './assets/codeninjas.png',
    },
    {
      id: 3,
      name: 'Freedom Mobile',
      pos: 'SALES SPECIALIST',
      duration: '2019 - 2022',
      title: "Responsible for meeting sales goals by selling the company\'s products and services to new and existing customers. Educated customers on all plans and electronics, and assisted their decision to purchase their ideal package.",
      icon: './assets/freedommobile.png',
    },
  ];