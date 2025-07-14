const navLinks = ['overview', 'skills', 'work'];

const words = [
  { text: 'Visions', imgPath: '/images/heroSection/logo/vision.png' },
  { text: 'Solutions', imgPath: '/images/heroSection/logo/solution.png' },
  { text: 'Experiences', imgPath: '/images/heroSection/logo/experience.png' },
  { text: 'Impact', imgPath: '/images/heroSection/logo/impact.png' },
  { text: 'Ideas', imgPath: '/images/heroSection/logo/ideas.png' },
  { text: 'Concepts', imgPath: '/images/heroSection/logo/concepts.png' },
  { text: 'Designs', imgPath: '/images/heroSection/logo/designs.png' },
  { text: 'Code', imgPath: '/images/heroSection/logo/code.png' },
];

import { IoSettings } from 'react-icons/io5';
import { HiMiniRocketLaunch } from 'react-icons/hi2';
import { ImTarget } from 'react-icons/im';
import { FaLightbulb } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { PiMailboxFill } from 'react-icons/pi';

const overviewPoints = [
  {
    icon: IoSettings,
    point: 'Strong foundation in React, Tailwind CSS, Node.js, and MongoDB.',
  },
  {
    icon: HiMiniRocketLaunch,
    point:
      'Experience building real-world projects like e-commerce platforms and course-based applications.',
  },
  {
    icon: ImTarget,
    point:
      'Committed to daily practice and improvement, always learning and applying new technologies.',
  },
  {
    icon: FaLightbulb,
    point:
      'Passionate about problem-solving and delivering value through well-crafted code.',
  },
  {
    icon: GiWorld,
    point:
      'Comfortable working on both frontend and backend, with attention to performance and user experience.',
  },
  {
    icon: PiMailboxFill,
    point:
      'Currently open to freelance opportunities, collaborations, and real-world challenges.',
  },
];

const abilities = [
  {
    imgPath: '/images/overviewSection/quality.png',
    title: 'Quality Focus',
    desc: 'Delivering high-quality results while maintaining attention to every detail.',
  },
  {
    imgPath: '/images/overviewSection/communication.png',
    title: 'Clear Communication',
    desc: 'Keeping you updated at every step with honest, timely communication to ensure clarity and avoid surprises.',
  },
  {
    imgPath: '/images/overviewSection/thinking.png',
    title: 'Structured Thinking',
    desc: 'Breaking down problems with logic and structure to focus on what matters most and solve challenges efficiently.',
  },
  {
    imgPath: '/images/overviewSection/timeDeliver.png',
    title: 'On-Time Delivery',
    desc: 'Making sure your project is delivered on schedule — with quality, consistency, and accountability.',
  },
];

const topTechStack = [
  {
    name: 'MongoDB',
    iconPath: '/images/logos/topTechStack/mongodb.png',
    description: 'Flexible NoSQL database',
    type: 'backend',
    githubLink: 'https://github.com/ebrahim-anees/job-API',
  },
  {
    name: 'Express.js',
    iconPath: '/images/logos/topTechStack/express.png',
    description: 'RESTful APIs and middleware logic',
    type: 'backend',
    githubLink: 'https://github.com/ebrahim-anees/store_api',
  },
  {
    name: 'React.js',
    iconPath: '/images/logos/topTechStack/react.png',
    description: 'SPA development with hooks and components',
    type: 'frontend',
    githubLink: 'https://github.com/ebrahim-anees/assembly_game',
  },
  {
    name: 'Node.js',
    iconPath: '/images/logos/topTechStack/nodejs.png',
    description: 'Backend runtime for scalable applications',
    type: 'backend',
    githubLink: 'https://github.com/ebrahim-anees/task_manager',
  },
  {
    name: 'Tailwind CSS',
    iconPath: '/images/logos/topTechStack/tailwindcss.png',
    description: 'Utility-first styling for fast UI development',
    type: 'frontend',
    githubLink: 'https://github.com/ebrahim-anees/LMS-Edemy/tree/main/client',
  },
  {
    name: 'JavaScript',
    iconPath: '/images/logos/topTechStack/javascript.png',
    description: 'ES6+, closures, async/await, events',
    type: 'frontend',
    githubLink: 'https://github.com/ebrahim-anees/4_games_js_logic_based',
  },
  {
    name: 'HTML5',
    iconPath: '/images/logos/topTechStack/html5.png',
    description: 'Semantic and accessible markup',
    type: 'frontend',
    githubLink: 'https://github.com/ebrahim-anees/4-simple-static-Dashboard',
  },
  {
    name: 'CSS3',
    iconPath: '/images/logos/topTechStack/css3.png',
    description: 'Responsive layouts, Flexbox, Grid',
    type: 'frontend',
    githubLink: 'https://github.com/ebrahim-anees/3-simple-website-template',
  },
  {
    name: 'Git & GitHub',
    iconPath: '/images/logos/topTechStack/git.png',
    description: 'Version control and collaboration',
    type: 'tool',
    githubLink: 'https://github.com/ebrahim-anees',
  },

  {
    name: 'Redux',
    iconPath: '/images/logos/topTechStack/redux.png',
    description: 'Global state management',
    type: 'frontend',
    githubLink:
      'https://github.com/ebrahim-anees/ThreadLab/tree/main/client/src/store',
  },
];

const extraTechStack = [
  {
    name: 'TypeScript',
    iconPath: '/images/logos/extraTechStack/typescript.png',
    description: 'Typed JavaScript for scalable code',
    type: 'fullstack',
    githubLink: 'https://github.com/ebrahim-anees/blackJack_cards',
    proficiency: 'beginner',
  },
  {
    name: 'Next.js',
    iconPath: '/images/logos/extraTechStack/nextjs.png',
    description: 'Fullstack framework with SSR support',
    type: 'fullstack',
    githubLink: 'https://github.com/ebrahim-anees/YC-directory',
    proficiency: 'beginner',
  },
  {
    name: 'SASS / SCSS',
    iconPath: '/images/logos/extraTechStack/sass.png',
    description: 'Nesting, variables, mixins',
    type: 'frontend',
    githubLink: 'https://github.com/ebrahim-anees/7_small_pj_on_sass_gulp',
  },
  {
    name: 'JWT/Auth',
    iconPath: '/images/logos/extraTechStack/jwt.png',
    description: 'Secure token-based authentication',
    type: 'backend',
    githubLink: 'https://github.com/ebrahim-anees/jwt_basics',
  },
  {
    name: 'Postman',
    iconPath: '/images/logos/extraTechStack/postman.svg',
    description: 'API testing & debugging',
    type: 'tool',
  },
  {
    name: 'Vercel',
    iconPath: '/images/logos/extraTechStack/vercel.png',
    description: 'Hosting platform',
    type: 'tool',
  },
];

const expCards = [
  {
    review:
      'Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.',
    imgPath: '/images/exp1.png',
    logoPath: '/images/logo1.png',
    title: 'Frontend Developer',
    date: 'January 2023 - Present',
    responsibilities: [
      'Developed and maintained user-facing features for the Hostinger website.',
      'Collaborated closely with UI/UX designers to ensure seamless user experiences.',
      'Optimized web applications for maximum speed and scalability.',
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: '/images/exp2.png',
    logoPath: '/images/logo2.png',
    title: 'Full Stack Developer',
    date: 'June 2020 - December 2023',
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      'Worked with backend engineers to integrate APIs seamlessly with the frontend.',
      'Contributed to open-source projects that were used with the Docker ecosystem.',
    ],
  },
  {
    review:
      'Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.',
    imgPath: '/images/exp3.png',
    logoPath: '/images/logo3.png',
    title: 'React Native Developer',
    date: 'March 2019 - May 2020',
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      'Improved app performance and user experience through code optimization and testing.',
      'Coordinated with the product team to implement features based on feedback.',
    ],
  },
];

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: '/images/logo2.png',
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png',
  },
];

const testimonials = [
  {
    name: 'Esther Howard',
    mentions: '@estherhoward',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    imgPath: '/images/client1.png',
  },
  {
    name: 'Wade Warren',
    mentions: '@wadewarren',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    imgPath: '/images/client3.png',
  },
  {
    name: 'Guy Hawkins',
    mentions: '@guyhawkins',
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: '/images/client2.png',
  },
  {
    name: 'Marvin McKinney',
    mentions: '@marvinmckinney',
    review:
      'Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
    imgPath: '/images/client5.png',
  },
  {
    name: 'Floyd Miles',
    mentions: '@floydmiles',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
    imgPath: '/images/client4.png',
  },
  {
    name: 'Albert Flores',
    mentions: '@albertflores',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
    imgPath: '/images/client6.png',
  },
];
const thirdContainerURL = [
  'https://github.com/ebrahim-anees/9-Web-App-using-Pug-SASS',
  'https://github.com/ebrahim-anees/8-light-dark-mode-dashboard',
  'https://github.com/ebrahim-anees/5-Harmonious-color-scheme-website',
];

import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { BsTwitterX } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';

const socialImgs = [
  {
    name: 'GitHub',
    icon: FaGithub,
    pathUrl: 'https://github.com/ebrahim-anees',
  },
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    pathUrl: 'https://leetcode.com/u/ebrahim-anees',
  },
  {
    name: 'X',
    icon: BsTwitterX,
    pathUrl: 'https://x.com/anees_210',
  },
  {
    name: 'LinkedIn',
    icon: IoLogoLinkedin,
    pathUrl: 'https://www.linkedin.com/in/ebrahim-anees-608313304',
  },
];

export {
  words,
  abilities,
  overviewPoints,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  topTechStack,
  extraTechStack,
  // techStackImgs,
  navLinks,
  thirdContainerURL,
};
