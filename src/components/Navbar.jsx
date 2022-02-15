import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Nav, Navbar, NavItem } from 'reactstrap';

const Header = (props) => {
  return (
    <header>
      <Navbar>
        <Nav navbar>
          <NavItem>
            <div>
              <NavLink to="/auth">Login/Signup</NavLink>
            </div>
            <Button onClick={props.clearToken}>Log Out</Button>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
