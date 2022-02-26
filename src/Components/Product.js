import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Product.css'

function Product({product,img,name,description,price,cartProducts,setCartProducts,wishlist,setWishlist,item,setItem}) {
const navigate=useNavigate()

const onAdd = product => {
  setCartProducts ([...cartProducts,product])
}
  
const onWishAdd = product => {
  setWishlist ([...wishlist,product])
}
  
const itemDetail =(product)=>{
  setItem([product])
  navigate('/item')
}
  
  
  return (
    <div className="card" style={{width:'18rem'}}>
    <img onClick={()=>itemDetail(product)} src={img} className="card-img-top" style={{height:'200px'}} alt="..."/>
    <div className="card-body">
      <h5 onClick={()=>itemDetail(product)} className="card-title">{name}</h5>
      <p onClick={()=>itemDetail(product)} className="card-text">{description}</p>
      <h6 onClick={()=>itemDetail(product)}>Rs. {price}</h6>
      <hr/>
      <button onClick={()=> onAdd(product)}  className="btn btn-info">Add to cart</button>
      <button onClick={()=> onWishAdd(product)}  className="btn btn-dark">Wishlist</button>
    </div>
  </div>
  )
}

export default Product