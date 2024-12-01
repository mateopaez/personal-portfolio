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
      name: 'Experience',
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
      texture: 'src/assets/textures/project/project1.mp4',
      logo: 'src/assets/voxa.png',
      logoStyle: {
        backgroundColor: '#291033',
        border: '0.2px solid #280E33',
        boxShadow: '0px 0px 60px 0px #C94AFF',
      },
      arrow: 'src/assets/arrow1.png',
      dots: 'src/assets/dots1.png',
      spotlight: 'src/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'src/assets/react.svg',
        },
        {
          id: 2,
          name: 'TypeScript',
          path: 'src/assets/typescript.png',
        },
        {
          id: 3,
          name: 'TailwindCSS',
          path: 'src/assets/tailwindcss.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: 'src/assets/python.png',
        },
      ],
    },
    {
      title: 'Social Distribution - Blogging Platform',
      desc: 'Social Distribution is a Blogging/Social Network platform where users can share posts and interact with their friends. Developed in JavaScript & React for the front-end and Python & Django for the back-end.',
      subdesc:
        'Member of a 5-person team where my primary role was front-end design and development while also helping out with back-end HTTP connection handling.',
      href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
      texture: 'src/assets/textures/project/project3.mp4',
      logo: 'src/assets/uofa.png',
      logoStyle: {
        backgroundColor: '#091D12',
        border: '0.2px solid #052D17',
        boxShadow: '0px 0px 60px 0px #238360',
      },
      arrow: 'src/assets/arrow2.png',
      dots: 'src/assets/dots2.png',
      spotlight: 'src/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'src/assets/react.svg',
        },
        {
          id: 2,
          name: 'JavaScript',
          path: 'src/assets/javascript.png',
        },
        {
          id: 3,
          name: 'Python',
          path: 'src/assets/python.png',
        },
        {
          id: 4,
          name: 'Django',
          path: 'src/assets/django.svg',
        },
      ],
    },
    {
      title: 'Gobber\'s Hoard - Looter/Stealth Game',
      desc: 'In Gobber\'s Hoard you play as Gobber, a mischievous goblin returning to his old master\'s tower to reclaim its treasures. Strategy and timing are key in this lighthearted adventure!',
      subdesc:
        'Member of a 5-person team where my primary roles were level design and building, implementing mechanics using custom made plugins, and general quality assurance and bug testing.',
      href: 'https://bathrobe-studios.github,io',
      texture: 'src/assets/textures/project/project2.mp4',
      logo: 'src/assets/gobbershoard.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB5',
      },
      arrow: 'src/assets/arrow3.png',
      dots: 'src/assets/dots3.png',
      spotlight: 'src/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'JavasSript',
          path: 'src/assets/javascript.png',
        },
        {
          id: 2,
          name: 'RPG Maker MV',
          path: 'src/assets/rpgmaker.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'University of Alberta',
      pos: 'Bachelor of Science',
      duration: '2019 - 2024',
      title: "Graduated from the University of Alberta achieving a bachelor of science degree in computer science with specialization.",
      icon: 'src/assets/uofa.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Code Ninjas',
      pos: 'Programming Instructor',
      duration: '2022 - 2024',
      title: "Taught children and teenagers fundamental programming practices via a programming curriculum which utilizes JavaScript, Lua, C#, Makecode Arcade, and Unity.",
      icon: 'src/assets/codeninjas.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Freedom Mobile',
      pos: 'Sales Specialist',
      duration: '2019 - 2022',
      title: "Responsible for meeting sales goals by selling the company\'s products and services to new and existing customers. Educated customers on all plans and electronics, and assisted their decision to purchase their ideal package.",
      icon: 'src/assets/freedommobile.png',
      animation: 'salute',
    },
  ];