import { Project, Service, TechItem } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce OpenMage',
    description: 'Desenvolvimento de e-commerces personalizados utilizando a plataforma OpenMage (Magento 1), focando em performance e customização de regras de negócio.',
    tech: ['PHP', 'OpenMage', 'MySQL', 'JavaScript'],
    image: 'https://picsum.photos/seed/shop/800/450',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Sistema de Jornada de Motorista',
    description: 'Otimização e refatoração de sistema crítico com implementação de processamento assíncrono via filas para geração de reprocessos em background.',
    tech: ['PHP', 'Laravel', 'Redis', 'Zend'],
    image: 'https://picsum.photos/seed/truck/800/450',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Integrações de APIs REST/SOAP',
    description: 'Desenvolvimento de módulos de comunicação robustos para integração entre sistemas legados e plataformas modernas.',
    tech: ['PHP', 'Zend', 'REST', 'SOAP'],
    image: 'https://picsum.photos/seed/api/800/450',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Backend de Alta Performance',
    description: 'Arquitetura de sistemas escaláveis com PHP (Laravel/Zend), processamento em filas e otimização de banco de dados.',
    icon: 'Server'
  },
  {
    id: '2',
    title: 'Desenvolvimento Full-Stack',
    description: 'Criação de interfaces modernas com Vue.js/Nuxt.js e React integradas a ecossistemas robustos.',
    icon: 'Layout'
  },
  {
    id: '3',
    title: 'Mobile com Flutter',
    description: 'Desenvolvimento de aplicações nativas multiplataforma com foco em experiência do usuário e agilidade.',
    icon: 'Zap'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'PHP', icon: 'php', category: 'Backend' },
  { name: 'Laravel', icon: 'laravel', category: 'Backend' },
  { name: 'Zend', icon: 'zend', category: 'Backend' },
  { name: 'Vue.js', icon: 'vue', category: 'Frontend' },
  { name: 'Nuxt.js', icon: 'nuxt', category: 'Frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'Frontend' },
  { name: 'Flutter', icon: 'flutter', category: 'Others' },
  { name: 'MySQL', icon: 'mysql', category: 'Database' },
  { name: 'Redis', icon: 'redis', category: 'Database' },
  { name: 'Docker', icon: 'docker', category: 'Others' },
  { name: 'SOLID', icon: 'code', category: 'Others' }
];
