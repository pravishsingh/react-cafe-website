import React from "react";
import Slider from "react-slick";
import "./Slider2.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div id="container1" className="slider-container">
      <Slider {...settings}>
        <div className="quote">
          <h3 className="font-mono">"I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot!"</h3>
        </div>
        <div className="quote">
          <h3 className="font-mono">“Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired and success achieved.”</h3>
        </div>
        <div className="quote">
          <h3 className="font-mono">"You never know what's around the corner. It could be everything. Or it could be nothing. You keep putting one foot in front of the other, and then one day you look back and you've climbed a mountain."</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
