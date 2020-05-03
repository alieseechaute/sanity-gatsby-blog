export default {
  widgets: [
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
                  buildHookId: '5eaedd1cbc739677d9ceb289',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-18jpfq9g',
                  apiId: 'dbe9d3f7-4865-4110-ac91-2f5836e18c80'
                },
                {
                  buildHookId: '5eaedd1c0ecc6b6f13d0b10e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-eos78yta',
                  apiId: 'af587416-c944-42ac-bf74-0f2737561b71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alieseechaute/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-eos78yta.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
