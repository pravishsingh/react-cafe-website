import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../CSS/Login.css"

export default function Login(){
    return(
        <>
        <Navbar bgColor="black" isSignupPage={true}/>
        <h1 className="text-3xl font-bold text-center mt-11 mr-[45%]">Log In </h1>

        <div className="login-page">
            <div className="login-left">
                <h3>Log in to your Account</h3>

                <div className="login-inp">
                 <input type="text" placeholder="Username.."></input>
                 <input type="password" placeholder="Password"></input>
                </div>
                <div className="forget ">
                    <h2> <NavLink to ="/forget">
                        Forgot Password ?
                           </NavLink>
                    </h2>
                    
                </div>
                <button className="submit"> Submit</button>
                <div className="login-last">
                    <p>If you dont have account</p>
                    <button className="login">Login</button>
                </div>

            </div>
            <div className="login-right">
                <img src="./Sunset/MENU_IMAGES/login-img.png"></img>
            </div>
        </div>

        </>
   
    )
}