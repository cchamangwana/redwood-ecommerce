const ComparisonTable = ({ products }) => {

  // function removeObjectWithId(arr, id) {
  //   const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  //   arr.splice(objWithIdIndex, 1);

  //   return arr;
  // }

  return (
    <div className="overflow-x-auto w-full">
       <h1 className="text-black text-3xl text-center title-font font-medium mb-8">
          Best Prices
      </h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Seller</th>
            <th>Category</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(( product) => {
            return (
              <tr>
              <td>
                  <div className="font-bold">{product.name}</div>
              </td>
              <td>
                {product.user.email}
                <br />
              </td>
              <td>{product.category.name}</td>
              <td>k{product.price}</td>

              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable
