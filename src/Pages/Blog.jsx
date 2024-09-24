import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from '../Footer/Footer'
import "../CSS/Blog.css";
import Blog1Carousel from '../CrouselComponent/Blog1Carousel';
import BlogCarousel2 from '../CrouselComponent/BlogCarousel2';

function Blog() {
  return (
    <>
    <div className="blog-main-menu">
        <Navbar isSignupPage={true}/>

        <div className="blog-row1">
        <div className="blog-row1-shadow">
        <div className="blog-left">
            <h1>SUNSET</h1>
        </div>
        <div className="blog-right">
            <h2>OUR VISION </h2>
            <p>To create a haven where every cup is a canvas, painting moments of serenity and connection against the backdrop of </p>
            <p>@2023 Railworld All Reserved</p>
        </div>
    </div>
    </div>
<div className="blog-horz1"></div>

<div className="blog-crousel1">
    <h1>LATEST BLOG POST</h1>
    <div className="blog-crousel-content">
        <Blog1Carousel/>



</div>
{/* <!-- bottom crousel part end -->
    <!-- crousel end  --> */}


    </div>


<div className="blog-crousel2">
    <h1>FEATURED REVIEW VIDEOS</h1>
    <div className="blog-crousel2-content">
            {/* <!--Blog butoom crousel start  --> */}
    
{/* <!-- bottom crousel part start--------------------- --> */}
<div className="bottom-blog-crousel">
    <div className="bottom-blog-container">
        <BlogCarousel2/>

</div>
{/* <!-- end crousel --> */}

    </div>
</div>
</div>
<div className="last-hz"></div>
<div className="blog-bottom-content">
    <h1>Share Your Experience !</h1>
    <p>Have you recently visited cafe Sunset? We'd love to hear about your experience! </p>
    <p>Send your reviews and feedback and who knows- your review might be featured here next</p>
    <input type="text" placeholder="Leave You Review Here...." />
    <button>Submit</button>
</div>

</div>
 {/* <!--Blog main menu end --> */}


   
    <Footer isBlogPage={true}/>
    </>
   
  )
}

export default Blog
