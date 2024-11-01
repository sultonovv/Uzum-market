import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import { productList } from '../constants/product'
import Api from '../api';
import { urls } from '../constants/urls';

function Home() {
  const [banners, setBanners]= useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  function getBannners(){
    fetch('https://5709cdd829da4f5e.mokky.dev/banners').then(function(res){
      return res.json()
    }).then(function(data){
      setBanners(data)
    }).catch(function(err){
      console.log(err, 'olov');
      
    })
  }


  function getProducts(){
    Api.get(urls.products.get)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err, "Error in get products"))
      .finally(() => setLoading(false));
  }
  
  useEffect(()=>{
    getBannners()
    getProducts()
  }, [])

  return (
  
    <>

      <Banner list={banners.filter(item=> item.position === 'hero')}/>
      <ProductList list={products}/>
      <Banner list={banners.filter(item=> item.position === 'bottom')}/>
    <ProductList list={products}/>
    </>
  )
}

export default Home