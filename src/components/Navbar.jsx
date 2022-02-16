import React from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from "../assets/orangelogolight.png"

const Header = (props) => {
  return (
    <>

        <Navbar className="navbar-light" style={{paddingBottom: 0, backgroundColor: "transparent", marginLeft: 20, paddinLeft: 20}}>
          <Nav navbar className='ms-auto'>
            <NavItem>
              <NavLink style={{paddingBottom: 0}} onClick={props.clearToken}>Logout</NavLink>
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
      {/* //</div></header> */}
  </>
  );
};

export default Header;
