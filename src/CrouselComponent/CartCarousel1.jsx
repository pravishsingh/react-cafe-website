import React from 'react'
import CartCard1 from '../CrouselComponent/CartCard1';
let box=document.querySelector(".product-container");


const btnpressprev =()=>{
    let box=document.querySelector(".product-container1");
    let width=box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);

    
};



const btnpressnext= () => {
    let box=document.querySelector(".product-container1");
    let width=box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
}
function CartCarousel1() {
  return (
    <>
                <div className="product-carousel">
        <button className="pre-btn"onClick={btnpressprev}> <p>&lt;</p> </button>
        <button className="next-btn"onClick={btnpressnext}> <p>&gt;</p> </button>
         
         <div className="product-container1">
            <CartCard1/>
         </div>
        </div>
    
    </>
  )
}

export default CartCarousel1