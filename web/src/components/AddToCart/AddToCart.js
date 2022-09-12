import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { toast } from '@redwoodjs/web/toast'


const AddToCart = ({ product }) => {
  const { addItem } = useShoppingCart();

  function handleAddItem() {
    addItem(product);
    console.log("addedItem", product);
    toast.success(`${product.name} is added to your cart!`)
  }

  return (
    <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" onClick={handleAddItem}>
      Purchase
    </button>
  );
}

export default AddToCart

