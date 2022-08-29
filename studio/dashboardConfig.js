export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '630d2ccf716a0f2bdf99b969',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fsyh18rj',
                  apiId: '1ceafc6c-b1e7-46cd-96c5-444c884bc9fd'
                },
                {
                  buildHookId: '630d2cd0716a0f2ddc99b842',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4izt3v5v',
                  apiId: '61a1576d-ddee-4835-910c-5903690e357d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BradCoffield/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4izt3v5v.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
