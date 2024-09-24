import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Components/Navbar";
import "./Home.css";
import "./Home-resp.css"
import MultipleItems from "../Slider/Slider1";
import SimpleSlider from "../Slider/Slider2";
import Footer from "../Footer/Footer";
function Common( {currentPage}){
    return(
        <>

<div className="div1-main">
   <div className="div1-sub-main">
<div className="home-img">
    <div className="home-shadow">
 <Navbar currentPage={currentPage}/>

 {/* home page conten start */}

<div className="home-content">

  <div className="div1-left">
    <div className="left-head">
        <h2 className="text-2xl font-bold">WELCOME</h2>
    </div>

    <div className="left-para" >
        <h4 className="font-playefair-Display"> Discover Culinary Elegance at Café Sunset: Where Every Sip and Bite Unveils a Symphony of Flavors and Moments.</h4>
    </div>

    <div className="left-head2">
        <h3>Gateway to Serenity <br/>Culinary Delights</h3>
    </div>

    <div className="left-para2">
        <h6 className="text-xs"> Step into a World Where Abiance. Flavor and Warmth Coverge - A Haven Where Every Visit Feels Like Coming Like Coming Home.</h6>
    </div>

    <button>Order Now</button>


  </div>
  
  
  <div className="div1-right m-auto">
    <div className="right-heading">
        <h1>We are Known For  </h1>
    </div>
    {/* Crousel part */}
    <div id="slider" className=" w-[500px] h-[400px] mt-8 ml-8 " >
        
 <Slider {...settings}>
        {data.map((d) => (
            <div className="bg-white text-black h-[400px]">   {/* div for card */}
                <div className="w-[150px]">
                    <img src={d.img} alt="" className=" h-[100px]"/>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-red-500 text-center">{d.heading}</h4>
                    <p className="text-sm text-center">{d.content}</p>
                    <h5 className="text-red-500 text-xs uppercase p-2 ">{d.sub_heading}</h5>
                </div>
             </div>
             
            
        ))}

</Slider>
    </div>



  </div>
</div> {/* home content div end */}
 </div>  {/* Shadow div end */}

</div> {/* Home img div end */}
</div>

{/* Second div start----------------------------------------------------------------------------- */}
<div className="div2">
  <div id="div2-left" className="div2-left m-5 ml-7 space-y-7">
    <div className="div2-res-head space-y-3">
    <h3 className="font-bold text-xl">ABOUT US</h3>
    <h1 className="text-4xl font-bold ">The story behind sunset ...</h1>
    </div>
{/* for ressponsive only */}
<div className="div2-right-round-resp">
      <div className="div2-right-img">
        <img src="Sunset/Chef.jpg"></img>
      </div>
    </div>
  {/* resoponsive end */}

    <p className="font-bold text-l">Welcome to Sunset Café, where our journey began with Chef André's bold decision to depart from the world of haute cuisine and create a culinary sanctuary rooted in simplicity and heartfelt connection. <br/><br/> <span className="res-hide-p"> Inspired by a chance encounter with a charming café bathed in the warm glow of twilight, Chef André envisioned a place where genuine hospitality and exceptional flavors intertwine. At Sunset Café, each dish is a reflection of Chef André's dedication to crafting culinary experiences that nourish both body and soul.</span></p>

    <button>Read More</button>
  </div>
  <div className="div2-right">
    <div className="div2-right-round">
      <div className="div2-right-img">
        <img src="Sunset/Chef.jpg"></img>
      </div>
    </div>
  </div>
</div> {/* div2 end */}

{/* third div start ---------------------------------------------------------------------------------------------------------------------------*/}
<div className="div3">
  <h2 className="font-bold text-2xl ml-5 pt-4 "> DEALS AND OFFERS</h2>
  <div className="div3-crousel">
  {<MultipleItems/>}

  </div>
</div>

{/* Fourth div start  */}
<div className="div4">

  <div className="div4-left">
    {/* Responsive */}
    <div className="div4-right-resp">
    <h3 className="text-orange-400 text-3xl max-[500px]:text-xl font-bold tracking-widest">Reservation</h3>
    <h1 className="text-white text-4xl max-[500px]:text-xl font-bold tracking-widest mt-4 ">BOOK A TABLE ONLINE</h1>

<div className="div-form">
    <input className="name" type="text" placeholder="Your Name" ></input>
    <input className="email" type="email" placeholder="Your Email" ></input>
<br></br>
<br></br>
    <input type="text" placeholder="Date & Time" ></input>
    <input className="people"  type="text" placeholder="No. of people" ></input>
    <select className="selct">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <br></br>
    <br></br>
    <input className="request" type="text" placeholder="Special Request"></input>
    <br></br>
    <br></br>
    <button className="div4-btn" >BOOK NOW</button>
    </div>
  </div>
    {/* Responsive end */}
     </div>
 

  <div className="div4-right">
    <h3 className="text-orange-400 text-3xl max-[500px]:text-lg tracking-wide">Reservation</h3>
    <h1 className="text-white text-4xl max-[500px]:text-lg tracking-widest mt-4 ">BOOK A TABLE ONLINE</h1>

<div className="div-form">
    <input className="name" type="text" placeholder="Your Name" ></input>
    <input className="email" type="email" placeholder="Your Email" ></input>
<br></br>
<br></br>
    <input type="text" placeholder="Date & Time" ></input>
    <input className="people"  type="text" placeholder="No. of people" ></input>
    <select className="selct">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <br></br>
    <br></br>
    <input className="request" type="text" placeholder="Special Request"></input>
    <br></br>
    <br></br>
    <button className="div4-btn" >BOOK NOW</button>
    </div>
  </div>

</div>
{/* div 5 start */}
<div className="div5">
  <div className="div5-shadow">
    <div className="div5-half-shadow">
      <div className="quote-head">
    <h1>Motivation Being Our Hard Work</h1>
    </div>
    <SimpleSlider/>

    </div>
<div className="div5-content">
  <h1>Subscribe To Newsletter</h1>
  <h2>and Get -20% off</h2>
  <p>Your Gateway to Serenity, Culinary Delights, and Uniforgettable Moments.</p>

  <div className="div5-buttom-content">
    <input type="text" placeholder="Enter email address..."></input>
    <button className="subscribe">SUBSCRIBE</button>
  </div>
</div>
  </div>
</div>

</div> {/* main div end */}
<Footer isBlogPage={false}/>
</>
    )
}
const data=[
    {
    img:`/Sunset/MENU_IMAGES/Chai-Infusion.jpg`,
    heading:`Chai Infusion Dessert: Cardamom Chai Panna Cotta`,
    content:`Experience The Sweet Fingle Of YOUr MEal With Our Chai Infusion Dessert, Cardamom Chai Panno Cotta . This Delectable Creation Melds The Velvety Smoothness of italian Panna Cota With the Aromatic Allure Of Indian Cha`,
    sub_heading:`FIND OUT MORE -->`
     },
     {
        img:`/Sunset/MENU_IMAGES/Tandoori-plater.jpg`,
        heading:`Sizzling Tandoori Platter: A Feast for the Senses`,
        content:`Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. , paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney`,
        sub_heading:`Find out more -->`
     },
     {
        img:`/Sunset/MENU_IMAGES/news.jpg`,
        heading:`Mango Curry Chicken`,
        content:`Indulge in the rich flavors of our Seasonal Spice Delight India with our tandoori Platter, Onion and lemon - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.`,
        sub_heading:`Find out more -->`
     },
     {
        img:`/Sunset/MENU_IMAGES/sides.jpg`,
        heading:`Delicious Sides`,
        content:`Crispy golden fries served with your choice of ketchup, mayonnaise, or our special house dipping sauce. Chilli Souce make it delicous in taste Savor the sweetness of thinly sliced sweet potatoes, lightly seasoned and fried until crispy. Served with a side of chipotle `,
        sub_heading:`Find out more -->`
     },
     {
        img:`/Sunset/MENU_IMAGES/sandwich.jpg`,
        heading:`Bread-Sandwich`,
        content:`Crispy bacon, fresh lettuce, and juicy tomato slices, layered between toasted slices of your choice of bread. Served with a side of mayo.Oven-roasted turkey breast, crisp bacon, lettuce, tomato, and mayo stacked on three slices of toasted whole wheat bread.`,
        sub_heading:`Find out more -->`
     },
]
// Crousel second for third div

