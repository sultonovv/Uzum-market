import React from 'react'
import { Link } from "react-router-dom";

function NullCart() {
  return (
    <div className="container">
        <div className="non-cart">
        <img src="https://uzum.uz/static/img/shopocat.490a4a1.png" alt="" width={128} height={128} />
        <h1>Savatingiz hozircha bo‘sh</h1>
        <p>Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz yoki to‘plamlarni ko‘rishingiz mumkin</p>
        <Link to='/'><button className='non-cart-button'>Bosh Sahifa</button></Link>
        </div>
    </div>
  )
}

export default NullCart