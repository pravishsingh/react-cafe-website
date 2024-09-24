import React from 'react'
import "../CSS/Order.css";
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function Order() {
  return (
    <>
    <div className="div36-main-menu">
    <div class="div36-shadow">
        <Navbar currentPage="signin"></Navbar>
    <div class="div-ord-main">
    <div class="div-ord-left">
    <div class="ord-one">
        <div class="ord-one-content">
        <NavLink to="/admin">
          <h3>My Account</h3>
      </NavLink>     
         </div>
    </div>
    {/* <!-- acc one end --> */}
    <div class="ord-two">
        <div class="ord-two-content">
        <NavLink to="/adminInfo">
        <h3>Account Information</h3>
         </NavLink>     
          </div>
    </div>
    {/* <!-- acc second end --> */}
    <div class="ord-three">
        <div class="ord-three-content">
        <NavLink to="/order">
        <h3>Your Order</h3> 
     </NavLink>      
       </div>
    </div>

    <div class="ord-three">
        <div class="ord-three-content">
         <a href="#"> <h3>Address Book</h3></a>  
        </div>
    </div>
    {/* <!-- acc third  end -->
    <!-- --> */}
    </div>
    {/* <!-- left end ----------------------------------------------- --> */}

    {/* <!-- right start --> */}
    <div class="div-ord-right">
        <div class="ord-right-head">
            <h2>Your order</h2>
            <div class="ord-right-horz"></div>
        </div>
{/* <!-- --------------------------------------- --> */}
        <div class="ord-cloud">
            <div class="cloud">
                <span id="cld" class="material-symbols-outlined">
                    cloud
                    </span>
            </div>
            <div class="cloud-content">
                <h4>Seems like you have yet to place an order</h4>
            </div>
        </div>
{/* <!-- --------------------------------------------- --> */}
<div class="ord-row-two">

<div class="ord-head2">
    <h2>Order History</h2>
    <div class="ord-right-horz"></div>
</div>

<div class="ord-crousel">
    <div class="ord-1">
        <div class="ord1-img">
            <img src="/Sunset/MENU_IMAGES/burger.jpg"/>
        </div>
        <div class="ord1-content">
            <h3>Bombay Masala Sandwich</h3>
            <p>Data:02-01-24  12:14pm <br/> Payment:UPI</p>
        </div>
    </div>
    <div class="ord-1">
        <div class="ord-1">
            <div class="ord1-img">
                <img src="/Sunset/MENU_IMAGES/noodle soup.jpg"/>
            </div>
            <div class="ord1-content">
                <h3>Burger</h3>
                <p>Data:01-01-24  1:40pm <br/> Payment:UPI</p>
            </div>
        </div>

    </div>
    <div class="ord-1">
        <div class="ord-1">
            <div class="ord1-img">
                <img src="/Sunset/MENU_IMAGES/de1.png"/>
            </div>
            <div class="ord1-content">
                <h3>Sandwich</h3>
                <p>Data:02-03-24  12:14am <br/> Payment:UPI</p>
            </div>
        </div>
    </div>
    <div class="ord-1">
        <div class="ord-1">
            <div class="ord1-img">
                <img src="/Sunset/MENU_IMAGES/dr12.jpeg"/>
            </div>
            <div class="ord1-content">
                <h3>Soup</h3>
                <p>Data:02-03-24  12:14am <br/> Payment:UPI</p>
            </div>
        </div>
    </div>
    <div class="ord-1">
        <div class="ord-1">
            <div class="ord1-img">
                <img src="/Sunset/MENU_IMAGES/dr3.jpeg"/>
            </div>
            <div class="ord1-content">
                <h3>Sandwich</h3>
                <p>Data:02-03-24  12:14am <br/> Payment:UPI</p>
            </div>
        </div>
    </div>
</div>




</div>


    </div>
    {/* <!--right end--> */}

</div>
 {/* <!--div main end--> */}
</div>
 {/* <!--shadow--> */}
{/* </div> */}
 {/* <!--div36 main end--> */}
    </div>

    {/* <h1>This is order page </h1> */}
    <Footer/>
    </>
  )
}

export default Order