import type { ComponentType } from 'react';
import {
  AframeIcon,
  AzureIcon,
  BootstrapIcon,
  CIcon,
  CsharpIcon,
  CssIcon,
  DockerIcon,
  ExpressIcon,
  FastApi,
  GithubIcon,
  GithubIconColourless,
  HardhatIcon,
  HtmlIcon,
  JavaIcon,
  JavascriptIcon,
  JqueryIcon,
  LinkedinIcon,
  LinkedinIconColourless,
  MavenIcon,
  MongoDbIcon,
  MySqlIcon,
  NextjsIcon,
  NodejsIcon,
  NumpyIcon,
  PandasIcon,
  PhpIcon,
  PostgresqlIcon,
  PrismaIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  ScssIcon,
  SolidityIcon,
  SpringIcon,
  SqliteIcon,
  SqlServerIcon,
  StreamlitIcon,
  TailwindIcon,
  TauriIcon,
  TypescriptIcon,
  UnityIcon,
} from '@/components/icons';

const defineIcon = <const Id extends string>(
  id: Id,
  name: string,
  icon: ComponentType,
) => ({
  id,
  name,
  icon,
});

export const icons = {
  // Frontend
  react: defineIcon('react', 'React', ReactIcon),
  nextjs: defineIcon('nextjs', 'Next.js', NextjsIcon),
  javascript: defineIcon('javascript', 'JavaScript', JavascriptIcon),
  typescript: defineIcon('typescript', 'TypeScript', TypescriptIcon),
  tailwind: defineIcon('tailwind', 'Tailwind', TailwindIcon),
  html: defineIcon('html', 'HTML', HtmlIcon),
  css: defineIcon('css', 'CSS', CssIcon),
  scss: defineIcon('scss', 'SCSS', ScssIcon),
  bootstrap: defineIcon('bootstrap', 'Bootstrap', BootstrapIcon),
  jquery: defineIcon('jquery', 'jQuery', JqueryIcon),

  // Backend / Runtime
  node: defineIcon('node', 'Node.js', NodejsIcon),
  express: defineIcon('express', 'Express.js', ExpressIcon),
  rust: defineIcon('rust', 'Rust', RustIcon),
  php: defineIcon('php', 'PHP', PhpIcon),
  python: defineIcon('python', 'Python', PythonIcon),
  java: defineIcon('java', 'Java', JavaIcon),
  spring: defineIcon('spring', 'Spring', SpringIcon),
  c: defineIcon('c', 'C', CIcon),
  csharp: defineIcon('csharp', 'C#', CsharpIcon),
  solidity: defineIcon('solidity', 'Solidity', SolidityIcon),
  fastapi: defineIcon('fastapi', 'FastAPI', FastApi),

  // Databases
  postgresql: defineIcon('postgresql', 'PostgreSQL', PostgresqlIcon),
  mssql: defineIcon('mssql', 'MS SQL Server', SqlServerIcon),
  mysql: defineIcon('mysql', 'MySQL', MySqlIcon),
  mongodb: defineIcon('mongodb', 'MongoDB', MongoDbIcon),
  prisma: defineIcon('prisma', 'Prisma', PrismaIcon),
  sqlite: defineIcon('sqlite', 'SQLite', SqliteIcon),

  // Cloud / DevOps
  azure: defineIcon('azure', 'Azure', AzureIcon),
  docker: defineIcon('docker', 'Docker', DockerIcon),
  maven: defineIcon('maven', 'Maven', MavenIcon),

  // Other
  aframe: defineIcon('aframe', 'A-Frame', AframeIcon),
  unity: defineIcon('unity', 'Unity', UnityIcon),
  tauri: defineIcon('tauri', 'Tauri', TauriIcon),
  linkedin: defineIcon('linkedin', 'LinkedIn', LinkedinIcon),
  'linkedin-colourless': defineIcon(
    'linkedin-colourless',
    'LinkedIn',
    LinkedinIconColourless,
  ),
  github: defineIcon('github', 'GitHub', GithubIcon),
  'github-colourless': defineIcon(
    'github-colourless',
    'GitHub',
    GithubIconColourless,
  ),
  hardhat: defineIcon('hardhat', 'Hardhat', HardhatIcon),
  numpy: defineIcon('numpy', 'Numpy', NumpyIcon),
  pandas: defineIcon('pandas', 'Pandas', PandasIcon),
  streamlit: defineIcon('streamlit', 'Streamlit', StreamlitIcon),
} as const;

export type IconKey = keyof typeof icons;
export type Icon = (typeof icons)[IconKey];

export default icons;
