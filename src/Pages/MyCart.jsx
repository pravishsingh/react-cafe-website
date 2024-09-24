import React from "react";
import Navbar from "../Components/Navbar";
import "../CSS/MyCart.css";
import CartCarousel from "../CrouselComponent/CartCarousel";
import CartCarousel1 from "../CrouselComponent/CartCarousel1";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";


export default function cart(){
    return(
        <>
        <div className="div32-main-menu">
        <Navbar currentPage="signin"/>
{/* ===================================================================== */}
 
<div class="div-cart">
            <div class="div-cart-left">
                <div class="div-cart-left-head">
                    <div class="head1">
                        <h3>3 Items selected</h3>
                    </div>
                    <div class="head2">
                        <h3>Explore Menu</h3>
                    </div>
                </div>
        <div class="left-body">     
            <div class="left-body1">
                <div class="left-body1-a">
                    <img src="/Sunset/MENU_IMAGES/burger.jpg"/>
                </div>
                <div class="left-body1-b">
                    <h3>Bombay Masala Grilled Cheese</h3>
                    <p>A delightful plant-based option with a savory patty crafted from vegetables and onions, promising a deliciously satisfying bite.</p>
                </div>
                <div class="left-body1-c">
                    <h3>Rs. 40</h3>
                    <div class="del-main">
                        <div class="delete-log">
                            <span id="dl" class="material-symbols-outlined">
                        delete
                      </span>
                        </div>
                        <div class="numb">1</div>
                        <div class="pls">
                            <span id="pl" class="material-symbols-outlined">
                        add_circle
                       </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- first row end -->
            <!-- second row start --> */}
            <div id="left-body2-shadow" class="left-body1">
                <div class="left-body1-a">
                    <img src="/Sunset/MENU_IMAGES/chicken sandwich.png"/>
                </div>
                <div class="left-body1-b">
                    <h3>Chicken Seekh Kebab </h3>
                    <p>A classic favorite featuring tender slices of turkey nestled between soft bread, offering a comforting and fulfilling meal option.</p>
                </div>
                <div  class="left-body1-c">
                    <h3>Rs. 60</h3>
                    <div class="del-main">
                        <div class="delete-log">
                            <span id="dl" class="material-symbols-outlined">
                        delete
                      </span>
                        </div>
                        <div class="numb">1</div>
                        <div class="pls">
                            <span id="pl" class="material-symbols-outlined">
                        add_circle
                       </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- second row end  --> */}
            <div class="left-body1">
                <div class="left-body1-a">
                    <img src="/Sunset/MENU_IMAGES/Vadapav.jpg"/>
                </div>
                <div class="left-body1-b">
                    <h3>MUMBAI VADAPAV</h3>
                    <p>A timeless choice showcasing succulent ham slices tucked between fresh bread, delivering a satisfying and hearty meal .</p>
                </div>
                <div class="left-body1-c">
                    <h3>Rs. 80</h3>
                    <div class="del-main">
                        <div class="delete-log">
                            <span id="dl" class="material-symbols-outlined">
                        delete
                      </span>
                        </div>
                        <div class="numb">1</div>
                        <div class="pls">
                            <span id="pl" class="material-symbols-outlined">
                        add_circle
                       </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- third row end of left side --> */}

            </div>.
            {/* <!--left body1  end--> */}
{/* <!-- crousel part start --> */}
<div class="crousel-head">
    <h3>Complete your meal with</h3>
</div>
<div class="cart-crousel">
    <CartCarousel/>
</div>
  
    {/* <!-- end crousel --> */}
</div>







    
         {/* <!--left main div  div-cart end--> */}
         {/* <!--right div start  --> */}
 <div class="div-cart-right">
      <div class="right-head">
         <h3>Choose a delivery address</h3>
      </div>
      <div class="right-body1">
    <div class="right-body1-a">
        <div class="right-body1-a-content">
            <h5>Current Address</h5>
            <p>Samta Colony,Raipur</p>
        </div>
        <button>Change</button>
    </div>
    <div class="right-body-a-horizontal"></div>

        <div class="right-body1-b">
            <div class="right-body1-b-content">
                <h5>Login to use your saved addresses</h5>
            </div>
            <button>My Address</button>
        </div>
      </div>
    {/* <!-- first block end --> */}

      <div class="right-head2">
        <h3>Offers</h3>
      </div>
      <div class="right-body2">
        <div class="right-body2-content">
            <h5>Select offer / Apply coupon</h5>
            <p>Get discount with your order</p>

        </div>
        <button></button>
      </div>
    {/* <!-- second block end --> */}
  
    <div class="right-head3">
        <h3>Price Details</h3>
    </div>
    <div class="right-body3">
        <div class="right-body3-a">
            <div class="right-body3-a-content">
                <div class="a-one">
                    <div class="j">
                <div>
                    <h5>Sub Total </h5>
                    </div>
                    <div class="h">
                    <h5>190 </h5>
                    </div>
                </div>
                
                    {/* <!-- first line end --> */}
               
                    <div class="j">
                <div>       
                    <h5>Discount</h5>
                    </div>
                    <div class="h">
                    <h5>-</h5>
                    </div>
                </div> 
                    {/* <!-- second line end --> */}
               
                    <div class="j">
                <div>      
                    <h5>Taxes and Charges</h5>
                    </div>
                    <div class="h">
                    <h5>32.2 </h5>
                    </div>
                </div>  
                    {/* <!-- third line end --> */}
                </div>

      </div>   {/*div-cart end  */}
          
        <div class="body3-horizontal-line"></div>
        <div class="right-body3-b">
            <div class="k">
                <h5>Grand Total</h5>
                <h5>222.2</h5>
            </div>
            <button>Place Order</button>
        </div>
    </div>



 </div>
  {/* <!--right-body 3 a end--> */}
 </div>
 {/* <!--right body 3 end--> */}
</div>
{/* <!--div right end--> */}

{/* <!--div cart end--> */}

{/* <!-- bottom crousel part start--------------------- --> */}
<div class="bottom-crousel">
    <div class="bottom-cart-container">
    <CartCarousel1/>
        </div>



</div>
{/* <!-- end crousel --> */}

{/* <!-- bottom crousel part end --> */}

{/* ======================================================================== */}
</div>

<Footer/>
        {/* <h1>this is cart page</h1> */}
        </>
    )
}