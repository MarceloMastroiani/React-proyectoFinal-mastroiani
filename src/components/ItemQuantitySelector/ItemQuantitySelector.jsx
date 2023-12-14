import React from "react";
import { AddItemButton } from "../AddItemButton";
import "./ItemQuantity.css"
export const ItemQuantitySelector = () => {

  const [quantity, setQuantity] = React.useState(1);

  const arr = [
    1, 2
  ]

  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  }

  const handleSubstractProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleResetQuantity = () => {
    setQuantity(1);
  }

  return (
    <div className="contador">
      <div>
        <button onClick={handleSubstractProduct}>-</button>
        <span value={quantity} disabled>{quantity}</span>
        <button onClick={handleAddProduct}>+</button>
      </div>
      <AddItemButton quantity={quantity} handleResetQuantity={handleResetQuantity}/>
    </div>
  );
};
