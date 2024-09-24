import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Footer/Footer'
import "../CSS/Blog3.css";

function Blog3() {
  return (
    <>
    <div className="blog3-menu">
        <Navbar isSignupPage={true}/>
        <div className="blog3-row1">
        <h1>#3 Sunset Sessions: Live Music, Lively Conversations at Café Sunset</h1>
    </div>

    <div className="blog3-row2">
        <p>
            Welcome to the vibrant tapestry of Café Sunset, where every cup tells a story, and every moment is a cherished chapter in our culinary odyssey. Join us as we embark on a captivating journey, unveiling the essence of Café Sunset through its diverse flavors and unforgettable moments      
          </p>
    </div>
{/* <!-- row2 end------------------------------------------------------------------------------------------------------------------------- --> */}
    <div className="blog3-hz1"></div>

    <div className="blog3-row3">
        <div className="blog3-one">
        <img src="/Sunset/BLOGS_IMAGES/Sunset Singing events.jpeg"/>
    </div>
        <div className="blog3-two">
            <h3>Harmony in the Air: Live Music Serenades.</h3>
        </div>
        <div className="blog3-three">
            <p>As the sun begins its descent, Café Sunset transforms into a stage for Harmony in the Air. Our Sunset Sessions feature talented local musicians, whose soulful tunes set the perfect backdrop for an evening of relaxation and connection. From acoustic melodies to vibrant rhythms, each performance is a curated experience designed to enhance your dining pleasure.</p>
        </div>
    </div>
    <div className="blog3-hz1"></div>

    {/* <!-- ro3 end -------------------------------> */}

    <div className="blog3-row4">
        <div className="blog3-four">
            <img src="/Sunset/BLOGS_IMAGES/Red Playful Illustration Comedy Podcast Cover.png"/>
        </div>
        <div className="blog3-five">
            <h3>Lively Conversations: Where Words Dance Like Notes & The Comedy Crescendo: Live Standup Performances.</h3>
        </div>
        <div className="blog3-six">
            <p>Beyond the music, Café Sunset is a haven for Lively Conversations. Engage in meaningful dialogue with friends, family, or fellow patrons as you share the experience of live music. The ambiance encourages connection, turning each table into a stage for the lively exchange of ideas and laughter. Café Sunset becomes a space where words dance like notes, creating an atmosphere of camaraderie.</p>
        </div>
    </div>

    <div className="blog3-hz1"></div>

    {/* <!-- row4 end======----------------------------------- --> */}
    <div className="blog3-bottom">
        <div className="blog3-bottom-one">
            <h3>Encoure Awaits: Return for More Laughter and Fun</h3>
        </div>
        <div className="blog3-bottom-two">
            <h2>Want to Perform for Us? Join the Sunset Stage!</h2>
        </div>
        <div className="blog3-bottom-three">
            <p>How to Reach Us</p>
            <p> To express your interest in performing at Café Sunset, simply send an email to [sunsetperformance@gmail.com] with the following details:</p>
                <li>
                  Your name and a brief introduction   
                </li>
                <li>
                   Type of performance (musician, comedian, or other) 
                </li>
                <li>
                      Samples of your work (links, attachments, or portfolio)
                </li>
                <li>
                     Preferred dates and times for performance 
                </li>
                <p>
                Our team will get back to you promptly to discuss potential opportunities and coordinate your performance on the Sunset Stage. We look forward to turning your talent into an integral part of the Café Sunset experience!
                </p>
        </div>
    </div>
    


        </div>
 
    



    <Footer isBlogPage={true}/>
    </>
  )
}

export default Blog3