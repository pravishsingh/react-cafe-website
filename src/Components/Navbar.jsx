import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";


import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({bgColor, isSignupPage,currentPage}){
    const isSignInPage=currentPage==="signin"
    const [showMediaIcons, setShowMediaIcons] =useState(false);
    
    const toggleMenu = () => {
        setShowMediaIcons(!showMediaIcons);
    };

    
    return(
        <>
        <header style={{backgroundColor:bgColor}}>
            <nav className="main-nav">

                <div className="logo">
                   <img src="Sunset/logo.png"></img>
                </div>

                {/* <div className="menu-link"> */}

                <div className= {showMediaIcons ? "nav-links-mobile" : "menu-link"}>
                    <ul>
                    <li className="hm">
                                <div className="humberger-logo">
                                    <h3>SUNSET </h3>
                                    <h2> CAFE </h2>
                                </div>
                     </li>

                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to ="/menu">Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/contact">Contact Us</NavLink>
                             </li>

                         <div className="drop">
                        <li>
                            <NavLink to = "/blog">Blog  <span class="material-symbols-outlined">
                                expand_more
                                </span> </NavLink>
                        
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/blog1">Blog1</NavLink></li>
                                    <li><NavLink to="/blog2">Blog2</NavLink></li>
                                    <li><NavLink to="/blog3">Blog3</NavLink></li>
                                    <li><NavLink to="/blog4">Blog4</NavLink></li>
                                    <li><NavLink to="/blog5">Blog5</NavLink></li>
                                    <li><NavLink to="/blog6">Blog6</NavLink></li>
                                </ul>
                              
                        </li>
                        </div>
                        <div className="for-responsive">
                        <ul>
             <li>
                 <NavLink to = "signup">Signup</NavLink>
             </li>
             <div className="nav-line"></div>
             <li>
                 <NavLink to="login">Login</NavLink>
             </li>

             <li id="cart">
                 <NavLink to="cart"><i className="fas fa-cart-shopping"></i></NavLink>
                 <p>My Cart</p>
             </li>

         </ul>
                            

                        </div>
                     </ul>
                     </div>
                {/* </div> */}
   
       {/* Admin icon show on page */}

       {isSignupPage && (
            <div className="admin-icon">

         <li>
         <span class="material-symbols-outlined text-black text-4xl relative left-12 top-2 ">
          search
           </span>
            <input type="text" placeholder="Search Item" className="searchbar w-[240px] h-[50px] rounded-3xl text-center mt-5 font-bold text-2xl pl-4"></input>

         </li>

            </div>
          )}


{!isSignInPage && !isSignupPage &&  (
            <div className="signup">
            <ul>
             <li>
                 <NavLink to = "signup">Signup</NavLink>
             </li>
             <div className="nav-line"></div>
             <li>
                 <NavLink to="login">Login</NavLink>
             </li>

             <li id="cart">
                 <NavLink to="cart"><i className="fas fa-cart-shopping"></i></NavLink>
                 <p>My Cart</p>
             </li>

         </ul>
         </div>
)}

{isSignInPage &&(
          <div className="admin-icon">
          <li>
               <NavLink to="/admin" className="nav-link">
               <span id="person" class="material-symbols-outlined text-white">
             person
            </span> 
                 </NavLink>
          </li>

                                
         <li id="cart">
          <NavLink to="/cart"><i className="fas fa-cart-shopping text-white text-2xl mt-7"></i></NavLink>
         <p>My Cart</p>
        </li>
          </div>

)}
               

                    {/* humberger - menu start */}
                  

                  
               
<button className="mobile-menu-icon" onClick={toggleMenu}>
    {showMediaIcons ? ( 
    <i className="fas fa-times cross"></i>
    ):(
         <i className="fas fa-bars "></i>)
         }
</button>

                </nav>
                {/* <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                       < GiHamburgerMenu/>
                        </a>
                    </div> */}
        </header>
        </>

    );
}