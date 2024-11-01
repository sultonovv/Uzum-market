import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Counter({item}) {
    const {increment, decrement, deleteItem} = useContext(CartContext)
    const handleDecrement =()=>{
        if(item.qty === 1){
            deleteItem(item.id)
        }else{
            decrement(item.id)
        }
    }

    const handleIncrement =()=>{
        increment(item.id)
    }

  return (
    <div className="buttons">
    <button onClick={handleDecrement}>-</button>
    <p>{item.qty}</p>
    <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default Counter