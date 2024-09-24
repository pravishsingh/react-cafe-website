import "../CSS/Contact.css";
import Navbar from "../Components/Navbar";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";



export default function Contact(){
    return(
        <>
        <div className="div37-main-menu">
            
            <Navbar currentPage="signin"/>
        {/* <!-- nav end --> */}
    <div class="contact-main">

<div class="cont-head">
    <h1> “Your thoughts matter to us, so drop us a line and let's start a conversation today."</h1>
</div>

<div class="cont-log">
    <div class="cont-log1">
        <img src="/Sunset/Address.jpg"/>
        <div class="log1-content">
            <h2>Address</h2>
            <p>MFC Center, Railway Station, Amazing Hotel, near Raipur, Raipur, Chhattisgarh 492001</p>
        </div>
    </div>
    <div class="cont-log1">
        <img src="/Sunset/Email.jpg"/>
        <div class="log1-content">
            <h2>Email</h2>
            <p>sunset@gamil.com</p>
        </div>
    </div>
    <div class="cont-log1">


        <img src="/Sunset/Contact.jpg"/>

        <div class="log1-content">
            <h2>Contact no.</h2>
            <p>+91 6254777544</p>
            
        </div>
    </div>
</div>

<div class="cont-horz"></div>
{/* <!-- form part --> */}
<div class="cont-form-head">
    <h1>Contact US</h1>
</div>
<div class="cont-form">

<div class="form-left">
    <lable id="first">First Name</lable>
    <br/>
    <input id="name-inp" type="text"/>
    <br/>

    <label id="second">Contact Number </label>
    <br/>
    <input id="cont-num-inp" type="number"/>
</div>

<div class="form-right">
    <lable id="first">Last Name</lable>
    <br/>
    <input id="name-inp" type="text"/>
    <br/>

    <label id="second">Email ID </label>
    <br/>
    <input id="cont-num-inp" type="email"/>
</div>
</div>
<div class="cont-form-msg">
    <input id="msg" type="text" placeholder="your message for us....."/>
</div>
<button class="cont-submit">Submit</button>


</div>
{/* <!--contact main--> */}

        </div>
        {/* <!--37 main end--> */}
<Footer/>
        {/* </div> */}
        
        </>
    )
}