import React from 'react'
import './Cart.css'

function Cart({cart,img,name,description,price,cartProducts, setCartProducts}) {
    const onRemoval = cart => {
        alert(`Item ${cart.name} will be removed from cart`)
        setCartProducts(cartProducts.filter(cartProduct=>{
            if(cartProduct.id !== cart.id){
                return cartProducts
            }
            return false
        }))
      }
        

    return (
        <div className="card" style={{width:'18rem'}}>
        <img src={img} className="card-img-top" style={{height:'200px'}} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <h6>Rs. {price}</h6>
          <hr/>
          <button onClick={()=> onRemoval(cart)} className="btn btn-danger">Remove</button>
        </div>
      </div>
      )
}

export default Cart