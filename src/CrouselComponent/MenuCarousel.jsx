import React from "react";
import Mycard from "../CrouselComponent/Mycard";
import "../CrouselComponent/MenuCarousel.css";
import CrauselNav from "../Components/CrauselNav";



 function MenuCarousel({navItems}){
    // let width=0;
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

    
    return(
        <>
        <div className="product-carousel">
        <button className="pre-btn"onClick={btnpressprev}> <p>&lt;</p> </button>
        <button className="next-btn"onClick={btnpressnext}> <p>&gt;</p> </button>
         
         <div className="product-container">
            <Mycard/>
         </div>
        </div>

        </>
    )
}

export default MenuCarousel;