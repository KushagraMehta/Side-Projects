import React, { useState } from "react";
function Slideshow() {
  let [slideIndex, updateSlide] = useState(1);
  function changeSlides(value) {
    if (slideIndex + value < 1) updateSlide(3);
    if (slideIndex + value > 3) updateSlide(1);
  }
  function currentSlide(value) {}
  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img alt="first" src={require("./image/home1.png")} />
          <div className="text">Caption Text</div>
        </div>
        <div className="mySlides fade">
          <img alt="seconds" src={require("./image/home2.png")} />
          <div className="text">Caption Text</div>
        </div>
        <div className="mySlides fade">
          <video alt="third" src={require("./image/Video.mp4")} />
          <div className="text">Caption Text</div>
        </div>
        <a className="prev" onClick={() => changeSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => changeSlides(1)}>
          &#10095;
        </a>
      </div>
      <div className="dotclass">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
}
export default Slideshow;
