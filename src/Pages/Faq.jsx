import React from 'react'
// import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import "../CSS/Faq.css";
import Navbar from '../Components/Navbar';


function Faq() {
  return (
    <>
    <div class="div35-main-menu">
      <Navbar currentPage="signin"/>
      
<div class="div-faq-main">
    <div class="faq-head">
    <h1>FAQs</h1>
</div>
<div class="faq-button">
    <button class="faq-btn1">All</button>
    <button class="faq-btn2">Family</button>
    <button class="faq-btn3">Comady Podcast</button>
    <button class="faq-btn4">Offers</button>
    <br/>
    <button class="faq-btn5">Community</button>
    <button class="faq-btn6">Events</button>
    <button class="faq-btn7">Food & Drinks</button>
    <br/>
    <button class="faq-btn8">Beer</button>

    
</div>

<div class="faq-content">
    <h3>Hi there! Just wondering, do you happen to serve beer at your cafe? Thanks!</h3>
    <p>"Thank you for reaching out! At the moment, we're proud to be a family-friendly cafe, so we don't serve alcohol. However, we have a delightful selection of beverages and treats to enjoy. Let us know if there's anything else we can assist you with!"</p>
</div>
</div>


     </div> 
     {/* <!--main div32 main--> */}
    {/* <h1>This is Faq page</h1> */}
    <Footer/>

    </>
  )
}

export default Faq