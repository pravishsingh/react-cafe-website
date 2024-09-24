
import "./Slider1.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MultipleItems() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container space-x-5  ">
      <Slider {...settings}>
        <div className="crousel-one">
          <div className="one">

            <div className="one-left">
              <h1 className="text-black text-xl  max-[500px]:text-sm">FLAT</h1>

              <h1 className="text-green-400 max-[500px]:text-sm  text-3xl font-bold">&#x20b9;75 <br/> OFF</h1>
              <h1 className="tracking-wider font-bold  max-[500px]:text-sm">ON ORDER ABOVE &#x20b9;399 </h1>

              <span className="crousel-btn">
              <h1 className="text-l font-bold">Use Code</h1>
              <h2 className="font-bold">FGU87</h2>
              </span>

              </div>

              <div className="one-right " >
                <img  src="/Sunset/div3/burger.png"/>
              </div>

          
          </div>
        </div>
        {/* second */}
        <div className="crousel-one">
          <div className="one" >

            <div className="one-left">
              <h1 className="text-black text-xl max-[500px]:text-sm  ">FLAT</h1>

              <h1 className="text-green-400 text-3xl font-bold max-[500px]:text-sm">&#x20b9;159 <br/> OFF</h1>
              <h1 className="tracking-wider font-bold max-[500px]:text-sm">ON ORDER ABOVE &#x20b9;299 </h1>

              <span className="crousel-btn">
              <h1 className="text-l font-bold">Use Code</h1>
              <h2 className="font-bold">PRA23</h2>
              </span>

              </div>

              <div className="one-right " >
                <img  src="/Sunset/div3/pizzza.png"></img>
              </div>

          
          </div>
        </div>
        {/* third */}
        <div className="crousel-one">
          <div className="one">

            <div className="one-left">
              <h1 className="text-black text-xl max-[500px]:text-sm  ">FLAT</h1>

              <h1 className="text-green-400 text-3xl font-bold max-[500px]:text-sm">&#x20b9;49 <br/> OFF</h1>
              <h1 className="tracking-wider font-bold max-[500px]:text-sm">ON ORDER ABOVE &#x20b9;149 </h1>

              <span className="crousel-btn">
              <h1 className="text-l font-bold">Use Code</h1>
              <h2 className="font-bold">ISH32</h2>
              </span>

              </div>

              <div className="one-right " >
                <img  src="/Sunset/div3/egg-omlet.jpg"/>
              </div>

          
          </div>
        </div>
        {/* fourth */}
        <div className="crousel-one">
          <div className="one">

            <div className="one-left">
              <h1 className="text-black text-xl max-[500px]:text-sm ">FLAT</h1>

              <h1 className="text-green-400 text-3xl font-bold max-[500px]:text-sm">&#x20b9;75 <br/> OFF</h1>
              <h1 className="tracking-wider font-bold max-[500px]:text-sm">ON ORDER ABOVE &#x20b9;199 </h1>

              <span className="crousel-btn">
              <h1 className="text-l font-bold">Use Code</h1>
              <h2 className="font-bold">LKI82</h2>
              </span>

              </div>

              <div className="one-right " >
                <img  src="/Sunset/div3/momose.jpg"/>
              </div>

          
          </div>
        </div>
        {/* fifth */}
    
      </Slider>
    </div>
  );
}

export default MultipleItems;
