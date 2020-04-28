export const scrollToref = (ref) => window.scrollTo(0, ref.current.offsetTop);

export const smallProjs = [
  {
    name: 'Portfolio v1',
    website: 'https://harelp.xyz/',
  },
  {
    name: 'Todo App',
    website: 'hello',
  },
  {
    name: 'MLB Database',
    website: 'hello',
  },
  {
    name: 'Simple eStore',
    website: 'hello',
  },
  {
    name: 'Excel Spreadsheet',
    website: 'hello',
  },
  {
    name: 'ABL Logo',
    website: 'https://www.behance.net/gallery/34715713/Modern-Logo',
  },
  {
    name: 'Superman Logo',
    website: 'https://www.behance.net/gallery/34711361/Superman-Logo',
  },
  {
    name: 'Funky Deadpool',
    website: 'https://www.behance.net/gallery/33972842/Deadpool-tryout',
  },
  {
    name: 'H-I Flyer',
    website:
      'https://www.behance.net/gallery/53284585/Thread-Design-For-Hostinfuse',
  },
];

export const image = [];
export const projects = [
  {
    name: 'Quizi',
    skills: ['React.js,', 'Node.js,', 'Express,', 'mongoDb'],
    description:
      'A quiz game app which lets you compete with others, create your own quizzes and share it with others.',
    hasGit: true,
    github: 'https://github.com/harelp/quizi',
    website: 'https://quiziapp.herokuapp.com',
    color: '#3949ab',
  },
  {
    name: 'Hosty',
    skills: ['CSS,', 'CSS Grid,', 'JavaScript'],
    description:
      'A small and modern one page web design created for a small hosting company.',
    hasGit: false,
    github: '',
    website: 'https://quiziapp.herokuapp.com',
    color: '#562fc9',
  },
  {
    name: 'Yael Sayag',
    skills: ['CSS,', 'JavaScript,', 'Bootstrap'],
    description:
      'Portfolio for a soap opera actor designed with bootstrap and canvas theme library.',
    hasGit: false,
    github: '',
    website: 'https://quiziapp.herokuapp.com',
    color: '#252525',
  },
  {
    name: 'HostInfuse',
    skills: ['CSS,', 'JavaScript,', 'Bootstrap'],
    description:
      'Portfolio for a soap opera actor designed with bootstrap and canvas theme library.',
    hasGit: false,
    github: '',
    website: 'https://quiziapp.herokuapp.com',
    color: '#4a90e2',
  },
  {
    name: 'QuickBoosters',
    skills: ['CSS,', 'JavaScript,', 'Bootstrap'],
    description:
      'Portfolio for a soap opera actor designed with bootstrap and canvas theme library.',
    hasGit: false,
    github: '',
    website: 'https://quiziapp.herokuapp.com',
    color: '#ef7752',
  },
];

export const items = ['Start', 'Work', 'Experiments', 'Skills', 'Contact'];

export const getDocHeight = () => {
  const windowHeight =
    'innerHeight' in window
      ? window.innerHeight
      : document.documentElement.offsetHeight;

  const body = document.body;

  const html = document.documentElement;

  const docHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const windowBottom = windowHeight + window.pageYOffset + 100;
  if (windowBottom >= docHeight) return true;
};
