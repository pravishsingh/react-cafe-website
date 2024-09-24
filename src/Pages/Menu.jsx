import { NavLink } from "react-router-dom";
import React from "react";
import Navbar from "../Components/Navbar";
import "../CSS/Menu.css"
import "../CSS/MenuResponsiv.css";
import Footer from "../Footer/Footer";
import MenuCarousel from "../CrouselComponent/MenuCarousel";

function Menu(){
 
   

    return(
        <>
        <div className="menu-main w-[100%] h-[1980px]">
        <Navbar isSignupPage={true}/>
        <div className="menu-head">

            <div className="left-hz"></div>
            <div className="middle-cont">
                <h1>SUNSET</h1>
            </div>
            <div className="right-hz"></div>

            
        </div>
        <div className="cafe">
            <h1>CAFE</h1>
        </div>
{/* ==================================================================== */}

<div className="div8">
    
    <div className="hot">
        <div className="hot-img">
            <img src="/Sunset/MENU_IMAGES/hot.jpeg"/>
        </div>
        <button className="hot-btn">HOT BEVERAGES</button>
       
        <div className="div8-expresso">
            <div className="exp-content">
                <h2>Espresso</h2>
                <p>A single shot of Concentrated <br/> coffee</p>
            </div>
            <div className="exp-logo">
                <span id="plus" className="material-symbols-outlined">
                    add_circle
                    </span>
                    <h2>Rs.120</h2>
            </div>

        </div>

        <div className="special-horizontal"></div>
        <div className="div8-expresso">
            <div className="exp-content">
                <h2>Cappuccino</h2>
                <p>Equal parts espresso steamed<br/> milk,and foam</p>
            </div>
            <div className="exp-logo">
                <span id="plus" className="material-symbols-outlined">
                    add_circle
                    </span>
                    <h2>Rs.250</h2>
            </div>

        </div>
        
        <div className="special-horizontal"></div>
        <div className="div8-expresso">
            <div className="exp-content">
                <h2>Americano</h2>
                <p>Espresso shots with hot water </p>
            </div>
            <div className="exp-logo">
                <span id="plus" className="material-symbols-outlined">
                    add_circle
                    </span>
                    <h2>Rs.158</h2>
            </div>

        </div>
        <div className="special-horizontal"></div>
    </div>
    <div className="hot-vertical"></div>



    <div className="cold">
        <div className="cold-img">
            <img src="/Sunset/MENU_IMAGES/cold.jpeg"/>
      </div>
      <button className="cold-btn">COLD BEVERAGES</button>
      <div className="div8-expresso">
        <div className="exp-content">
            <h2>Iced Coffee</h2>
        </div>
        <div className="exp-logo">
            <span id="plus" className="material-symbols-outlined">
                add_circle
                </span>
                <h2>Rs.140</h2>
        </div>

    </div>

    <div className="special-horizontal"></div>
    <div className="div8-expresso">
        <div className="exp-content">
            <h2>Iced Latte</h2>
        </div>
        <div className="exp-logo">
            <span id="plus" className="material-symbols-outlined">
                add_circle
                </span>
                <h2>Rs.250</h2>
        </div>

    </div>
    
    <div className="special-horizontal"></div>
    <div className="div8-expresso">
        <div className="exp-content">
            <h2>Frappuccino</h2>
        </div>
        <div className="exp-logo">
            <span id="plus" className="material-symbols-outlined">
                add_circle
                </span>
                <h2>Rs.158</h2>
        </div>

    </div>
    <div className="special-horizontal"></div>
</div> 

<div className="hot-vertical"></div>
    <div className="special">
        <div className="special-img">
            <img src="/Sunset/MENU_IMAGES/special.jpeg"/>
        </div>
        <button className="special-btn">SPECIALITY DRINKS</button>
        <div className="div8-expresso">
            <div className="exp-content">
                <h2>Matcha Latte</h2>
            </div>
            <div className="exp-logo">
                <span id="plus" className="material-symbols-outlined">
                    add_circle
                    </span>
                    <h2>Rs.120</h2>
            </div>

        </div>

        <div className="special-horizontal"></div>
        <div className="div8-expresso">
            <div className="exp-content">
                <h2>Turmeric Latte</h2>
            </div>
            <div className="exp-logo">
                <span id="plus" className="material-symbols-outlined">
                    add_circle
                    </span>
                    <h2>Rs.250</h2>
            </div>

        </div>
        
        <div className="special-horizontal"></div>
        <div className="div8-expresso">
            <div className="exp-content">
                <h2>Caramel Tea</h2>
            </div>
            <div className="exp-logo">
                <span id="plus" className="material-symbols-outlined">
                    add_circle
                    </span>
                    <h2>Rs.158</h2>
            </div>

        </div>
        <div className="special-horizontal"></div>
    </div>
    <div className="hot-vertical"></div>

    </div> 
    {/* div8 end -------------------- */}

{/* ============================================================================= */}

{/* <!--div9 start-----------------------------------------  --> */}
 {/* <!-- other catogories --> */}

 <div className="div9">
    <div className="div9-one"></div>
    <div className="div9-two">
        <button className="div9-btn">OTHER CATEGORIES</button>
    </div>
    <div className="div9-three"></div>
 </div> 

 {/* <!-- div10 start here --> */}
 <div className="div10">
    <div className="div10-one">
        <div className="one-img">
            <img src="/Sunset/MENU_IMAGES/burger.jpg"/>
        </div>
        <h2>BURGER & <br/> SANDWICHES</h2>
    </div>

    <div className="div10-two">
        <div className="two-img">
            <img src="/Sunset/MENU_IMAGES/salad.jpg"/>
        </div>
        <h2>SALADS</h2>
    </div>
    <div className="div10-three">
        <div className="three-img">
            <img src="/Sunset/MENU_IMAGES/past.jpg"/>
            <h2>DESSERTS / ICE-CREAM</h2>
        </div>
    </div>
    <div className="div10-four">
        <div className="four-img">
            <img src="/Sunset/MENU_IMAGES/combo1.png"/>
            <h2>VALUE COMBO</h2>
        </div>
    </div>
 </div>
 {/* <!-- \div 11 start  --> */}
<div className="div11">
    <NavLink to="/menuhome2">
    <button className="explore-btn">EXPLORE</button>
    </NavLink>
    </div> 

{/* <!-- div 11 end  --> */}
{/* <!-- div 12 start----------------------------------------------------- --> */}

<div className="div12">
    <div className="div12-one"></div>
    <div className="div12-two">
        <h2 className="font-bold text-3xl">BEST OFFERS  &nbsp;&nbsp;<span className="material-symbols-outlined">
            redeem
            </span></h2>
    </div>
    <div className="div12-three"></div>
</div>
{/* Slider start ---------------------------------------- */}

{/* Slider end ---------------------------------------- */}
</div>

{/* <div className="crausel-menu">
    <MenuCarousel/>
</div> */}

        
{/* ==================================================================================== */}
{/* <!-- Html for responsive page --------- --> */}

<div className="resp-main-menu1">
    <Navbar ></Navbar>
    <div className="resp-logo1">
        <span>  <h2>SUNSET </h2></span>
        <span><h3> CAFE</h3> </span>
    </div>

    <div className="resp-div1">
        <div className="resp-1"></div>
        <div className="resp-2">FOR YOU</div>
        <div className="resp-3"></div>
    </div>

    <div className="resp-div2">
        <div className="recom">
            <h4>Recommended</h4>
        </div>
        <div className="fav">

            <span className="material-symbols-outlined">
                favorite
                </span> 
                <h4>Favourites</h4>
        </div>
    </div>

    <div className="resp-div3">
        <div className="resp-div3-shadow">
            <div className="img-content1"> 
                <h3>SPECIALITY DRINKS</h3>
            </div>
        </div>
    </div> 
{/* <!-- first row------------------------- --> */}
    <div className="resp-div5">
        <div className="resp-div5-left">
            <h4>Matcha Latte</h4>
            <p>Rs.120</p>
        </div>
        <div className="resp-div5-right">
                <span id="heart" className="material-symbols-outlined">
                    favorite
                    </span> 
              
        </div>
    </div>
    <div className="resp-plus">
        <span><p>- 1 +</p></span>
    </div>
    <div className="resp-div5-horz"></div>
{/* <!--end first row  -->

<!-- second row start--------------------------- --> */}
<div className="resp-div6">
    <div className="resp-div6-left1">
        <h4>Turmeric Latte</h4>
        <p>Rs.160</p>
    </div>
    <div className="resp-div6-right1">
            <span id="heart1" className="material-symbols-outlined">
                favorite
                </span> 
          
    </div>
</div>
<div className="resp-plus1">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div6-horz1"></div>

{/* <!-- second row end--------------------------- -->

<!-- third row start---- --> */}
<div className="resp-div7">
    <div className="resp-div7-left2">
        <h4>Turmeric Latte</h4>
        <p>Rs.160</p>
    </div>
    <div className="resp-div7-right2">
            <span id="heart2" className="material-symbols-outlined">
                favorite
                </span> 
          
    </div>
</div>
<div className="resp-plus2">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div7-horz2"></div>

{/* <!-- third row end -->

<!-- forth row start--- --> */}
<div className="resp-div8">
    <div className="resp-div8-left3">
        <h4>Turmeric Latte</h4>
        <p>Rs.160</p>
    </div>
    <div className="resp-div8-right3">
            <span id="heart3" className="material-symbols-outlined">
             favorite
                </span> 
          
    </div>
</div>
<div className="resp-plus3">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div8-horz3"></div>
{/* 
<!-- fourth row end------------- -->

<!-- fifth row start --> */}
<div className="resp-div9">
    <div className="resp-div9-left4">
        <h4>Turmeric Latte</h4>
        <p>Rs.160</p>
    </div>
    <div className="resp-div9-right4">
            <span id="heart4" className="material-symbols-outlined">
             favorite
                </span> 
          
    </div>
</div>
<div className="resp-plus4">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div9-horz4"></div>

{/* <!-- fifth row end -->

<!-- six row start --> */}
<div className="resp-div10">
        <div className="resp-div10-shadow">
            <div className="img-content2"> 
                <h3>HOT BEVERAGES</h3>
            </div>
        </div>
    </div>
{/* <!-- six row end -->

<!-- seven row start --> */}
<div className="resp-div11">
    <div className="resp-div11-left5">
        <h4>Espresso</h4>
        <p id="det">A sinle shot of concentrated coffee</p>
        <p>Rs.160</p>
    </div>
    <div className="resp-div11-right5">
            <span id="heart5" className="material-symbols-outlined">
             favorite
                </span> 
          
    </div>
</div>
<div className="resp-plus5">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div11-horz5"></div>

{/* <!-- seven row end -->

<!-- 8th row start  --> */}
<div className="resp-div12">
    <div className="resp-div12-left6">
        <h4>Cappuccino</h4>
        <p id="det">Equal parts espresso steamed milk, and foam</p>
        <p>Rs.250</p>
    </div>
    <div className="resp-div12-right6">
            <span id="heart6" className="material-symbols-outlined">
             favorite
                </span> 
          
    </div>
</div>
<div className="resp-plus6">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div12-horz6"></div>

{/* <!-- 8th row end  -->

<!-- 9th row start  --> */}
<div className="resp-div13">
    <div className="resp-div13-left7">
        <h4>Americano</h4>
        <p id="det">Espresso shots with hot water</p>
        <p>Rs.150</p>
    </div>
    <div className="resp-div13-right7">
            <span id="heart7" className="material-symbols-outlined">
             favorite
                </span> 
          
    </div>
</div>
<div className="resp-plus7">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div13-horz7"></div>7
{/* <!-- 9th row end  -->
       
<!-- 10 row start --> */}
<div className="resp-div14">
    <div className="resp-div14-shadow">
        <div className="img-content3"> 
            <h3>COLD BEVERAGES</h3>
        </div>
    </div>
</div>

{/* <!-- 10 row end -->

<!-- 11th row start --> */}
<div className="resp-div15">
    <div className="resp-div15-left8">
        <h4>Iced Coffee</h4>
        <p>Rs.140</p>
    </div>
    <div className="resp-div15-right8">
            <span id="heart2" className="material-symbols-outlined">
                favorite
                </span> 
          
    </div>
</div>
<div className="resp-plus8">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div15-horz8"></div>

{/* <!-- 11th row end -- -->

<!-- 12th row start --> */}
<div className="resp-div16">
    <div className="resp-div16-left9">
        <h4>Iced Latte</h4>
        <p>Rs.130</p>
    </div>
    <div className="resp-div16-right9">
            <span id="heart2" className="material-symbols-outlined">
                favorite
                </span> 
          
    </div>
</div>
<div className="resp-plus9">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div16-horz9"></div>

{/* <!--12th row end  -->

<!-- 13th row start --> */}
<div className="resp-div17">
    <div className="resp-div17-left10">
        <h4>Frappuccino</h4>
        <p>Rs.120</p>
    </div>
    <div className="resp-div17-right10">
            <span id="heart2" className="material-symbols-outlined">
                favorite
                </span> 
          
    </div>
</div>
<div className="resp-plus10">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div17-horz10"></div>

{/* <!-- 13th row end -->

<!-- 14th row start --> */}
<div className="resp-div18">
    <div className="resp-div18-left11">
        <h4>Frappuccino</h4>
        <p>Rs.120</p>
    </div>
    <div className="resp-div18-right11">
            <span id="heart2" className="material-symbols-outlined">
                favorite
                </span> 
          
    </div>
</div>
<div className="resp-plus11">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div18-horz11"></div>
{/* <!-- 14th row end -->

<!-- 15th row start --> */}
<div className="resp-div19">
    <div className="resp-div19-left12">
        <h4>Frappuccino</h4>
        <p>Rs.120</p>
    </div>
    <div className="resp-div19-right12">
            <span id="heart2" className="material-symbols-outlined">
                favorite
                </span> 
          
    </div>
</div>
<div className="resp-plus12">
    <span><p>- 1 +</p></span>
</div>
<div className="resp-div19-horz12"></div>

{/* <!-- 15th row end -->

<!-- 16 row start --> */}
<div className="resp-div20">
    <div className="resp-div20-one"></div>
    <div className="resp-div20-two">
        <button className="resp-div20-btn">OTHER CATEGORIES</button>
    </div>
    <div className="resp-div20-three"></div>
 </div>
 


{/* <!-- 16 row end -->

<!-- 17 row start --> */}
<div className="resp-div21">
    <div className="resp-div21-one">
        <div className="resp-one-img">
            <img src="/Sunset/MENU_IMAGES/burger.jpg"/>
        </div>
        <h2>BURGER & <br/> SANDWICHES</h2>
    </div>

    <div className="resp-div21-two">
        <div className="resp-two-img">
            <img src="/Sunset/MENU_IMAGES/salad.jpg"/>
        </div>
        <h2>SALADS</h2>
    </div>
    <div className="resp-div21-three">
        <div className="resp-three-img">
            <img src="/Sunset/MENU_IMAGES/past.jpg"/>
            <h2>DESSERTS <br/>/ ICE-CREAM</h2>
        </div>
    </div>
    <div className="resp-div21-four">
        <div className="resp-four-img">
            <img src="/Sunset/MENU_IMAGES/combo1.png"/>
            <h2>VALUE COMBO</h2>
        </div>
    </div>
 </div> 
{/* <!-- 17 row end -->

<!-- 18 row start  --> */}
<div className="resp-div22">
    <div className="resp-div22-one"></div>
    <div className="resp-div22-two">
       <NavLink to ="/menuhome2">
        <button className="resp-div20-btn">EXPLORE</button>
        </NavLink>
            </div>
    <div className="resp-div22-three"></div>
 </div>

{/* <!-- 18 row end  --> */}

{/* <!-- 19th row start --> */}
<div className="resp-div23">
    {/* <!-- <div className="resp-div23-one"></div> --> */}
    <div className="resp-div23-two">
        <h2>BEST OFFERS</h2>
             <span id="bag" className="material-symbols-outlined">
            redeem
            </span>
    </div>
    {/* <!-- <div className="resp-div23-three"></div> --> */}
</div>
    {/* <MenuCarousel/> */}

</div>
<div className="crausel-menu">
    <MenuCarousel/>
</div>
<Footer/>



        </>
    )
    // console.log(props)
}
    export default Menu;