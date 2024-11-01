import React, { useContext } from 'react'
import TrashBox from '../../public/icons/TrashBox'
import { CartContext } from '../context/CartContext'
import Counter from './Counter'
import NullCart from './NullCart'

function CartProductCard() {
    const { cart, deleteItem, getTotal } = useContext(CartContext)
  return (
    <>
    <div className="container">
        <div className="cart">
            <h1>{ getTotal() > 0 ? `Savatingiz ${getTotal()}mahsulot` : <NullCart/>}</h1>
            <div className="cart-content">
                <div className="order-info">
                    {
                        cart.map((item, key) =>(
                            <div className="bottom" key={key}>
                            <p>Uzum Market omborida </p>
                            <h1>15-oktabr orasida yetkazamiz</h1>
                            <div className="bottom-content">
                                <img src={item.images[0]} height={120} width={120} alt="" />
                                <div className="context">
                                    <div className="context-top">
                                        <p>
                                        {item.name}</p>
                                        <button onClick={()=> deleteItem(item.id)}> <TrashBox/> <p>Yo'q qilish</p></button>
                                    </div>
                                    <div className="context-bottom">
                                        <p>Sotuvchi: World of stationery</p>
                                        <Counter item={item}/>
                                        <span><h2>{item.discount_price.toLocaleString()}</h2> <del>{item.price.toLocaleString()}</del></span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        ))
                    }

                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default CartProductCard