export const standard = defineScenario({
  product: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        price: 3103866,
        image: 'String',
        user: {
          create: {
            email: 'String1280911',
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
        price: 5713377,
        image: 'String',
        user: {
          create: {
            email: 'String6581318',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        category: { create: { name: 'String', description: 'String' } },
      },
    },
  },
})
