export const icons = {
  // Frontend
  react: {
    id: 'react',
    name: 'React',
    iconClass: 'devicon-react-original colored',
  },
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    iconClass: 'devicon-nextjs-plain colored',
  },
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    iconClass: 'devicon-javascript-plain colored',
  },
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    iconClass: 'devicon-typescript-plain colored',
  },
  tailwind: {
    id: 'tailwind',
    name: 'Tailwind',
    iconClass: 'devicon-tailwindcss-original colored',
  },
  html: {
    id: 'html',
    name: 'Html',
    iconClass: 'devicon-html5-plain colored',
  },
  css: {
    id: 'css',
    name: 'Css',
    iconClass: 'devicon-css3-original colored',
  },
  scss: {
    id: 'scss',
    name: 'Scss',
    iconClass: 'devicon-sass-original colored',
  },
  bootstrap: {
    id: 'bootstrap',
    name: 'Bootstrap',
    iconClass: 'devicon-bootstrap-plain colored',
  },
  jquery: {
    id: 'jquery',
    name: 'jQuery',
    iconClass: 'devicon-jquery-plain colored',
  },

  // Backend / Runtime
  node: {
    id: 'node',
    name: 'Node.js',
    iconClass: 'devicon-nodejs-plain colored',
  },
  express: {
    id: 'express',
    name: 'Express.js',
    iconClass: 'devicon-express-original colored',
  },
  rust: {
    id: 'rust',
    name: 'Rust',
    iconClass: 'devicon-rust-original colored',
  },
  php: {
    id: 'php',
    name: 'PHP',
    iconClass: 'devicon-php-plain colored',
  },
  python: {
    id: 'python',
    name: 'Python',
    iconClass: 'devicon-python-plain colored',
  },
  java: {
    id: 'java',
    name: 'Java',
    iconClass: 'devicon-java-plain colored',
  },
  spring: {
    id: 'spring',
    name: 'Spring',
    iconClass: 'devicon-spring-original colored',
  },
  c: {
    id: 'c',
    name: 'C',
    iconClass: 'devicon-c-original colored',
  },
  csharp: {
    id: 'csharp',
    name: 'C#',
    iconClass: 'devicon-csharp-plain colored',
  },

  // Databases
  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    iconClass: 'devicon-postgresql-plain colored',
  },
  mssql: {
    id: 'mssql',
    name: 'MS SQL Server',
    iconClass: 'devicon-microsoftsqlserver-plain colored',
  },
  mysql: {
    id: 'mysql',
    name: 'MySQL',
    iconClass: 'devicon-mysql-original colored',
  },
  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    iconClass: 'devicon-mongodb-plain colored',
  },

  // Cloud / DevOps
  azure: {
    id: 'azure',
    name: 'Azure',
    iconClass: 'devicon-azure-plain colored',
  },
  docker: {
    id: 'docker',
    name: 'Docker',
    iconClass: 'devicon-docker-plain colored',
  },
  maven: {
    id: 'maven',
    name: 'Maven',
    iconClass: 'devicon-maven-plain colored',
  },

  // Other
  aframe: {
    id: 'aframe',
    name: 'AFrame',
    iconClass: 'devicon-aframe-plain colored',
  },
  unity: {
    id: 'unity',
    name: 'Unity',
    iconClass: 'devicon-unity-plain colored',
  },
  tauri: {
    id: 'tauri',
    name: 'Tauri',
    iconClass: 'devicon-tauri-plain colored',
  },
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn',
    iconClass: 'devicon-linkedin-plain colored',
  },
  'linkedin-colourless': {
    id: 'linkedin-colourless',
    name: 'LinkedIn',
    iconClass: 'devicon-linkedin-plain',
  },
  github: {
    id: 'github',
    name: 'Github',
    iconClass: 'devicon-github-original colored',
  },
  'github-colourless': {
    id: 'github-colourless',
    name: 'Github',
    iconClass: 'devicon-github-original',
  },
} as const;

export type IconKey = keyof typeof icons;
export type Icon = (typeof icons)[IconKey];

export default icons;
