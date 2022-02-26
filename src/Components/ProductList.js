import React from 'react'
import Product from './Product'
import './ProductList.css'
import Form from './Form'
import Carousal from './Carousal'




function ProductList({products,input,setInput,searchedProducts,setSearchedProducts,setCartProducts,cartProducts,wishlist,setWishlist,setItem,item}) {

  return (
    <>
    <Carousal/>
    
    <Form products={products} input ={input} setInput={setInput} setSearchedProducts={setSearchedProducts} searchedProducts={searchedProducts}/>
    <div className='product-list'>   
    {searchedProducts.length===0 && <div className='div-unavailable'>  <i class="fa-solid fa-face-frown"></i> Sorry...Product currently unavailable</div>}
    
    {searchedProducts.map(product=>{
     return <Product item={item} setItem={setItem} products={products} product={product} wishlist={wishlist} setWishlist={setWishlist} setCartProducts={setCartProducts} cartProducts={cartProducts} searchedProducts={searchedProducts} key={product.id} img={product.src} name={product.name} description={product.description} price={product.price}/>
   
    })
  }
    </div>
    </>
    
  )
    
}

export default ProductList