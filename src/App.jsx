import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import './App.css'
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import MyCart from "./Pages/MyCart"
import Navbar from "./Components/Navbar";
import SimpleSlider from "./Slider/Slider2";
import Footer from "./Footer/Footer";
import ResFooter from "./Footer/ResFooter";
import Signin from "./Pages/Signin";
import Forget from "./Pages/Forgot";
import MenuHome2 from "./Pages/MenuHome2";
import Menu1 from "./Pages/Menu1";
import Menu2 from "./Pages/Menu2";
import Menu3 from "./Pages/Menu3";
import Menu4 from "./Pages/Menu4";
import Menu5 from "./Pages/Menu5";
import Menu6 from "./Pages/Menu6";
import Menu7 from "./Pages/Menu7";
import Menu8 from "./Pages/Menu8";
import MenuCarousel from "./CrouselComponent/MenuCarousel";
import CrauselNav from "./Components/CrauselNav";
import Admin from "./Pages/Admin";
import AdminInfo from "./Pages/AdminInfo";
import Faq from "./Pages/Faq";
import Order from "./Pages/Order";
import About from "./Pages/About";
import Blog1 from "./Pages/Blog1";
import Blog2 from "./Pages/Blog2";
import Blog3 from "./Pages/Blog3";
import Blog4 from "./Pages/Blog4";
import Blog5 from "./Pages/Blog5";
import Blog6 from "./Pages/Blog6";

// import MultipleItems from "./Slider/Slider1";

function App() {
  return (
    <>
 
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
  
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route exact path="/cart" element={<MyCart/>} />
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/forget" element={<Forget/>}/>
      <Route exact path="/admin" element={<Admin/>}/>
      <Route exact path="/adminInfo" element={<AdminInfo/>}/>
      <Route exact path="/faq" element={<Faq/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route exact path="/about" element={<About/>}/>

      <Route path="/menuhome2" element={<MenuHome2/>}/>
      <Route path="/menu1"element={<Menu1/>}/>
      <Route path="/menu2"element={<Menu2/>}/>
      <Route path="/menu3"element={<Menu3/>}/>
      <Route path="/menu4"element={<Menu4/>}/>
      <Route path="/menu5"element={<Menu5/>}/>
      <Route path="/menu6"element={<Menu6/>}/>
      <Route path="/menu7"element={<Menu7/>}/>
      <Route path="/menu8"element={<Menu8/>}/>
      <Route path="/" element={<CrauselNav />} />
      <Route path="/blog1" element={<Blog1/>}/>
      <Route path="/blog2" element={<Blog2/>}/>
      <Route path="/blog3" element={<Blog3/>}/>
      <Route path="/blog4" element={<Blog4/>}/>
      <Route path="/blog5" element={<Blog5/>}/>
      <Route path="/blog6" element={<Blog6/>}/>


    </Routes>
    
    </BrowserRouter>
    {/* <CrauselNav/> */}
    {/* <MenuCarousel/> */}
   


{/* {<MultipleItems/>} */}
{/* <SimpleSlider/> */}
<ResFooter/>
{/* <Footer/> */}

    </>

  )
     }


export default App
