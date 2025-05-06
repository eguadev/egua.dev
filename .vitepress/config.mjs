import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'pt-BR',
  title: 'Linguagem Égua',
  description: 'Programação em Português, Simples e Moderna',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap' }]
  ],
  appearance: false,

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Pesquisar',
                buttonAriaLabel: 'teste1',
              },
              modal: {
                displayDetails: 'Mostrar detalhes',
                resetButtonTitle: 'Apagar busca',
                backButtonTitle: 'teste3',
                noResultsText: 'Sem resultados para',
                footer: {
                  selectText: 'Selecionar',
                  selectKeyAriaLabel: 'teste4',
                  navigateText: 'Navegar',
                  navigateUpKeyAriaLabel: 'teste5',
                  navigateDownKeyAriaLabel: 'teste6',
                  closeText: 'Sair',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eguatech'},
      { icon: 'x', link: 'https://x.com/eguatech'},
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/eguatech/'},
      { icon: 'instagram', link: 'https://www.instagram.com/eguatech'},
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCDgGUdR_6hZ6lfVaQbkQPLw'}
    ],

    nav: [
      { text: 'Início', link: '/' },
      { text: 'Aprender', link: '/egua/' }
    ],

    sidebar: [
      {
        text: 'Aprender Lógica',
        items: [
          { text: 'Introdução', link: '/logica/' },
          { text: 'Glossário', link: '/logica/glossario' }
        ]
      },
      {
        text: 'Aprender Linguagem Égua',
        items: [
          { text: 'Introdução', link: '/egua/' },
          { text: 'Variáveis', link: '/egua/variaveis' },
          { text: 'Tipos de Dados', link: '/egua/tipos_dados' },
          { text: 'Operadores', link: '/egua/operadores' },
          { text: 'Fluxo de Controle', link: '/egua/fluxo_controle' },
          { text: 'Funções', link: '/egua/funcao' },
          { text: 'Funções Integradas', link: '/egua/funcoes_integradas' },
          { text: 'Bibliotecas', link: '/egua/bibliotecas' },
          { text: 'Classes', link: '/egua/classes' }
        ]
      }
    ],

    outline: {
      label: 'Nesta página'
    },

    docFooter: {
      prev: 'Página Anterior',
      next: 'Próxima Página'
    },

    footer: {
      message: 'Lançado sob licença MIT',
      copyright: `Direitos reservados © 2019-${new Date().getFullYear()} Lucas Pompeu Neves`
    },
  }
})
