import React from 'react'
import './CartProduct.css'

function WishedProduct({wish,img,name,description,price,wishlist,setWishlist,cartProducts,setCartProducts}) {

    const onRemoval = wish => {
        alert(`Item ${wish.name} will be removed from wishlist`)
        setWishlist(wishlist.filter(wishedItem=>{
            if(wishedItem.id !== wish.id){
                return wishlist
            }
        }))
      }

    const onBuying = wish =>{
      setCartProducts ([...cartProducts,wish])
      setWishlist(wishlist.filter(wishedItem=>{
        if(wishedItem.id !== wish.id){
            return wishlist
        }
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
          <button onClick={()=> onBuying(wish)}  className="btn btn-info">Add to cart</button>
          <button onClick={()=> onRemoval(wish)}  className="btn btn-danger">Remove</button>
        </div>
      </div>
      )
}

export default WishedProduct