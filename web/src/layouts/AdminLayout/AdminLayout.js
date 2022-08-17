import {Link, routes}  from "@redwoodjs/router"
const AdminLayout = ({ children }) => {
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
          <a className="btn btn-ghost normal-case text-xl">PriceWebsite</a>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to={routes.admin()}>Home</Link>
              </li>
              <li>
                <Link to={routes.products()}>All Products</Link>
              </li>
              <li>
                <Link to={routes.orders()}>All Orders</Link>
              </li>
              <li>
                <Link to={routes.newProduct()}>Add Product</Link>
              </li>
              <li>
                <Link to={routes.newCategory()}>Create Category</Link>
              </li>
              <li>
                <Link to={routes.categories()}>Categories</Link>
              </li>
              <li>
                <Link to={routes.users()}>Users</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost">Logout</a>
        </div>
      </div>
      <hr />
      <main className="container mx-auto px-4 py-10">{children}</main>
    </>
  )
}

export default AdminLayout
