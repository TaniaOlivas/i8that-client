import React, { useState } from 'react';
import {
    Route,
    Link,
    Routes
} from "react-router-dom";
// import Auth from "Auth";
// import Login from "Login";
// import Signup from "Signup";

const Navbar=(props) =>{
  return (
    <div className="navbar">
        <h1>Hello from Navbar</h1>
            <div> 
                <ul>
                {/* <li><Link to="/">Login</Link></li> */}
                {/* <li><Link to="/">Signup</Link></li> */}
                {/* <li><Link to="/">Logout</Link></li> */}
                </ul>
        </div>
        <div>
                <Routes>
                    {/* <Route exact path="/Login" element={<Login/>}></Route> */}
                    {/* <Route exact path="/Signup" element={<Signup/>}></Route> */}
                    {/* <Route exact path="/Logout" element={<Logout/>}></Route> */}
                </Routes>
              
        </div>
    </div>
  );
};


export default Navbar; 