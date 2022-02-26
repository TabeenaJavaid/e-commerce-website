import React from 'react'
import {useNavigate} from 'react-router-dom'

function ItemDetails({item,setItem}) {
const navigate=useNavigate()



const handleGoingBack=() => {
    navigate('/')
    setItem([])
    
}

  return (
      item.map((el=>{
      return  <div key={el.id} className="card" style={{width:'18rem',marginTop:'80px',marginLeft:'20px'}}>
        <img src={el.src} className="card-img-top" style={{height:'200px'}} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{el.name}</h5>
          <p className="card-text">{el.description}</p>
          <h6>Rs. {el.price}</h6>
          <hr/>
          <button onClick={handleGoingBack} className="btn btn-info">Go Back</button>
         
        </div>
      </div>
      }))
    
  )
}

export default ItemDetails