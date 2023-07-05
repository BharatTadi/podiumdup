import React from "react";
import Logo from './clogo.png';
import PsLogo from './pslogo.png';
import GPLogo from './gplogo.png';
function Footer(){
    return(
       <footer>
        <div class="row">
        <div class="col-md-2 mt-3 ml-3">
            <div class="col-12 ">
                 <img src={Logo} alt="Logo" />
            </div>
        
            <div class="col-12 mt-5">
                <div class="ps-logo">
                     <img src={PsLogo} alt="PsLogo" />
                </div>

            </div>
       
            <div class="col-12 mt-4">
                <div class="gp-logo">
                        <img src={GPLogo} alt="GPLogo" />
                </div>
            </div>
        </div>

         <div class="col-2 mt-3">
            <ul>
                <h4>Products</h4>
                <li>Reviews</li>
                <li>Payments</li>
                <li>Webchat</li>
                <li>Channels</li>
                <li>Contacts</li>
                <li>Pricing</li>
                <li>Inbox</li>
                <li>Text Campaigns</li>
            </ul>
        </div>

          <div class="col-2 mt-3">
            <ul>
                <h4>Resources</h4>
                <li>Blog</li>
                <li>Google Reviews</li>
                <li>Online Reviews</li>
                <li>Business Text</li>
                <li>Messaging</li>
                <li>Contact Sales</li>
            </ul>
        </div>

        <div class="col-2 mt-3">
            <ul>
                <h4>Partners</h4>
                <li>Become a partner</li>
                <li>Hire a Expert</li>
                <li>inbtegration</li>
                <li>Marketplace</li>
                <li>Deveolper portal</li>
                <li></li>
            </ul>
        </div>

        <div class="col-2 mt-3">
            <ul>
                <h4>Company</h4>
                <li>About us</li>
                <li>Contact</li>
                <li>careers</li>
                <li>Press</li>
                <li>legal</li>
            </ul>
        </div>

        <div class="col-2 mt-3">
            <ul>
                <h4>US Headquters</h4>
                <li>1650 W Digital</li>
                <li>UT Lehi 84043</li>
                <li>Contact sales:801.438.4425</li>
            </ul>

            <ul>
                <h4>Australia</h4>
                <li>Level 3,376-390 Collins St</li>
                <li>VIC Melbourne 3000</li>
            </ul>
        </div> 


        <div class="col-12">
            <div class="col-4 offset-md-2">
                &copy;<h6>Podium Corp Inc.2023</h6>
            </div>
        </div>
        </div>
       </footer>
    )}
export default Footer;    