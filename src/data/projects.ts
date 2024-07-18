import { CardProps } from '@/components/shared/types/types';
import { ResourceTypeEnum } from '@/data/utils/types';

export const projectData: Omit<CardProps, 'tags'>[] = [
  {
    id: 1,
    date: '06-07-2023',
    title: 'Social App',
    description:
      'Aplicativo web de red Social creado como proyecto Universitario',
    resources: [
      {
        category: ResourceTypeEnum.Source,
        link: 'https://github.com/unmsmfisi-socialapplication/social_app'
      }
    ],
    technologies: [
      {
        name: 'React',
        icon: 'devicon:react'
      },
      {
        name: 'Next.js',
        icon: 'logos:nextjs-icon'
      },
      {
        name: 'TypeScript',
        icon: 'devicon:typescript'
      },
    ],
    image: {
      src: 'https://res.cloudinary.com/dxf4bbmnb/image/upload/v1708972802/cv/t26yazobmbwjfjxjtp6e.png',
      alt: 'Social App'
    }
  },
  
  {
    id: 2,
    date: '10-08-2023',
    title: 'Peliculas',
    description:
      'Prototipo Frontend',
    resources: [
      {
        category: ResourceTypeEnum.Demo,
        link: 'https://movie-insights.vercel.app/'
      },
    ],
    technologies: [
      {
        name: 'React',
        icon: 'devicon:react'
      },
      {
        name: 'Next.js',
        icon: 'logos:nextjs-icon'
      },
      {
        name: 'TypeScript',
        icon: 'devicon:typescript'
      },
      {
        name: 'Redux',
        icon: 'logos:redux'
      },
      {
        name: 'Tailwind',
        icon: 'vscode-icons:file-type-tailwind'
      }
    ],
    image: {
      src: 'https://res.cloudinary.com/ddwtkjumq/image/upload/v1698673846/projects-image/pxfxmb2hai9jyiwpd1sp.png',
      alt: 'Movie Insights'
    }
  },

];
