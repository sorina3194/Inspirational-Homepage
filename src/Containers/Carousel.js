import React from "react";
import landscape1 from "../img/landscape1.jpeg";
import landscape2 from "../img/landscape2.jpeg";
import landscape3 from "../img/landscape3.jpeg";
import landscape4 from "../img/landscape4.jpeg";
import landscape5 from "../img/landscape5.jpeg";
import landscape6 from "../img/landscape6.jpeg";
import landscape7 from "../img/landscape7.jpeg";
import landscape8 from "../img/landscape8.jpeg";

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
            src={landscape1}
            alt="carousel-img"
            className="d-block w-100"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={landscape2}
            className="d-block  w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={landscape3}
            className="d-block  w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={landscape4}
            className="d-block w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={landscape5}
            className="d-block  w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={landscape6}
            className="d-block  w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={landscape7}
            className="d-block  w-100"
            alt="carousel-img"
            style={img}
          />
        </div>
        <div className="carousel-item">
          <img
            src={landscape8}
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
