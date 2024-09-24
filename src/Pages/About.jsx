import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Footer/Footer'
import "../CSS/About.css";
import AboutCarousel from '../CrouselComponent/AboutCarousel';

function About() {
  return (
    <>
    <div className="div38-main-menu">
        <Navbar currentPage="signin"/>
    <div class="div-about-main">
    <div class="about-row1">
        <div class="about-left">
            <h1>The story behind sunset ...</h1>
            <p>Welcome to Sunset Café, where our journey began with Chef André's bold decision to depart from the world of haute cuisine and create a culinary sanctuary rooted in simplicity and heartfelt connection. 
<br/><br/><span class="hide">hance encounter with a charming café bathed in the warm glow of twilight, Chef André envisioned a place where genuine hospitality and exceptional flavors intertwine. At Sunset Café, each dish is a reflection of Chef André's dedication to crafting culinary experiences that nourish both body and soul.</span></p>

        </div>
        <div class="about-right">
            <div class="about-right-img">
                <img src="/Sunset/Chef.jpg"/>
            </div>
        </div>
    </div>

<div class="about-row2">
    <div class="about-left2">
        <img src="/Sunset/about-crop.png"/>
    </div>
    <div class="about-right2">
        <p>At Sunset Café, our mission is deeply personal. Inspired by Chef André's journey and fueled by his passion for heartfelt connection,<span class="hide"> we've crafted a culinary sanctuary where every bite tells a story and every moment is cherished. With a commitment to authenticity, warmth, and sustainability, we invite you to join us in creating memories over delicious dishes that nourish both body and soul. Here, amidst the comforting glow of twilight, we celebrate community and the simple joys of shared meals. Welcome to our table; we can't wait to share our story with you.</span></p>
    </div>
</div>
{/* 
<!-- row 2 end -->
<!-- row 3 start --> */}
<div class="about-row3">
    <div class="about-left3">
        <h1>Sharing Meals, Sharing Hope</h1>
        <p>At Sunset Café, we believe in giving back to our community. That's why we're proud to share that 1% of our profits go towards providing food<span class="hide"> for orphanages. Because at Sunset, you never eat alone; every meal you enjoy is shared with hundreds of orphaned children, spreading warmth and nourishment to those who need it most. Join us in making a difference, one meal at a time.heading for this</span></p>
    </div>
    <div class="about-right3">
        <div class="about-right3-img">
            <img src="/Sunset/MENU_IMAGES/dr10.jpeg"/>
        </div>
    </div>
</div>

<div class="about-row4">
    <h1>Meet Our Sunset Family</h1>
    <AboutCarousel/>

    </div>
</div>
</div>
<Footer/>
    {/* <h2>this is about page</h2> */}
    </>
  )
}

export default About