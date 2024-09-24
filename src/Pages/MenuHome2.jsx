import React from 'react'
import "../CSS/MenuHome2.css";
import Navbar from '../Components/Navbar';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

function MenuHome2() {
  return (
   <>
   <div className="div20">
    <Navbar isSignupPage={true}/>
    <div className="main-menu2">
     {/* main menu start */}
    <div className="div19">
        <img src="/Sunset/MENU_IMAGES/div19-image.png"/>
    </div>
    {/* div 19 end*/}

    

    {/*  div20 start  */}
   
        <div className="div20-head">
        <div className="div20-one"></div>
        <div className="div20-two">
            <h2>WHAT'S ON YOUR MIND?</h2>
        </div>
        <div className="div20-three"></div>
        </div>

   <div className="div21">
        <div className="div21-one">
        <div className="a">
            <img src="/Sunset/MENU_IMAGES/burger.jpg"/>
            <h4>BURGER & SANDWICHES</h4>
        </div>
 
        <div className="a">
            <img src="/Sunset/MENU_IMAGES/chinese.jpg"/>
            <h4>CHINES CUSINE</h4>
        </div>
        <div className="a">
            <img src="/Sunset/MENU_IMAGES/food (1).png"/>
            <h4>STARTERS</h4>
        </div>
  </div>

  <div className="div21-two">
        <div className="a">
            <img src="/Sunset/MENU_IMAGES/food (2).png"/>
            <h4>SIDES</h4>
        </div>
        <div className="a">
            <img src="/Sunset/MENU_IMAGES/food (3).png"/>
            <h4>SALADS</h4>

        </div>
        <div className="a">
            <img src="/Sunset/MENU_IMAGES/food (4).png"/>
            <h4>DESSERST/<br/>ICE-CREAM</h4>
        </div>
    </div>
    </div>{/* div21 close it help in responsive */}

    <div className="div21-three">
        <div className="a">
            <img src="/Sunset/MENU_IMAGES/food (5).png"/>
            <h4>MAIN COURSE</h4>
        </div>
        <div className="a">
            <img src="/Sunset/MENU_IMAGES/food (6).png"/>
            <h4>VALUE COMBO</h4>
        </div>
        
        <div id="res-a" className="a">
            <img src="/Sunset/MENU_IMAGES/chicken with brocoli.jpg"/>
            <h4>BEVERAGES</h4>
        </div>
    </div>

    <div id="res-di21-four" className="div21-three">
        <div className="a">
            <img src="/Sunset/div3/nuts.jpg"/>
            <h4>SALADS</h4>
        </div>
        <div className="a">
            <img src="/Sunset/MENU_IMAGES/sides.jpg"/>
            <h4>BLUEBERRY</h4>
        </div>
        
        <div id="res-a" className="a">
            <img src="/Sunset/MENU_IMAGES/dr13.jpeg"/>
            <h4>BEVERAGES</h4>
        </div>
    </div>

    <div className="seemore">
       <div className="down-arrow">
        <span id="see" className="material-symbols-outlined">
            expand_more
            </span>
       </div>
       <NavLink to="/menu1" ><h3>See More</h3></NavLink>
    </div>

  

   
    </div>
    </div>
   <Footer/> 
   </>
  )
}

export default MenuHome2;