export const standard = defineScenario({
  order: {
    one: {
      data: {
        user: {
          create: {
            email: 'String1829695',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        product: {
          create: {
            name: 'String',
            description: 'String',
            price: 8099018,
            image: 'String',
            user: {
              create: {
                email: 'String6436160',
                hashedPassword: 'String',
                salt: 'String',
              },
            },

            category: { create: { name: 'String', description: 'String' } },
          },
        },
      },
    },

    two: {
      data: {
        user: {
          create: {
            email: 'String6303549',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        product: {
          create: {
            name: 'String',
            description: 'String',
            price: 806217,
            image: 'String',
            user: {
              create: {
                email: 'String6838514',
                hashedPassword: 'String',
                salt: 'String',
              },
            },

            category: { create: { name: 'String', description: 'String' } },
          },
        },
      },
    },
  },
})
