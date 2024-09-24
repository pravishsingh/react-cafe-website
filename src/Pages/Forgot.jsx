import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../CSS/Forget.css"
import Footer from "../Footer/Footer";


export default function Forget(){
    return(
        <>
  <Navbar bgColor="black" isSignupPage={true}/>
  <h1 className="text-3xl font-bold text-center mt-8 ml-[49%]">Forget Password ? </h1>
  <div className="forget-page">
    <div className="forget-left">
        <img src="/Sunset/MENU_IMAGES/forget.png"></img>
    </div>
    <div className="forget-right">
        <p>Enter the Email address associated with your account to get a code </p>
        <input type="text" placeholder="Enter email address"></input>
        <button className="send-code">Send Code</button>
        <h1>Back to login</h1>
    </div>
  </div>
  <Footer/>



  

        
        </>
    )
}