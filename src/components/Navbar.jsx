import React from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import logo from '../assets/orangelogolight.png';

const Header = (props) => {
  return (
    <div>
      <Navbar
        className="secondHeader"
        style={{ paddingTop: 0, marginLeft: '20px', paddingBottom: '0px' }}
      >
        <div style={{ position: 'relative', left: '5' }}>
          <img
            src={logo}
            style={{
              width: '130px',
              height: '90px',
              paddingTop: 0,
              margin: '0 0 0 615px',
              borderRadius: '5%',
            }}
          />
        </div>
        <Nav
          navbar
          className="ms-auto"
          style={{ textAlign: 'right', paddingBottom: '0' }}
        >
          <NavItem>
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'black',
                marginTop: '50px',
                paddingBottom: '0px',
              }}
              onClick={props.clearToken}
            >
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
