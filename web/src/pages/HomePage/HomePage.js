import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ItemsCell from 'src/components/ItemsCell/ItemsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <ItemsCell />
    </>
  )
}

export default HomePage
