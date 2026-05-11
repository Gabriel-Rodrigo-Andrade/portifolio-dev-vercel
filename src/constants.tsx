import { Project, Service, TechItem } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Comtudo Black',
    description: 'Ecosystem completo para e-commerce B2B, automatizando o processamento de pedidos e sincronização de estoque entre múltiplos marketplaces. Desenvolvido com PHP e Laravel para garantir escalabilidade e segurança em transações de alto volume.',
    tech: ['PHP', 'Laravel', 'MySQL', 'API REST', 'Docker'],
    image: 'https://picsum.photos/seed/comtudo/800/450',
    liveUrl: 'https://gabrielrodrigoandrade.dev/',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Agenda Telefônica',
    description: 'Sistema corporativo de gestão de contatos projetado para alta performance em buscas granulares. Utiliza uma arquitetura limpa em PHP e otimização de queries MySQL para entregar resultados instantâneos, resolvendo a fragmentação de dados em ambientes empresariais.',
    tech: ['PHP', 'JavaScript', 'Tailwind CSS', 'MySQL'],
    image: 'https://picsum.photos/seed/agenda/800/450',
    liveUrl: 'https://gabrielrodrigoandrade.dev/',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Gestão de Pedidos',
    description: 'Plataforma administrativa para controle de PDV e logística interna. Integra o poder do Laravel no backend com a reatividade do Vue.js no frontend, proporcionando uma experiência de usuário fluida e monitoramento em tempo real de fluxos de venda.',
    tech: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
    image: 'https://picsum.photos/seed/gestao/800/450',
    liveUrl: 'https://gabrielrodrigoandrade.dev/',
    githubUrl: '#'
  },
  {
    id: '4',
    title: 'Catálogo Farmacêutico',
    description: 'Catálogo interativo para farmácias de manipulação, focado em UX acessível e performance mobile. Desenvolvido com Vue.js para garantir transições suaves e carregamento dinâmico de fórmulas, facilitando a visualização de produtos técnicos para o consumidor final.',
    tech: ['Vue.js', 'SCSS', 'PHP', 'JavaScript'],
    image: 'https://picsum.photos/seed/farmacia/800/450',
    liveUrl: 'https://gabrielrodrigoandrade.dev/',
    githubUrl: '#'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Desenvolvimento Full Stack',
    description: 'Construção de aplicações completas, do frontend moderno ao backend robusto e escalável.',
    icon: 'Code2'
  },
  {
    id: '2',
    title: 'Soluções Backend & APIs',
    description: 'Desenvolvimento de APIs RESTful e lógica de negócios complexa com PHP e Laravel.',
    icon: 'Server'
  },
  {
    id: '3',
    title: 'Gestão de Infraestrutura',
    description: 'Deploy e containerização de aplicações utilizando Docker e ambientes Linux.',
    icon: 'Database'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'PHP', icon: 'php', category: 'Backend' },
  { name: 'Laravel', icon: 'laravel', category: 'Backend' },
  { name: 'WordPress', icon: 'wordpress', category: 'Backend' },
  { name: 'Vue.js', icon: 'vue', category: 'Frontend' },
  { name: 'JavaScript', icon: 'javascript', category: 'Frontend' },
  { name: 'SCSS', icon: 'scss', category: 'Frontend' },
  { name: 'MySQL', icon: 'mysql', category: 'Database' },
  { name: 'Docker', icon: 'docker', category: 'Others' },
  { name: 'Linux', icon: 'linux', category: 'Others' },
  { name: 'Git', icon: 'git', category: 'Others' }
];
