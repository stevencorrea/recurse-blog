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
                  buildHookId: '5ff2421be363dbcd167d9157',
                  title: 'Sanity Studio',
                  name: 'recurse-blog-studio',
                  apiId: 'b513b664-7176-4969-a285-2453a2b90067'
                },
                {
                  buildHookId: '5ff2421b80da58c26c9fa9b6',
                  title: 'Blog Website',
                  name: 'recurse-blog',
                  apiId: '294dd329-9923-4208-bd8e-11e01b6e35cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stevencorrea/recurse-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://recurse-blog.netlify.app', category: 'apps' }
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
