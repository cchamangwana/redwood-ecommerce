import ProductsCell from 'src/components/Product/ProductsCell'
import { useAuth } from '@redwoodjs/auth'

const ProductsPage = () => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return <ProductsCell id={currentUser.id}  />
}

export default ProductsPage
