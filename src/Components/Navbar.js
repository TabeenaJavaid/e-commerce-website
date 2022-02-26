import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar({cartProducts,wishlist}) {
  return (
    <div className='div-nav fixed-top'>
        <nav className='navbar '>
            <a className='nav-brand'>Tabeena's e-com App</a>
            <div className='navbar-nav'>
                <NavLink to= '/' className='nav-item'>Products</NavLink>
                <NavLink to='/wishlist' className='nav-item'>Wishlist <i className="fa-solid fa-heart"></i><sup>{wishlist.length}</sup></NavLink>
                <NavLink to='/cart' className='nav-item'>Cart <i className="fa-solid fa-cart-shopping"></i><sup>{cartProducts.length}</sup></NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar