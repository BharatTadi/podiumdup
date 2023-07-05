import React from "react";
import Logo from './clogo.png';
function Nav(){
    return(
        
            <nav>
                <ul>
                <img src={Logo} alt="Logo" />
                    <li>Product</li>
                    <li>Industries</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                    <li>Customer Support</li>
                    
                       <li> <div class="sign-button">
                        <button class="btn btn-primary">Sign In</button>
                        </div></li>

                        <li><div class="signup-button">
                        <button class="btn btn-primary">Start a free trial</button>
                        </div> </li>
                        

                    
                    
                </ul>
               
            </nav>
        
    )
}

export default Nav;