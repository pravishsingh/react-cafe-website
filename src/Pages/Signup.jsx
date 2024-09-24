import React from "react";
import Navbar from "../Components/Navbar";
import { NavLink } from "react-router-dom";
import  "../Pages/Reg.css";
import Footer from "../Footer/Footer";

export default function Signup(){
    return(
        <>
        <Navbar bgColor="black" isSignupPage={true} />
        <div className="div1-main1">
            <div className="form">
                <h1>Register</h1>
                <div className="form-content">
                    <p>Signup now and get full access to our app</p>

                    <div className="form-first-div">
                    <input className="first-name" type="text" placeholder="Firstname"></input>
                    <input className="first-name" type="text" placeholder="Lastname"></input>
                    </div>

            
                    <input className="inp-email" type="email" placeholder="Email"></input>
                    
                   
                    <input className="inp-email" type="password"placeholder="Password"></input>
                   
                
                    <input className="inp-email" type="password" placeholder="Confirm Password"></input>
                    
            
                    <button className="submit" >Submit</button>
                    <div className="lastline">
                        <p>Already have an Account ?</p>
                        <NavLink to="/signin">
                        <button className="btn-signIn">Sign in</button>
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
        <Footer/>
        
        {/* <h1>heloo this is signup page</h1> */}
        </>
    )
}