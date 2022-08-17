export const standard = defineScenario({
  product: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        price: 6689881,
        image: 'String',
        user: {
          create: {
            email: 'String296726',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        category: { create: { name: 'String', description: 'String' } },
      },
    },

    two: {
      data: {
        name: 'String',
        description: 'String',
        price: 9740195,
        image: 'String',
        user: {
          create: {
            email: 'String504626',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        category: { create: { name: 'String', description: 'String' } },
      },
    },
  },
})
