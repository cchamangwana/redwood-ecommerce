const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                <div className="font-bold">Hart Hagerty</div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>

          <tr>
            <td>
                <div className="font-bold">Hart Hagerty</div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>

        </tbody>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default ComparisonTable
