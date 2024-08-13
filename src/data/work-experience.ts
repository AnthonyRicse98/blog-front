import {
  WorkExperienceProps,
  WorkTypeEnum
} from '@/components/shared/types/types';

export const workExperienceData: WorkExperienceProps[] = [
  {
    id: 1,
    workType: WorkTypeEnum.Corporate,
    company: 'Devmente',
    position: 'Practicante Pre profesional',
    logo: {
      src: '/company-logo/devmentegang_logo.jpeg',
      alt: 'Devmente logo logo'
    },
    startDate: '03-03-2022',
    endDate: '06-06-2023',
    responsibilities: [
      'Soporte y mantenimiento de Polizas de Seguro',
      'Atención y ayuda interno sobre requsiitos e información',
      'Testing de los componenentes y funciónes',
      'Tecnologias: JavaScript , Sass , Less , Html , Ant Desing , Git',
    ]
  },
  {
    id: 2,
    workType: WorkTypeEnum.Volunteer,
    company: 'ENEISFOT',
    position: 'Web Developer',
    logo: {
      src: '/company-logo/eneisfot.jpeg',
      alt: 'ENEISFOT'
    },
    startDate: '08-05-2022',
    endDate: '01-31-2023',
    responsibilities: [
      'React App (Vite js)',
      'Landing page (HTML y CSS3)',
      'Boobstrap',
      'Api Rest',
      'Modelado y creación de diseño UIX',
    ]
  },
  {
    id: 3,
    workType: WorkTypeEnum.Collaborative,
    company: 'UNMSM virtual',
    position: 'Full Stack Junior',
    logo: {
      src: '/company-logo/cinfo-unmsm.png',
      alt: 'UNMSM'
    },
    startDate: '06-22-2023',
    endDate: '08-04-2023',
    responsibilities: [
      'APP SOCIAL : NEXT , Node JS 20 + , Clean Architecture , Redux Toolkit , TypeScript , Google Cloud , GitHub , Material IU , SonarQube ,Jest , Postman , Project Kanban , Postman ,BEM , Docker , React Hooks',
      'Integración de servicios Rest JSON',
      'Implementación de una Arquitectura FrontEnd',
      'Creación de formularios con yup y personalización de eventos en los componentes',
      'Planificación , estimación y control de horas (Github Project)',
      'Creación de una WIKI para la documentación del proyecto',
      'Integración de Redux Toolkit',
      'Integración Oauth2 con Google',
      'Configuración de un proyecto GCP para desarrollar y dar pase a producción',
      'Configuración del Sonarqube usando la imagen de Docker',
      'APP SOCIAL BACKEND : Node 20 + , Mongo Db , express , JWT , Bycript , express , Jest , Github',
      'Mantenimiento de las apis en Express',
      'Yaml para integración de CI en github',
      'Prueba de apis en Postman y Thunder Client',
      'Pruebas unitarias a las apis',
      'Pruebas unitaria a la conexión de la base de datos'
    ]
  },
  {
    id: 4,
    workType: WorkTypeEnum.Freelance,
    company: 'UNMSM virtual',
    position: 'Desarrollador independiente',
    logo: {
      src: '/company-logo/cinfo-unmsm.png',
      alt: 'UNMSM'
    },
    startDate: '02-22-2024',
    endDate: '06-04-2024',
    responsibilities: [
      'TECNOLOGIAS: React Native Expo , Node JS 20 + , Clean Architecture con 3 capas , JavaScript , SonarQube , Docker ,Jest , Postman, Postman ,BEM , Docker , React Native Paper , React Hooks',
      'Integración de servicios Rest JSON',
      'Implementación de arquitectura Frontend',
      'Planifiación , estimación y control de horas (Git Hub)',
      'Integración de Redux',
      'Testing de Funciones',
      'Configuración del Sonarqube usando la imagen dde Docker',
      'Mantenibilidad del código usando SonarQube',
      'Github prototipo : https://github.com/tesis-SanMarcos/app-tesis/tree/develop'
    ]
  },
  {
    id: 5,
    workType: WorkTypeEnum.Corporate,
    company: 'Devmente Factory',
    position: 'Analista Frontend',
    logo: {
      src: '/company-logo/devmentegang_logo.jpeg',
      alt: 'Devmente Factory'
    },
    startDate: '08-11-2023',
    endDate: '07-22-204',
    responsibilities: [
      'PROYECTOS REACT: APP Protecta (Expo) , Net Privada , Back Office (Micro Frontends)',
      'TECNOLOGIAS: Github , Node 16 , 18 , 20 , React , React Native Expo , StyleComponents , Firebase , Google , React Hooks ,Cloud , AWS , Google Analytics,Docker , CI , Postman .',
      'Configuración del proyecto en Github ( dependaboot para alerta de dependencias, CI , Git Actions)',
      'Integración pasarela de Pagos Kushki',
      'Eventos a analytics (Google Analytics , Firebase) usando Providers',
      'Consumo de api Rest (Cognito Aws : SocialFederation )',
      'Integración de Store Redux',
      'Integración Recaptcha Security',
      'Elaboración de estimación y planificación de los requisitos del cliente',
      'PROYECTOS ANGULAR:',
      'TECNOLOGIAS: Angular 17 , Creación de componentes , mantenimiento de requisitos , control de errores en la red, BootStrap , Postman , Gitlab',
      'Utilización de marco de trabajo Scrum Code Commit (GITLAB)',
      'Integración de Angular Components , Directivas',
      'Consumo de servicios',
    ]
  },
];
