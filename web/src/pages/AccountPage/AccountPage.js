import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ProductsCell from 'src/components/Product/ProductsCell'
import { useAuth } from '@redwoodjs/auth'

const AccountPage = () => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Account" description="Account page" />

      <h1 className='font-semibold text-center text-blueGray-700 '>Account Page</h1>

        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-sm h-28">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          PRODUCTS
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          5
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
                          <i className="far fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 shadow-sm xl:mb-0 h-28">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          SALES
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          20
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 ">
                          <i className="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded shadow-sm mb-6 xl:mb-0 h-28">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          REVENUE
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          K92,400
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500">
                          <i className="fas fa-users"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* {id} */}
        <div style={{ marginTop: 20}}>
        <ProductsCell id={currentUser.id}/>
        </div>
        </div>

    </>
  )
}

export default AccountPage
