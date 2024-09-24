import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import CrauselNav from '../Components/CrauselNav'
import "../CSS/AllMenu.css";
import "../CSS/AllMenuResp.css";
import Footer from '../Footer/Footer';

function Menu4() {
  return (
    <>
    <div className="div26-main-menu">
      <Navbar isSignupPage={true}/>
      <div className="div22">
        <img src="/Sunset/MENU_IMAGES/4.jpg"/>
    </div>
    <CrauselNav/>
{/* ----------------------------------------------------------------------------------------------- */}


<div className="menu4-heading">
        <h2>CAFE SUNSET SIDES SELECTION</h2>
      </div>

      <div id="div26-one" className="div25">
        <div  className="div25-one">

     
{/* <!-- line one start------------------------------------- --> */}

        <div className="line2">
            <div className="tandori">
                <h3>GARLIC PARMESAN FRIES &nbsp;</h3>
                <h4>159/-</h4>
             </div>

            <div className="veg2">
                <div className="green2"></div>
               </div>

            <div className="plus-minus2">
                <p>- 1 +</p>
            </div>

            <button>ADD +</button>
           
{/* <!--Line two start------------------------------------------------------------  --> */}
    

        </div>
        <div className="line2">
            <div className="tandori">
                <h3>GRILLED SEASONAL VEG &nbsp;&nbsp;&nbsp;</h3>
                <h4>149/-</h4>
             </div>

            <div className="veg2">
                <div className="green2"></div>
               </div>

            <div className="plus-minus2">
                <p>- 1 +</p>
            </div>

            <button>ADD +</button>
           
{/* <!--Line three start------------------------------------------------------------  --> */}
            
        </div>
        <div className="line2">
            <div className="tandori">
                <h3>CUMIN-SPICED ROASTED &nbsp;&nbsp;&nbsp; </h3>
                <h4>139/-</h4>
             </div>

            <div className="veg2">
                <div className="green2"></div>
               </div>

            <div className="plus-minus2">
                <p>- 1 +</p>
            </div>

            <button>ADD +</button>
           
{/* <!--Line four start------------------------------------------------------------  --> */}
            
        </div>
        <div className="line2">
            <div className="tandori">
                <h3>SESAME GINGE GIAZED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br/> GIAZED GREEEN BEANS</h3>
                <h4>129/-</h4>
             </div>

            <div className="veg2">
                <div className="green2"></div>
               </div>

            <div className="plus-minus2">
                <p>- 1 +</p>
            </div>

            <button>ADD +</button>
           
            
{/* <!--Line five start------------------------------------------------------------  --> */}

        </div>
        <div className="line2">
            <div className="tandori">
                <h3>HONEY SIRACHA CHICKEN<br/> WINGS </h3>
                <h4>210/-</h4>
             </div>

            <div className="non-veg2">
                <div className="brown2"></div>
               </div>

            <div className="plus-minus2">
                <p>- 1 +</p>
            </div>

            <button>ADD +</button>
           
{/* <!--Line six start------------------------------------------------------------  --> */}
           
        </div>
        <div className="line2">
            <div className="tandori">
                <h3>CRISPY CALAMARI RINGS &nbsp;</h3>
                <h4>210/-</h4>
             </div>

            <div className="non-veg2">
                <div className="brown2"></div>
               </div>

            <div className="plus-minus2">
                <p>- 1 +</p>
            </div>

            <button>ADD +</button>
        

        </div>
        <div className="line2">
            <div className="tandori">
                <h3>PRAWN TEMPUARA&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                <h4>210/-</h4>
             </div>

            <div className="non-veg2">
                <div className="brown2"></div>
               </div>

            <div className="plus-minus2">
                <p>- 1 +</p>
            </div>

            <button>ADD +</button>
        

        </div>
        <div className="line2">
            <div className="tandori">
                <h3>FISH TIKKA TACES </h3>
                <h4>210/-</h4>
             </div>

            <div id="non-veg2" className="non-veg2">
                <div className="brown2"></div>
               </div>

            <div className="plus-minus2">
                <p>- 1 +</p>
            </div>

            <button>ADD +</button>
        

        </div>

</div>
 {/* <!--div23 one end --> */}
{/* <!-- first row div23-one end -->

<!--second column line row start--> */}

    <div className="div26-two"></div>
{/* <!-- line coumn  end --> */}

{/* <!-- third column start ------------------------------ --> */}

    <div className="div25-three">

{/* <!-- third line one start------------------------------------- --> */}

        <div className="line2">
            <div className="tandori">
                <h3>TRUFFLE PARMESAN <br/> FRIES</h3>
                <h4>149/-</h4>
             </div>

          
            <div className="plus-minus2">
                <p>- 1 +</p>
            </div>

            <button>ADD +</button>
           
{/* <!-- third  Line two start------------------------------------------------------------  --> */}
    

        </div>
        <div className="line2">
            <div className="tandori">
                <h3>LOADED POTATO SKINS </h3>
                <h4>139/-</h4>
             </div>

         
            <div id="potato-plus" className="plus-minus2">
                <p>- 1 +</p>
            </div>

            <button>ADD +</button>
           
{/* <!-- third Line three start------------------------------------------------------------  -->
            
   
<!-- third Line four start------------------------------------------------------------  -->
            

<!--third  Line six start------------------------------------------------------------  --> */}
           
  
</div>
 {/* <!--line2 end --> */}
    </div> 
    {/* <!--div25 three end--> */}
    </div>

{/* 
<!--  -->
<!-- Responsive menu  --> */}

<div className="res-div-mainMenu1">

    <div className="res-div24">
        <div className="res-24-btn1">
            <h3>SIDES</h3>
        </div>
       
    </div>
    {/* <!-- first row------------------------- --> */}
  

    <div className="resp-div25">
        <div className="resp-div25-left">
            <h4>Paneer Bhurji Burger</h4>
            <p>Rs.169</p>
        </div>
        <div id="resp-veg1" className="resp-veg">
            <div className="resp-green"></div>
        </div>
        <div className="resp-div25-right1">
                <span id="heart" className="material-symbols-outlined">
                    favorite
                    </span>    
        </div>
    </div>
    <div className="resp-plus">
        <span><p>- 1 +</p></span>
    </div>
    <div className="resp-div25-horz"></div>
{/* <!--end second row  -->

<!-- third row start --> */}
<div className="resp-div25">
    <div className="resp-div25-left">
        <h4>Aloo Tikki Burger</h4>
        <p>Rs.149</p>
    </div>
    <div id="resp-veg1" className="resp-veg">
        <div className="resp-green"></div>
    </div>
    <div className="resp-div25-right2">
            <span id="heart" className="material-symbols-outlined">
                favorite
                </span>    
    </div>
</div>
<div className="resp-plus">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div25-horz"></div>
{/* 
<!-- third row end -->

<!-- fourth row start --> */}
<div className="resp-div25">
    <div className="resp-div25-left">
        <h4>Egg Bhurji Burger</h4>
        <p>Rs.129</p>
    </div>
    <div id="resp-non-veg1" className="resp-non-veg">
        <div className="resp-brown"></div>
    </div>
    <div className="resp-div25-right3">
            <span id="heart" className="material-symbols-outlined">
                favorite
                </span>    
    </div>
</div>
<div  className="resp-plus">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div25-horz"></div>
{/* <!-- fourth row end -->

<!-- fifth row start --> */}
<div className="resp-div25">
    <div className="resp-div25-left">
        <h4>Keema Pav Burger</h4>
        <p>Rs.229</p>
    </div>
    <div id="resp-non-veg1" className="resp-non-veg">
        <div className="resp-brown"></div>
    </div>
    <div className="resp-div25-right4">
            <span id="heart" className="material-symbols-outlined">
                favorite
                </span>    
    </div>
</div>
<div  className="resp-plus">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div25-horz"></div>

{/* <!-- fifth row end -->

<!-- sixth row start --> */}
<div className="resp-div25">
    <div className="resp-div25-left">
        <h4>Palak Panner Burger</h4>
        <p>Rs.159</p>
    </div>
    <div id="resp-veg1" className="resp-veg">
        <div className="resp-green"></div>
    </div>
    <div className="resp-div25-right5">
            <span id="heart" className="material-symbols-outlined">
                favorite
                </span>    
    </div>
</div>
<div  className="resp-plus">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div25-horz"></div>

{/* <!-- sixth row end -->

<!-- seventh row start --> */}
<div id="res-div24" className="res-div24">
    <div id="mouthwater" className="res-24-btn1">
        <h3>INDULGENT ADD-ONS </h3>
    </div>
 
</div>
{/* <!-- seventh row end -->

<!-- eightth row start -->
<!-- eightth row start -->
<!-- eightth row start --> */}
    <div className="resp-div25">
        <div className="resp-div25-left">
            <h4>Bombay Masala Grilled</h4>
            <p>Rs.159</p>
        </div>
        <div id="resp-non-veg1" className="resp-non-veg">
            <div className="resp-brown"></div>
        </div>
        <div className="resp-div25-right7">
                <span id="heart" className="material-symbols-outlined">
                    favorite
                    </span>    
        </div>
    </div>
    <div className="resp-plus">
        <span><p>- 1 +</p></span>
    </div>
    <div className="resp-div25-horz"></div>
{/* <!--end eighth row  -->

    <!-- nienth row------------------------- --> */}
    <div className="resp-div25">
        <div className="resp-div25-left">
            <h4>Chicken Seekh Kebab</h4>
            <p>Rs.179</p>
        </div>
        <div id="resp-veg1" className="resp-veg">
            <div className="resp-green"></div>
        </div>
        <div className="resp-div25-right8">
                <span id="heart" className="material-symbols-outlined">
                    favorite
                    </span>    
        </div>
    </div>
    <div className="resp-plus">
        <span><p>- 1 +</p></span>
    </div>
    <div className="resp-div25-horz"></div>
{/* <!--end nineth row  -->

<!-- tenth row start --> */}
<div className="resp-div25">
    <div className="resp-div25-left">
        <h4>Mumbai Vada Pav</h4>
        <p>Rs.149</p>
    </div>
    <div id="resp-veg1" className="resp-veg">
        <div className="resp-green"></div>
    </div>
    <div className="resp-div25-right9">
            <span id="heart" className="material-symbols-outlined">
                favorite
                </span>    
    </div>
</div>
<div className="resp-plus">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div25-horz"></div>

{/* <!-- tenth row end -->

<!-- 11th row start --> */}
<div className="resp-div25">
    <div className="resp-div25-left">
        <h4>Butter Chicken Sandwich</h4>
        <p>Rs.139</p>
    </div>
    <div id="resp-non-veg1" className="resp-non-veg">
        <div className="resp-brown"></div>
    </div>
    <div className="resp-div25-right10">
            <span id="heart" className="material-symbols-outlined">
                favorite
                </span>    
    </div>
</div>
<div  className="resp-plus">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div25-horz"></div>
{/* <!-- 11th row end -->

<!-- 12th row start --> */}
<div className="resp-div25">
    <div className="resp-div25-left">
        <h4>Grilled Fish</h4>
        <p>Rs.229</p>
    </div>
    <div id="resp-non-veg1" className="resp-non-veg">
        <div className="resp-brown"></div>
    </div>
    <div className="resp-div25-right11">
            <span id="heart" className="material-symbols-outlined">
                favorite
                </span>    
    </div>
</div>
<div  className="resp-plus">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div25-horz"></div>
{/* 
<!-- 12th row end -->

<!-- 13th row start --> */}
<div className="resp-div25">
    <div className="resp-div25-left">
        <h4>Veg Seekh Kebab</h4>
        <p>Rs.159</p>
    </div>
    <div id="resp-veg1" className="resp-veg">
        <div className="resp-green"></div>
    </div>
    <div className="resp-div25-right">
            <span id="heart" className="material-symbols-outlined">
                favorite
                </span>    
    </div>
</div>
<div  className="resp-plus">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div25-horz"></div>

{/* <!-- 13th row end --> */}





    </div>
     {/* <!--res-mainMenu--> */}
    <div id="down-menu3" className="down-arrow2">
        <a href="#">
        <span className="material-symbols-outlined">
            arrow_downward
            </span>
        </a>
    </div>
    
</div>
 {/* <!--div 22 main div end--> */}
{/* ----------------------------------------------------------------------------------------------- */}

    
       
    {/* <p>this is menu4</p> */}
    <Footer/>
    </>
  )
}

export default Menu4