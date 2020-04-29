export const scrollToref = (ref) => window.scrollTo(0, ref.current.offsetTop);

export const smallProjs = [
  {
    name: 'Portfolio v1',
    website: 'https://harelp.xyz/',
  },
  {
    name: 'Lisity - Todo App',
    website: 'https://harelp.xyz/projects/listify/',
  },
  {
    name: 'MLB Database',
    website: 'https://harelp.xyz/projects/mlbdb/',
  },
  {
    name: 'Simple eStore',
    website: 'https://harelp.xyz/projects/estore/',
  },
  {
    name: 'Excel Spreadsheet',
    website: 'https://harelp.xyz/projects/spreadsheet/',
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

export const projects = [
  {
    name: 'Quizi',
    linkTo: 'quizi',
    skills: ['React.js,', 'Node.js,', 'Express,', 'mongoDb'],
    description:
      'A quiz game app develped with MERN Stack which lets you compete with others, create your own quizzes and share it with others.',

    color: '#3949ab',
  },
  {
    name: 'Hosty',
    linkTo: 'hosty',
    skills: ['CSS,', 'CSS Grid,', 'JavaScript'],
    description:
      'A small and modern one page web design created for a small hosting company.',

    color: '#562fc9',
  },
  {
    name: 'Yael Sayag',
    linkTo: 'yaelsayag',
    skills: ['CSS,', 'JavaScript,', 'Bootstrap'],
    description:
      'Portfolio for a soap opera actor designed with bootstrap and canvas theme library.',

    color: '#252525',
  },
  {
    name: 'HostInfuse',
    linkTo: 'hostinfuse',
    skills: ['CSS,', 'JavaScript,', 'Bootstrap'],
    description:
      'A simple and modern website designed and developed with bootstrap and various js libraries.',

    color: '#4a90e2',
  },
  {
    name: 'QuickBoosters',
    linkTo: 'quickboosters',
    skills: ['CSS,', 'JavaScript,', 'Bootstrap'],
    description:
      'Three pages modern website developed with Html, CSS Grid, Particles.js and JavaScript from scratch.',

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
