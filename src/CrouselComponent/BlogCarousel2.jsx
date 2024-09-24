import React from 'react'
import BlogCard2 from './BlogCard2';

function BlogCarousel2() {
    

    const btnpressprev =()=>{
        let box=document.querySelector(".blog-container");
        let width=box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width);
    
        
    };
    
 

    const btnpressnext= () => {
        let box=document.querySelector(".blog-container");
        let width=box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);
    };
  return (
    
    <>
          <div className="product-carousel">
        <button className="pre-btn"onClick={btnpressprev}> <p>&lt;</p> </button>
        <button className="next-btn"onClick={btnpressnext}> <p>&gt;</p> </button>
         
         <div className="blog-container">
            <BlogCard2/>
         </div>
        </div>
    </>
  )
}

export default BlogCarousel2