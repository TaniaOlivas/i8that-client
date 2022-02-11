import React, { useState } from 'react';
import { Route, Link, Routes, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';

const Header = (props) => {
  return (
    <header>
      <Navbar>
        {/* <NavbarBrand>i8that</NavbarBrand> */}
        <Nav navbar>
          <NavItem>
            <div>
              <NavLink to="/auth">Login/Signup</NavLink>
            </div>
            <div>
              <Routes>
                <Route
                  exact
                  path="/auth"
                  element={props.protectedViews()}
                ></Route>
              </Routes>
            </div>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
