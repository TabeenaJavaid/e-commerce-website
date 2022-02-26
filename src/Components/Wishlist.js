import React from 'react'
import './CartProduct.css'
import WishedProduct from './WishedProduct'


function CartProduct({wishlist,setWishlist,cartProducts,setCartProducts}) {
    
  return (
    <div className='cart-list'>   
    {wishlist.length===0 && <div className='div-empty'> <i className="fa-solid fa-heart"></i> <h2>No items in wishlist</h2>  </div>}
    
    {wishlist.map(wish=>{
     return <WishedProduct cartProducts={cartProducts} setCartProducts={setCartProducts}  wish={wish} setWishlist={setWishlist} wishlist={wishlist} key={wish.id} img={wish.src} name={wish.name} description={wish.description} price={wish.price}/>
   
    })
  }
    </div>
  )
}

export default CartProduct
