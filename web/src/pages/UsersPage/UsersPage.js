import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import UsersCell from 'src/components/Users/UsersCell/UsersCell'

const UsersPage = () => {
  return (
    <>
      <MetaTags title="Users" description="Users page" />

      <h1>UsersPage</h1>
      <UsersCell/>
    </>
  )
}

export default UsersPage
