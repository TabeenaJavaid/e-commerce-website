import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './CartProduct.css'
import Cart from './Cart'

function CartProduct({cartProducts,setCartProducts,sum}) {
  const [submitted,setSubmitted] =useState(false)
  const navigate =useNavigate()
  const handleOrder = () => {
    setSubmitted(true)
    setCartProducts([])
  }

  const goBack = () =>{
    navigate('/')
  }

if(submitted){
return <div className="card success" >
  <div className="card-body">
  <i class="fa-solid fa-hands-praying"></i>
  <h2 style={{color:'#c9184a'}}>Thanks for shopping with us.</h2>
  <h3 style={{color:'#c9184a'}}>Your order will be delivered soon.</h3>
  <button onClick={goBack} style={{marginLeft:'40%'}} type="button" class="btn btn-success">Go Back </button>
  </div>
</div>
}
  return (

    <>
    <div className='cart-list'>   
    {cartProducts.length===0 && <div className='div-empty'> <i class="fa-solid fa-bag-shopping"></i> <h2>Hey,it feels so light!</h2>  </div>}
    
    {cartProducts.map(cart=>{
     return ( <Cart  cart={cart} setCartProducts={setCartProducts} cartProducts={cartProducts} key={cart.id} img={cart.src} name={cart.name} description={cart.description} price={cart.price}/>
     )
    })
  }
  
   </div>
   {cartProducts.length !==0 &&  <div className='sum-cart'>

        <h6>Total items = {cartProducts.length}</h6> 
        <h6>Total Amount = Rs {sum}</h6> 
        <hr/>
        <button  onClick ={handleOrder}className='btn btn-success'>Buy Now</button>
        
   </div>}
   </>
   
  )
}

export default CartProduct
