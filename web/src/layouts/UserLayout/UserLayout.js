import React from 'react'
import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'

const UserLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
  const [isOpen, setIsOpen] = React.useState(false)

  function ToggleNav() {
    setIsOpen(!isOpen)
    console.log(open)
  }

  return (
    <>
      <header>
        <div>
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
                  {/* <li>
                    <a>Products</a>
                  </li> */}
                  <li>
                    <a>Orders</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost normal-case text-xl">PriceWebsite</a>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                  <li>
                    <Link to={routes.home()}>Home</Link>
                  </li>
                  {/* <li>
                    <Link to={routes.products()}>Products</Link>
                  </li> */}
                  {isAuthenticated ? (
                    <li>
                      <Link to={routes.account()}>My Account</Link>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
            {isAuthenticated ? (
              <div className="navbar-end">
                <a onClick={logOut} className="btn btn-ghost">
                  Logout
                </a>
              </div>
            ):(
              <>
              <div className="navbar-end">
                <Link to={routes.login()} className="btn btn-ghost">
                  Login
                </Link>

               <Link to={routes.signup()} className="btn btn-ghost">
                 SignUp
               </Link>
             </div>
             </>
            )}
          </div>
          <hr />


        </div>
      </header>
      <Toaster />
      <main className="container mx-auto px-6">{children}</main>
    </>
  )
}

export default UserLayout
