import React from 'react'
import NavCard from './NavCard';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';


function CrauselNav() {
  let box=document.querySelector(".product-container");


  const btnpressprev =()=>{
      let box=document.querySelector(".product-container");
      let width=box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
      console.log(width);
  
      
  };
  


  const btnpressnext= () => {
      let box=document.querySelector(".product-container");
      let width=box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      console.log(width);
  };

  return (
    <>
      <div className="product-carousel">
        <button className="pre-btn"onClick={btnpressprev}> <p>&lt;</p> </button>
        <button className="next-btn"onClick={btnpressnext}> <p>&gt;</p> </button>
         
         <div className="product-container">
            <NavCard/>
         </div>
        </div>
     
    {/* <p>this is NavCrausel </p> */}
    </>
  )
}

export default CrauselNav;