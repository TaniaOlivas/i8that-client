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

const Header = (props) => {
  return (
    <div>
      <header>
        <Navbar color="faded" className="header">
          <Nav navbar>
            <NavItem>
              <NavLink onClick={props.clearToken}>Logout</NavLink>
            </NavItem>
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
