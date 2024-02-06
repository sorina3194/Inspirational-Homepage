import React from "react";
import nature1 from "../img/nature1.jpg";
import nature2 from "../img/nature2.jpg";
import nature3 from "../img/nature3.jpg";
import nature4 from "../img/nature4.jpg";
import nature5 from "../img/nature5.jpg";
import nature6 from "../img/nature6.jpg";
import nature7 from "../img/nature7.jpg";
import nature8 from "../img/nature8.jpg";
import './carousel.css'
const img = {
  height: "100vh",
  filter: "blur(5px)",
};
const buttonStyle = {
  opacity: "1",
};
export default function Carousel() {
  return (
    <div
      id="carouselSlide"
      className="carousel slide carousel-fade"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={nature1}
            alt="carousel-img"
            className="d-block w-100"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={nature2}
            className="d-block  w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={nature3}
            className="d-block  w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={nature4}
            className="d-block w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={nature5}
            className="d-block  w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={nature6}
            className="d-block  w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={nature7}
            className="d-block  w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={nature8}
            className="d-block o w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
      </div>
      <button
        style={buttonStyle}
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselSlide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        style={buttonStyle}
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselSlide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
