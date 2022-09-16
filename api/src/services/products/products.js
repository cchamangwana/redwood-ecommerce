import { db } from 'src/lib/db'

export const products = () => {
  return db.product.findMany()
}

export const product = ({ id }) => {
  return db.product.findUnique({
    where: { id },
  })
}

export const createProduct = ({ input }) => {
  return db.product.create({
    data: input,
  })
}

export const getUserProducts = ({ id }) => {
  return db.product.findMany({
    where: {
      userId: id,
    },
  })
}

export const getProductsByCategory = ({ id }) => {
  return db.product.findMany({
    where: {
      categoryId: id,
    },
    orderBy: {
      price: "asc"
    }
  })
}

export const updateProduct = ({ id, input }) => {
  return db.product.update({
    data: input,
    where: { id },
  })
}

export const deleteProduct = ({ id }) => {
  return db.product.delete({
    where: { id },
  })
}

export const Product = {
  user: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).user(),
  category: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).category(),
  orders: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).orders(),
  reviews: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).reviews(),
}
