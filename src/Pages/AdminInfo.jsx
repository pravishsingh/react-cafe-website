import React from 'react'
import Navbar from '../Components/Navbar'
import "../CSS/AdminInfo.css";
import { NavLink } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Order from "../Pages/Order";


function AdminInfo() {
  return (
    <>
    <div className="div34-main-menu">
        <div className="div34-shadow">
            <Navbar currentPage="signin"/>
            <div class="div-acc-inf-main">
                <div class="div-acc-inf-left">
                <div class="acc-inf-one">
                    <div class="acc-inf-one-content">
                        <NavLink to="/admin">
                        <h3>My Account</h3>
                        </NavLink>
                    </div>
                </div>
                {/* <!-- acc one end --> */}
                <div class="acc-inf-two">
                    <div class="acc-inf-two-content">
                        <NavLink to="/adminInfo">
                        <h3>Account Information</h3>
                        </NavLink>
                    </div>
                </div>
                {/* <!-- acc second end --> */}
                <div class="acc-inf-three">
                    <div class="acc-inf-three-content">
                        <NavLink to="/order">
                          <h3>Your Order</h3> 
                     </NavLink>
                    </div>
                </div>
                {/* <!-- acc third  end --> */}
                </div>
                {/* <!--acc info left end--> */}

          {/* <!--Right div start_--------------------------------------  --> */}
<div class="div-acc-inf-right">
   <div class="acc-inf-right-head">
    <h2>EDIT ACCOUNT INFORMATION</h2>
   </div>

   <div class="acc-inf-right-head2">
    <h3>ACCOUNT INFORMATION</h3>
      <div class="acc-inf-right-head2-horz"></div>
   </div>
   {/* <!-- row 1  --> */}
   <div class="acc-inf-form1">

    <label id="a" name="name">First Name *</label>
    {/* <!-- <br> --> */}
    <input type="text" id="a" name="name" placeholder="ABC"/>
<br/>
    <label id="a" name="name">Last Name *</label>
    {/* <!-- <br> --> */}
    <input id="a" name="name" placeholder="XYZ"/>
<br/>
    <label id="a" name="name">Phone Number *</label>
    {/* <!-- <br> --> */}
    <input id="a" name="name" />

   </div>
   {/* <!--form1 end--> */}
   {/* <!-- row2 --> */}
   <div class="acc-inf-row2">
    <h3>ADDRESS</h3>
<div class="acc-inf-right-horz2"></div>
</div>


   {/* <!-- form2 start  --> */}
   <div class="acc-inf-form2">
<div class="inf-frm2">
    <label id="a" name="name">Street Address *</label>
    {/* <!-- <br> --> */}
    <input type="text" id="a" name="name" placeholder="ABC"/>
</div>
<div class="inf-frm2">
    <label id="a" name="name">City *</label>
    {/* <!-- <br> --> */}
    <input id="a" name="name" placeholder="XYZ"/>
</div>
<div class="inf-frm2">
    <label id="a" name="name">State *</label>
    {/* <!-- <br> --> */}
    <input id="a" name="name" />
</div>
<div class="inf-frm2">
    <label id="a" name="name">Zip Code *</label>
    {/* <!-- <br> --> */}
    <input id="a" name="name" />
</div>
   </div>
   {/* <!--form1 end--> */}
   {/* <!-- form2 end  --> */}

 </div>

    </div>
    {/* <!--acc-inf-main--> */}
</div>
{/* <!--shadow--> */}
</div>
<Footer/>

{/* <!--div34 main div--> */}

    </>
  )
}

export default AdminInfo