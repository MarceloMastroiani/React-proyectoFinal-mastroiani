import React from 'react'
import { CartContext } from '../../context'

export const AddItemButton = ({label = "AGREGAR AL CARRITO", quantity, handleResetQuantity}) => {

  const { itemCount, setItemCount } = React.useContext(CartContext);

  const handleAddCart = () => {
    setItemCount(itemCount + quantity);
    handleResetQuantity();
  }

  return (
    <button className='btnAgregar' onClick={handleAddCart} style={{margin: '10px 0'}}>{label}</button>
  )
}