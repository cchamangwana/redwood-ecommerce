export const standard = defineScenario({
  review: {
    one: {
      data: {
        text: 'String',
        product: {
          create: {
            name: 'String',
            description: 'String',
            price: 1580178,
            image: 'String',
            user: {
              create: {
                email: 'String2121378',
                hashedPassword: 'String',
                salt: 'String',
              },
            },

            category: { create: { name: 'String', description: 'String' } },
          },
        },

        user: {
          create: {
            email: 'String2581715',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },

    two: {
      data: {
        text: 'String',
        product: {
          create: {
            name: 'String',
            description: 'String',
            price: 3274559,
            image: 'String',
            user: {
              create: {
                email: 'String2519943',
                hashedPassword: 'String',
                salt: 'String',
              },
            },

            category: { create: { name: 'String', description: 'String' } },
          },
        },

        user: {
          create: {
            email: 'String1153860',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
