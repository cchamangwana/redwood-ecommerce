import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AdminCell from 'src/components/AdminCell'

const AllProductsPage = () => {
  return (
    <>
      <MetaTags title="AllProducts" description="AllProducts page" />

      <AdminCell/>

    </>
  )
}

export default AllProductsPage
