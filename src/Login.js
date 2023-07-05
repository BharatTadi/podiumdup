import React from "react";
import Logo from './clogo.png';

function Login(){
    return(
        <div class="login-box">
            <div class="col-md-5 offset-md-1 mb-4">
            <img src={Logo} alt="Logo"/>
            </div>

            <div class="col-sm-4 offset-sm-1 ">

                <div class="mb-3 mt-5">
                        <label for="exampleFormControlInput1" class="form-label">Email or Mobile number</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" />

                        <div class="main-button mt-3">
                        <button class="btn btn-primary">Next</button>
                        </div>
                </div>

                <div class="mb-4 mt-4">
                    <a href="www.google.com">Don't have an account?Sign up for free</a>
                </div>
            </div>
            
            
        </div>
    )
}
export default Login;