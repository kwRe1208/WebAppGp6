import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
const Footer = () =>{
    return(
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download app for Android and IOS mobile phone</p>
                <img src={playStore} alt="playStore" />
                <img src={appStore} alt="Appstore" />
            </div>
            <div className="midFooter">
                <h1>Emporium DEvs</h1>
                <p>High Quality is our first priority</p>
                <p>Copyrights 2023 &copy; Emporium DEvs</p>
            </div>
            <div className="rightFooter">
                <h4>Follow us</h4>
                <a>Instagram</a>
                <a>Facebook</a>
            </div>


        </footer>

    );
};

export default Footer;