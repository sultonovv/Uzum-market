import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Product() {
  const {slug} = useParams()
  const [ product, setProduct] = useState()

  function getProduct(){
    fetch(`https://5709cdd829da4f5e.mokky.dev/products/${slug}`).then(function(res){
      return res.json()
    }).then(function(data){
      setProduct(data)
    }).catch(function(err){
      console.log(err, 'olov');
      
    })
  }
  
  useEffect(()=> {
    getProduct()
  }, [slug]);

  return (
    <>
    <main>
    <div className="container">
    <div className="product">
        <h1>{product?.name}</h1>
      </div>
    </div>
    </main>

    </>
  )
}

export default Product