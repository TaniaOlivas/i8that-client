import React from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {
  return (
    <div className='topNav'>
      <header>
        <Navbar color="faded" className="header" style={{paddingBottom: 0}}>
          <Nav navbar className='ms-auto'>
            <NavItem>
              <NavLink style={{paddingBottom: 0}} onClick={props.clearToken}>Logout</NavLink>
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
