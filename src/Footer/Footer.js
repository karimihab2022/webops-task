import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram} from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <footer id='footer'>
             <div className="footer">
            <div className='footer-left'>
                <h1 >weds360</h1>
                <div className="social--media--links">
                    <a className='face' href="https://www.facebook.com/Weds360/">
                        <FontAwesomeIcon icon={faFacebook} /></a>
                    <a className='insta' href="https://www.instagram.com/weds360/">
                        <FontAwesomeIcon icon={faInstagram}  /></a>

                </div>
            </div>
            <div className='footer-center'>
            @ copyright <a href='http://plus360.xyz/'>
                <strong>Plus360</strong> </a>
                All Rights Reserved
            </div>
            <div className='footer-right'>
                <ul>
                    <li><a>Terms & Conditions</a></li>
                    <li><a>Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        </footer>
       
    );
}
export default Footer;