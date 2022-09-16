import React from "react";

const Compare = ({ handleCompare }) => {
    return (
      <button
        className="flex ml-2 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
        onClick={handleCompare}
      >
        Compare Price
      </button>
    );
}

export default Compare
