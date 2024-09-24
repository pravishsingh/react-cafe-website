import React from 'react';
import "../Footer/Footer.css";
import { NavLink} from "react-router-dom";
// import Faq from "../Pages/Faq";


export default function Footer({isBlogPage}){

    return(
        <>
        <div className="footer-main">
            <div className="footer-content">
                <div className="footer-col1">
                    <h1 className="text-3xl font-bold tracking-wider"> Address</h1>
                    <p>Cafe</p>
                    <p>Plot No. 45, Street No.14</p>
                    <p>Maroll MIDC Industry</p>
                    <p>Estate,</p>
                    <p>Andheri</p>
                    <p>East,Mumbai 400903</p>
                </div>

                <div className="footer-col2">
                    <h1 className="text-3xl font-bold tracking-wider">Help & Info</h1>
                    <NavLink to="/about">
                    <p>About Cafe</p>
                    </NavLink>
                    
                    <p>Careers</p>
                    <NavLink to="/faq">
                     <p>FAQs</p>
                    </NavLink>
                </div>

                <div className="footer-col3">
                    <h1 className="text-3xl font-bold tracking-wider">Contact-Us</h1>
                    <p>1809-908-504</p>
                    <p>Get in Touch</p>
                    <p>Chat With Us</p>
                </div>

                <div className="footer-col4">
                    <h1 className="text-3xl font-bold tracking-wider">Useful Links</h1>
                    <p>Privacy Policy</p>
                    <p>Terms of Services</p>
                    <p>Payment issues</p>
                    <p>Net Banking</p>
                    <p>Custom Order</p>
                </div>
               
{isBlogPage &&(
      <div className="footer-icon1">
      <div className="icon-content1">
          <h1>Follow Us on :</h1>
      </div>
      <div className="icon-img">
          <img src="./Sunset/div3/social-facbook.png"></img>
          <img src="./Sunset/div3/soci.png"></img>
          <img src="./Sunset/div3/social-twiter.png"></img>
          <img src="./Sunset/div3/social-whatsp.png"></img>
      </div>
      
  </div>


) }
 </div>

{!isBlogPage &&(
        <div className="footer-icon">
        <div className="icon-content">
            <h1>Follow Us on :</h1>
        </div>
        <div className="icon-img">
            <img src="./Sunset/div3/social-facbook.png"></img>
            <img src="./Sunset/div3/soci.png"></img>
            <img src="./Sunset/div3/social-twiter.png"></img>
            <img src="./Sunset/div3/social-whatsp.png"></img>
        </div>
        
    </div>

)} 
 


   

              
        {/* -------------- */}





           
        </div>
                 <div className="copy-right">
            <h1>@2023 Railworld India. All Rights Reserved</h1>
        </div>

        </>
    )
}