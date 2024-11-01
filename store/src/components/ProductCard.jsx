import React, { useContext } from 'react'
import Star from '../../public/icons/Star'
import { Link } from 'react-router-dom'
import Heart from '../../public/icons/Heart'
import BagIcon from '../../public/icons/BagIcon'
import { CartContext } from '../context/CartContext'
import { SavedContext } from '../context/SavedContext'

function ProductCard({ product }) {
    const {id,name, images, price, price_per_month, reviews, discount_price } = product
    const {addCart} = useContext(CartContext) ;
    const {addSaved} = useContext(SavedContext)
    function handleClick(){
        addCart(product)
    }
    function addItemSaved(){
        addSaved(product)
    }
  return (
    <div className="container">

        <div className="card">
        <Link to={'/product/' + id}>
            <div className="card-image">
                <img src={images[0]} alt={name} />
            </div>
        </Link>
            <div className="card-content">
               <Link to={'/product/' + id}> <p>{name}</p></Link>
                <p> <span><Star/> ( {reviews} sharhlar)</span></p>
                <del>{price}</del>
                <h2>{discount_price} so'm</h2>
            </div>
            <div className="card-buttons">
                <button onClick={addItemSaved}><Heart /></button>

                <button onClick={handleClick} className="cart-saved">
                <BagIcon />
                </button>
            </div>
        </div>

    </div>
)
}

export default ProductCard