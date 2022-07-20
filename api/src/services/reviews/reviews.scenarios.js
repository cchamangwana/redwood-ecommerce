export const standard = defineScenario({
  review: {
    one: {
      data: {
        product: {
          create: {
            name: 'String',
            description: 'String',
            price: 5962818,
            image: 'String',
            user: {
              create: {
                email: 'String8841985',
                hashedPassword: 'String',
                salt: 'String',
              },
            },

            category: { create: { name: 'String', description: 'String' } },
          },
        },

        user: {
          create: {
            email: 'String4743215',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },

    two: {
      data: {
        product: {
          create: {
            name: 'String',
            description: 'String',
            price: 4360518,
            image: 'String',
            user: {
              create: {
                email: 'String5703730',
                hashedPassword: 'String',
                salt: 'String',
              },
            },

            category: { create: { name: 'String', description: 'String' } },
          },
        },

        user: {
          create: {
            email: 'String4444601',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
