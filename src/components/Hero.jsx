import React from "react";
import Doctor from "../assets/doctor-min.png";
import "../styles/hero.css";

function Hero() {
  return (
    <div id="hero" className="d-flex">
      {/* LEFT */}
      <div className="d-flex align-items-center justify-content-center">
        <div id="heroLeft">
          <h1>We save Lives.</h1>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <button>View Services</button>
        </div>
      </div>

      {/* RIGHT */}
      <div id="heroRight" className="d-flex">
        <img
          src={Doctor}
          alt="Images of Doctors"
          srcset=""
          width="fit-content"
        />
      </div>
    </div>
  );
}

export default Hero;
