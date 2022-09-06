import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
const AccountLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Orders</a>
              </li>
            </ul>
          </div>
          <Link to={routes.home()}>
          <a className="btn btn-ghost normal-case text-xl">Ecommerce</a>
          </Link>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to={routes.products( {id: currentUser.id})}>My Products</Link>
              </li>
              {/* <li>
                <Link to={routes.orders()}>My Orders</Link>
              </li> */}
              <li>
                <Link to={routes.newProduct()}>Add Product</Link>
              </li>
              {/* <li>
                <Link to={routes.newProduct()}>My Suppliers</Link>
              </li> */}
            </ul>
          </div>
        </div>
        {isAuthenticated && (
        <div className="navbar-end">
          <a onClick={logOut} className="btn btn-ghost">Logout</a>
        </div>
        )}
      </div>
      <hr />
      {/* <div class="alert alert-success shadow-lg container mx-auto py-5 mt-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className='mr-10'>Welcome.</span>
        </div>
      </div> */}

      <main className="container mx-auto px-4 py-10">

        {children}</main>
    </>
  )
}

export default AccountLayout
