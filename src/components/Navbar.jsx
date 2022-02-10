import React, { useState } from 'react';
import {
    Route,
    Link,
    Routes
} from "react-router-dom";
// import auth from "Auth";
// import login from "Login";
// import signup from "Signup";

const Navbar=(props) =>{
  return (
    <div className="navbar">
        <h1>Hello from Navbar</h1>
            <div> 
                <ul>
                {/* <li><Link to="/">Login</Link></li> */}
                {/* <li><Link to="/">Signup</Link></li> */}
                </ul>
        </div>
        <div>
                <Routes>
                    {/* <Route exact path="/login" element={<Login/>}></Route> */}
                    {/* <Route exact path="/signup" element={<Signup/>}></Route> */}
                </Routes>
        </div>
    </div>
  );
};


export default Navbar; 