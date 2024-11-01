import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import Right from '../../public/icons/Right'

function ProductList(props) {
  return (
    <div className="container">
    <Link className='famous' to='/top'>Mashhur <Right/></Link>
    <div className="productlist">
    {props.list.map((item) => (
        <ProductCard key={item.id} product={item} />
    ))}
  </div>
  <div className="other">
    <button>Yana ko'rsatish 10</button>
  </div>
    </div>
  )
  
}

export default ProductList