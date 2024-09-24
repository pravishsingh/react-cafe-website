import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Footer/Footer'
import "../CSS/Blog1.css";

function Blog1() {
  return (
    <>
    <div className="blog1-menu">
        <Navbar isSignupPage={true}/>
        <div className="blog1-row1">
        <h1>#1 Exclusive</h1>
    </div>

    <div className="blog1-row2">
        <h2>Unlock a World of Culinary Luxury and Tranquil Moments & Much More.</h2>
    </div>

    <div className="blog1-hz"></div>

    <div className="blog1-row3">
        <h3>Newly Added</h3>
    </div>

    <div className="blog1-row4">
        <div className="blog1-row4-left">
            <h2>Mango Tango Fusion Salad:</h2>
            <div className="row4-sub-left">
                <img src="/Sunset/div3/noddle.jpg"/>
                <div className="row4-left-content">
                    <p>
                        Dive into a refreshing symphony of flavors with our mango Tango Fusion Salad. Crisp mixed greens, juicey mango slices, and cherry tomatoes are tossed with a zesty mango-lime dressing, creatiing a burst of tropical goodness on your plate. Topped with grilled chicken for a protein boost and garnished for a protein boost and garnished with crunchy almond slivers.
                    </p>
                </div>
            </div>
        </div>
      <div className="row4-hz"></div>
      <div className="blog1-row4-left">
        <h2>Spiced Infusion Sea Bass:</h2>
        <div className="row4-sub-left">
            <img src="/Sunset/MENU_IMAGES/beverages.jpg"/>
            <div className="row4-left-content">
                <p>
                    Immerse youself in the bold and aromatic notes of our Spiced Infusion Sea Bass. Fresh Fillets of sea bass are delicately seasoned with a blend of Indian spices, including cumin, coriander, and turmeric, then seared to perfection. Served on a bed of saffron-infused basmati rice and accompanied by a side of mint-cilantro chutney, thi dish is a celebration of coastal flavors with a touch of Indian flair.
                </p>
            </div>
        </div>
    </div>
    </div>

    <div className="blog1-hz2"></div>

    <div className="blog1-row5">
        <h1>Become a Sunset Insider: Join Our Exclusive Community</h1>
        <li>Newsletter: Subscribe to our newsletter for sneak peeks, exclusive recipes, and memebers-only offers.</li>
        <li>Sunset Insider Club: Unlock premium benefits by becoming a part of our exclusive membership program.</li>
        <p>Indulge in the Extraordinary. Reserve Your Seat for an Exclusive Culinary Soiree at Cafe Sunset.</p>
    </div>

    <div className="blog1-hz3"></div>

    <div className="blog1-row6">
        <p>Limited-Time Exclusive Events:</p>
        <li>Sunset Symphony Night: An evening of live music, exclusive dishes, and a curated selection of wines. Limeted seats available. Reserve now.</li>
        <li>Chef's Table Experience: Join our head chef for an intimate dining experience featuring a specially crafted menu. Limited to a select few connoisseurs.</li>
    </div>

    <div className="blog1-hz4"></div>

    <div className="blog1-row7">
        <h2>WHERE WE'VE BEEN FEATURED </h2>
        <div className="blog1-row7-img">
            <img src="/Sunset/div3/blg1.jpeg"/>
            <img src="/Sunset/div3/blg2.jpeg"/>
            <img src="/Sunset/div3/blg3.jpeg"/>
            <img src="/Sunset/div3/blg4.jpeg"/>
            
        </div>
    </div>
</div>

    <Footer isBlogPage={true}/>

    </>
  )
}

export default Blog1