import React, { createContext, useState } from 'react'

export const CartContext = createContext();

function CartProvider( {children} ) {
    const [cart, setCart] = useState([])

    function addCart(product){
      if(cart.some(item => item.id === product.id)){
        setCart(cart.map(item=> item.id === product.id ? {...item, qty: item.qty + 1}:item))
      }else{

        let obj = {...product, qty:1}
        setCart([...cart, obj])

      }
    }
    function deleteItem(id){
      setCart(cart.filter(item => item.id !== id))
    }
    function increment(id){
      setCart(cart.map(item => item.id === id ? {...item,qty: item.qty + 1 }: item))
    }
    function decrement(id){
      setCart(cart.map(item => item.id === id ? {...item,qty: item.qty === 1 ? 1 : - 1 }: item))
    }
    function getTotal(){
      let total = 0
      for( let item of cart){
        total += item.qty
      }
      return total
    }
  return <CartContext.Provider value={{ cart, addCart, increment, decrement, deleteItem , getTotal}}>
    {children}
  </CartContext.Provider>
    
    
  
}

export default CartProvider