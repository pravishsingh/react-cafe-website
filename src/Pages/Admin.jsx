import React from 'react'
import Navbar from '../Components/Navbar'
import "../CSS/Admin.css";
import { NavLink } from 'react-router-dom';
import AdminInfo from './AdminInfo';
import Footer from "../Footer/Footer";


function Admin() {
  return (
    <>
    <div className="div33-main-menu">
        <div className="div33-shadow">
        <Navbar currentPage="signin"/>
        <div className="div-acc-main">
    <div className="div-acc-left">
    <div className="acc-one">
        <div className="acc-one-content">
            <NavLink to="/admin">
           <h3>My Account</h3>
           </NavLink>
        </div>
    </div>
    {/* <!-- acc one end --> */}
    <div className="acc-two">
        <div className="acc-two-content">
            <NavLink to="/adminInfo">
            <h3>Account Information</h3>
            </NavLink>
        </div>
    </div>
    {/* <!-- acc second end --> */}
    <div className="acc-three">
        <div className="acc-three-content">
            <NavLink to="/order">
          <h3>Your Order</h3>
         </NavLink>
        </div>
    </div>
    {/* <!-- acc third  end -->
    <!-- --> */}
    </div>
    {/* <!-- left end ----------------------------------------------- --> */}
    <div className="div-acc-right">

        <div className="acc-right-one">
        <h1>MY ACCOUNT</h1>
        </div>

        <div className="acc-right-two">
            <h2>ACCOUNT INFORMATION</h2>
            <div className="acc-right-two-horz"></div>
        </div>

        <div className="acc-right-three">
            <h3>CONTACT INFORMATION</h3>
            <br/>
                <p>Pravish Singh <br/> p_singh123456@gmail.com</p>
        </div>

        <div className="acc-right-four">
            <div className="acc-right-four-content">
            <div> <h3>ADDRESS BOOK</h3> </div>
            <div> <p>Manage addresses</p></div>
            </div>
            <div className="acc-right-four-horz"></div>
        </div>

        <div className="acc-right-five">
            <h4>DEFAULT BILLING ADDRESS</h4>
            <p>You have not set a default billing address.</p>
        </div>

        <div className="acc-right-six">
            <p>Edit Address</p>
        </div>

        <div className="acc-right-seven">
            <h4>DEFAULT SHIPPING ADDRESS</h4>
            <br/>
                <p>You have not set a default shipping address.</p>
        </div>

        <div className="acc-right-eight">
            <p>Edit Address</p>
        </div>

    </div>

<div className="acc-bottom-horz"></div>
<div className="acc-bottom-content">
    <h3>Let us reach you</h3>
    <div className="acc-mail">
        <div className="mail-one">
            <input type="email" placeholder="your E-Mail ID"/>
        </div>
        <button>SUBMIT</button>
    </div>

</div>

</div>


             
               {/* <!--main--> */}

  {/* <!--Responsive page start  -->
<!-- responsive page start  --> */}
<div className="resp-acc-main">
    <div className="resp-acc-submain">
     <div className="resp-acc-one">
        <div className="resp-acc-circle"></div>
        <div className="resp-acc-one-xyz">
            <h4>xyz</h4>
            <p>Account</p>
        </div>
    </div>
    {/* <!-- one row end ==================================================================--> */}
    <div className="resp-acc-two">
        <div className="resp-acc-left">
            <div className="resp-acc-left-circle">
                <span id="resp-acc-heart" className="material-symbols-outlined">
favorite
</span>
            </div>
            <h3>Favourite</h3>
        </div>
        <div className="resp-acc-right">
            <div className="resp-acc-right-circle">
                <span id="resp-acc-heart" className="material-symbols-outlined">
currency_rupee
</span>
            </div>
            <h3>Money</h3>
        </div>

    </div>

    {/* <!-- second row end  ================================================================--> */}

<div className="resp-acc-three">
    <div className="resp-acc-left-three"></div>
    <div className="resp-acc-right-three">
        <h3>Your profile</h3>
    </div>

    
</div>


    {/* <!-- third row end============================================================================== --> */}
    <div className="resp-acc-three">
        <div className="resp-acc-left-three"></div>
        <div className="resp-acc-right-three">
            <h3>Your rating</h3>
        </div>
    
        
    </div>
    
    {/* <!-- fourth row end =========================================================--> */}

    <div className="resp-acc-fifth">
        <h3>Food Order</h3>
        <div className="acc-fifth-one">
            <div className="acc-fifth-circle"></div>
            <div className="acc-fifth-content">
                <h4>Your order</h4>
                <div className="fifth-horizontal"></div>
            </div>
        </div>
        {/* <!-- fifth one end --> */}
        <div className="acc-fifth-one">
            <div className="acc-fifth-circle"></div>
            <div className="acc-fifth-content">
                <h4>Favorite orders</h4>
                <div className="fifth-horizontal"></div>
            </div>
        </div>
        {/* <!-- fifth two end --> */}
        <div className="acc-fifth-one">
            <div className="acc-fifth-circle"></div>
            <div className="acc-fifth-content">
                <h4>Address book</h4>
                <div className="fifth-horizontal"></div>
            </div>
        </div>
        {/* <!-- fifth three end --> */}
        <div className="acc-fifth-one">
            <div className="acc-fifth-circle"></div>
            <div className="acc-fifth-content">
                <h4>Online ordering help</h4>
            </div>
        </div>
        {/* <!-- fifth four end --> */}

 
    </div>
    {/* <!-- fifth row end -->

    <!-- sixth row start --> */}
    <div className="resp-acc-sixth">
        <h3>Money</h3>
        <div className="acc-fifth-one">
            <div className="acc-fifth-circle"></div>
            <div className="acc-fifth-content">
                <h4>Sunset Wallet</h4>
                <div className="fifth-horizontal"></div>
            </div>
        </div>
        {/* <!-- sixth one end --> */}
        <div className="acc-fifth-one">
            <div className="acc-fifth-circle"></div>
            <div className="acc-fifth-content">
                <h4>Buy Gift Card</h4>
                <div className="fifth-horizontal"></div>
            </div>
        </div>
        {/* <!-- sixth two end --> */}
        <div className="acc-fifth-one">
            <div className="acc-fifth-circle"></div>
            <div className="acc-fifth-content">
                <h4>Claim Gift Card</h4>
                <div className="fifth-horizontal"></div>
            </div>
        </div>
        {/* <!-- sixth three end --> */}
        <div className="acc-fifth-one">
            <div className="acc-fifth-circle"></div>
            <div className="acc-fifth-content">
                <h4> Sunset Credits</h4>
                <div className="fifth-horizontal"></div>
            </div>
        </div>
        {/* <!-- sixth four end --> */}
        <div className="acc-fifth-one">
            <div className="acc-fifth-circle"></div>
            <div className="acc-fifth-content">
                <h4>Manage Payment </h4>
            </div>
        </div>
        {/* <!-- sixth sixth end --> */}
</div>
 {/* <!-- sixh row end --> */}
 <div className="resp-acc-seventh">
    <h3>Coupons</h3>
    <h4>Manage payment methods</h4>
 </div>
 {/* <!-- seventh end --> */}
</div>
</div>



</div>
           
            </div>
            <Footer/>
             {/* <!-- shadow end --> */}
{/* </div> */}
 {/* <!--main end--> */}
    {/* </div> */}
    </>
  )
}

export default Admin