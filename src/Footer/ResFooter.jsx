import "../Footer/ResFooter";
export default function Footer(){
    return(
        <>
        <div className="res-footer-main">
            <div className="res-footer-content">

                <div className="res-footer-left">
                <h1>Address</h1>
                <p>Cafe</p>
                <p>Plot No.45, Street No.14</p>
                <p>Marol MIDC Industry Estate,</p>
                <p>Andheri East, Mumbai-400093</p>
                </div>

                <div className="res-footer-right">
                    <h1>About us <span class="material-symbols-outlined expand-more">
expand_more
</span></h1>
                    <h1>Term of use <span class="material-symbols-outlined expand-more">
expand_more
</span></h1>
                    <h1>Services <span class="material-symbols-outlined expand-more">
expand_more
</span></h1>
                    <h1>Policies<span class="material-symbols-outlined expand-more">
expand_more
</span></h1>
                </div>


            </div>
            <div className="footer-res-icon">
                <div className="footer-res-icon-head">
                    <h1>Follow Us on :</h1>
                </div>
                <div className="res-icon-img">
                <img src="./Sunset/div3/social-facbook.png"></img>
                    <img src="./Sunset/div3/soci.png"></img>
                    <img src="./Sunset/div3/social-twiter.png"></img>
                    <img src="./Sunset/div3/social-whatsp.png"></img>
                </div>
            </div>
        </div>
        <div className="copy-right-resp">
            <h1>@2023 Railworld India. All Rights Reserved</h1>
        </div>
        
        </>
    )
}