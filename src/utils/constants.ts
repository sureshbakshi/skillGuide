
       export const AppConstants = {
        menu1 : [
            {
              id: 1,
              label: 'NonTextContent',
              to: '/accessibility/nonTextContent'
            },
            {
              id: 2,
              label: 'Menu 2',
              to: '#menu-2'
            },
            {
              id: 3,
              label: 'Menu 3',
              content: [
                {
                  id: 4,
                  label: 'Test',
                  to: '/test'
                }
              ]
            },
            {
              id: 14,
              icon: 'external-link',
              label: 'External Link',
              externalLink: true,
              to: 'https://www.google.com'
            }
          ]
    };
