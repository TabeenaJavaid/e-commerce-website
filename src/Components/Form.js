import React from 'react'
import './Form.css'
function Form({input,setInput,setSearchedProducts,searchedProducts,products}) {
  const handleChange = e => {
    setInput(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
     const searchFilter = products.filter((el)=>{
    if(input ===''){
      return products
    } else if(el.item.toLowerCase().includes(input.toLowerCase())){
      return products
    }
    return false
    } )
    setSearchedProducts(searchFilter)
  }
 


  return (
    <div className='div-form'>
    <div className='heading'> Our Products <hr/></div>
    
    <form className='product-form'>
    <label htmlFor ='input'>Filter by:</label>
    <input id=' input'  type='text' className='product-input' value={input} onChange={handleChange}/>
    <button  onClick = {handleSubmit}  className='product-button' type='submit'>
      <i className="fa-solid fa-magnifying-glass"></i>
    </button>
   </form>
 <h4 className='h4'>Filtered by: {input}</h4>
  </div>
  )
}

export default Form