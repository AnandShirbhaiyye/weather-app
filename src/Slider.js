import React from 'react'
import One from "./images/a.jpg"
import Two from "./images/b.jpg"
import Three from "./images/c.jpg"

export default function Slider() {
    return (
        <div className="container mt-3">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style={{height:"300px"}}>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Two} class="d-block w-100 my-slide-im border" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={One} class="d-block w-100 my-slide-im border" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Three} class="d-block w-100 my-slide-im border" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
