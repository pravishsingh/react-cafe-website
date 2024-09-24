import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Footer/Footer'
import "../CSS/Blog2.css";

function Blog2() {
  return (
    <>
    <div className="blog2-menu">
        <Navbar isSignupPage={true}/>
        <div className="blog2-row1">
        <h1>#2 "Cafe Sunset Chronicles:<br/> A Journey Through <br/> Flavors and Moments"</h1>
    </div>

    <div className="blog2-row2">
        <p>Welcome to the vibrant tapestry of Café Sunset, where every cup tells a story, and every moment is a cherished chapter in our culinary odyssey. Join us as we embark on a captivating journey, unveiling the essence of Café Sunset through its diverse flavors and unforgettable moments</p>
    </div>
{/* <!-- row2 end------------------------------------------------------------------------------------------------------------------------- --> */}
    <div className="blog2-hz1"></div>

<div className="blog2-row3">
    <div className="blog2-row3-left">

            <div className="blog2-row3-head">
        <h3>Morning Prelude: Awakening the Senses. </h3>
          </div>
{/* <!-- responsive div --> */}
<div className="blog2-row3-right-res">
    <img src="/Sunset/BLOGS_IMAGES/morning.jpg"/>
</div>
{/* <!-- end responsive div --> */}

            <div className="blog2-row3-para">
                <p>
                    As dawn breaks, Café Sunset comes alive with the Morning Prelude – a symphony of aromas and flavors that greet you with warmth and vitality. The Sunrise Espresso takes center stage, a robust elixir that awakens your senses, setting the stage for a day filled with culinary delights. Paired with a selection of freshly baked pastries, the morning at Café Sunset is a sweet beginning to your journey.
                </p>
          </div>

    </div>

    <div className="blog2-row3-right">
            <img src="/Sunset/BLOGS_IMAGES/morning.jpg"/>
    </div>

 </div>
 {/* <!-- row3 end------------------------------------------ --> */}
 <div className="blog2-hz1"></div>  

 <div className="blog2-row4">

    <div className="blog2-row4-left">
        <img src="/Sunset/MENU_IMAGES/chicken with brocoli.jpg"/>
   </div>

    <div className="blog2-row4-right">

            <div className="blog2-row4-head">
        <h3>Culinary Odyssey: Seasons on Plate </h3>
          </div>

{/* <!-- for responsive div  --> */}
<div className="blog2-row4-left-res">
    <img src="/Sunset/MENU_IMAGES/chicken with brocoli.jpg"/>
</div>
{/* <!-- for responsive div end --> */}
            <div className="blog2-row4-para">
                <p>
                    The heart of Café Sunset lies in its culinary offerings, a true odyssey through the seasons. Our chefs curate a culinary symphony with seasonal specialties that capture the essence of each moment. From light and refreshing summer salads to hearty and comforting winter stews, each dish is a celebration of local flavors and innovation. Be sure to explore our daily specials.
                </p>
          </div>

    </div>

 </div>
 {/* <!-- Row 4 end -==0------------------------------------------------------------ --> */}

 <div className="blog2-hz1"></div>

 <div className="blog2-last-para">
    <p>
        The sun may set, but the flavors linger, inviting you to return and continue your exploration of the rich tapestry of Café Sunset – a journey through flavors and moments that linger long after you've left our doors.
    </p>
 </div>

    

    </div>
    <Footer isBlogPage={true}/>

    </>
  )
}

export default Blog2