// const data2=[
//   {
//     content1:`FLAT`,
//     content2:`&#x20b9;75 </br> OFF`,
//     content3:`ON ORDER ABOVE &#x20b9;399`,
//     content4:`Use Code`,
//     content5:`FGU87`,
//     img:`/Sunset/div3/burger.png`
//   },
//   {
//     content1:`FLAT`,
//     content2:`&#x20b9;75 </br> OFF`,
//     content3:`ON ORDER ABOVE &#x20b9;399`,
//     content4:`Use Code`,
//     content5:`RTH27`,
//     img:`/Sunset/div3/pizzza.png`
//   },
//   {
//     content1:`FLAT`,
//     content2:`&#x20b9;175 </br> OFF`,
//     content3:`ON ORDER ABOVE &#x20b9;199`,
//     content4:`Use Code`,
//     content5:`PRA12`,
//     img:`/Sunset/div3/egg-omlet.jpg`
//   },
//   {
//     content1:`FLAT`,
//     content2:`&#x20b9;75 </br> OFF`,
//     content3:`ON ORDER ABOVE &#x20b9;333`,
//     content4:`Use Code`,
//     content5:`VISH3`,
//     img:`/Sunset/div3/momose.jpg`
//   },
//   {
//     content1:`FLAT`,
//     content2:`&#x20b9;75 </br> OFF`,
//     content3:`ON ORDER ABOVE &#x20b9;149`,
//     content4:`Use Code`,
//     content5:`SIN42`,
//     img:`/Sunset/div3/noddle.jpg`
//   },

// ]




const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
// Responsive

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
        slidesToShow: 1.6,
        slidesToScroll: 1
      }
    }
  ]

  };




export default Common;