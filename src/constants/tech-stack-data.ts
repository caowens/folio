import { 
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiPython,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiFirebase,
    SiGit,
    SiDocker,
    SiDotnet,
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { IconType } from 'react-icons';
import { DiMsqlServer } from 'react-icons/di';

export interface TechChip {
  id: string;
  name: string;
  icon: IconType;
}

export const TECH_STACK: TechChip[] = [
  {
    id: 'js',
    name: 'JavaScript',
    icon: SiJavascript,
  },
  {
    id: 'ts',
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    id: 'cs',
    name: 'C#',
    icon: TbBrandCSharp,
  },
  {
    id: 'py',
    name: 'Python',
    icon: SiPython,
  },
  {
    id: 'html',
    name: 'Html5',
    icon: SiHtml5,
  },
  {
    id: 'css',
    name: 'CSS3',
    icon: SiCss3,
  },
  {
    id: 'tw',
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
  },
  {
    id: 'react',
    name: 'React',
    icon: SiReact,
  },
  {
    id: 'next',
    name: 'Next.JS',
    icon: SiNextdotjs,
  },
  {
    id: 'node',
    name: 'Node.JS',
    icon: SiNodedotjs,
  },
  {
    id: '.net',
    name: '.NET',
    icon: SiDotnet,
  },
  {
    id: 'mssql',
    name: 'Microsoft SQL Server',
    icon: DiMsqlServer,
  },
  {
    id: 'mongo',
    name: 'MongoDB',
    icon: SiMongodb,
  },
  {
    id: 'fb',
    name: 'Firebase',
    icon: SiFirebase,
  },
  {
    id: 'az',
    name: 'Azure',
    icon: VscAzure,
  },
  {
    id: 'git',
    name: 'Git',
    icon: SiGit,
  },
  {
    id: 'doc',
    name: 'Docker',
    icon: SiDocker,
  },
];