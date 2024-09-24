import React from 'react'
import Blog1Card from './Blog1Card';

function Blog1Carousel() {
    
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
            <Blog1Card/>
         </div>
        </div>
    </>
  )
}

export default Blog1Carousel