import React from 'react'
import Carousal1 from './Images/Carousal1.jpg'
import Carousal2 from './Images/Carousal2.jpg'
import Carousal3 from './Images/Carousal3.jpg'
import './Carousal.css'


function Carousal() {
  return (
    <div className='div-carousel'>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= {Carousal2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Trending Bags</h5>
        <p>Best brands at affordable price.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Carousal1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Electronics</h5>
        <p>Shop our wide range of electronics.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Carousal3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Clothing</h5>
        <p>Latest styles at your doorstep now.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Carousal