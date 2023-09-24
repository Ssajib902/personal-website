import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-6.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-4.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Md Asmaul Hossain',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Sajib',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Bangladesh',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Dhaka',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+8801637209558',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'mahsajib15@mail.com',
  },

  {
    id: 9,
    title: 'Languages : ',
    description: 'Bengali, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '0.5+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '0',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '0',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Web Developer <span> Front-End </span>',
    desc: 'I have started Web Development from very first of 2023. I am passionate about coding and web designs.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - PRESENT',
    title: 'Graphics Designer',
    desc: 'I am a professional Graphics Designer with 3 years experiences. I have worked on so many creative designs.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020- PRESENT',
    title: 'Green University of Bangladesh </span>',
    desc: 'Ongoing',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Nazipur Model High School </span>',
    desc: 'Science and Result: GPA-5',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Shahid Buddhijib Govt. College </span>',
    desc: 'Science  Result: 4.50',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '25',
  },

  {
    id: 2,
    title: 'CSS',
    percentage: '70',
  },

  {
    id: 3,
    title: 'JavaScript',
    percentage: '60',
  },

  {
    id: 4,
    title: 'React',
    percentage: '80',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '20',
  },

  {
    id: 6,
    title: 'PhP',
    percentage: '30',
  },

];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Graphics Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Designs',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Freelancer',
      },
      {
        icon: <FaCode />,
        title: 'Source : ',
        desc: 'Illustrator',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.freelancer.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'See Project Section',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'No Client',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'E Commerce Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'No Client',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React+Vite',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'working',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Portfolio Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Portfolio',
      },
      {
        icon: <FiUser />,
        desc: 'Working',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React',
      },
      {
        icon: <FiExternalLink />,
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Working',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'University Portal Websites',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Working',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Working',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
