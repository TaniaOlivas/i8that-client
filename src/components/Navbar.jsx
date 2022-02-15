import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Button, Nav, Navbar, NavItem } from 'reactstrap';
import UserIndex from './users/UserIndex';

const Header = (props) => {
  return (
    <header>
      <Navbar>
        {/* <NavbarBrand>i8that</NavbarBrand> */}
        <Nav navbar>
          <NavItem>
            <div>
              <NavLink to="/auth">Login/Signup</NavLink>
              {/* <br />
              <NavLink to="/users">Admin</NavLink> */}
            </div>
            <Button onClick={props.clearToken}>Log Out</Button>
            {/* <div>
              <Routes>
                <Route
                  exact
                  path="/auth"
                  element={props.protectedViews()}
                ></Route>
                <Route
                  exact
                  path="/users"
                  element={
                    <UserIndex
                      token={props.sessionToken}
                      refreshUserTable={props.refreshUserTable}
                    />
                  }
                ></Route>
              </Routes>
            </div> */}
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
