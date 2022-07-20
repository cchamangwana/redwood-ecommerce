import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import DetailsCell from 'src/components/DetailsCell/DetailsCell'

const ProductDetailsPage = ({ id }) => {
  return (
    <>
      <MetaTags title="ProductDetails" description="ProductDetails page" />

      <DetailsCell id={id}/>
    </>
  )
}

export default ProductDetailsPage
