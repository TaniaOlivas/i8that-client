import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from "../assets/orangelogolight.png"

const Header = (props) => {
  return (
    <div>
      <header>
        <Navbar color="faded" className="header">
          <Nav navbar>
            <NavItem className='navitemlink'>
              <NavLink onClick={props.clearToken}>Logout</NavLink>
            </NavItem>
            <img src= { logo } style={{ width: "70%", height: "70%"}} />
            {/* <Dropdown nav>
              <DropdownToggle caret nav></DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Log Food</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
          </Nav>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
