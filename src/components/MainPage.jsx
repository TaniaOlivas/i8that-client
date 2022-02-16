import React from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import FoodIndex from './Food/FoodIndex';
import UserIndex from './users/UserIndex';
import { Button, Nav, Navbar, NavItem } from 'reactstrap';
import logo from "../assets/orangelogolight.png"

const MainPage = (props) => {
  return (
    <div>
      <header className="secondHeader">
        <Navbar style={{paddingTop: 0, marginLeft: "20px"}} >
        <div>
            <img src={logo} style={{ width: "120px", height: "60px", paddingTop: 0, margin: -12}} />
            </div>
          <Nav navbar className='ms-auto' style={{textAlign: 'right'}}>
            <NavItem>
              <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/users">Admin Only</NavLink>
              <br />
              <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/FoodIndex">Log your Food  </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
      {/* <div>
        <Button>
          <Link to="/FoodIndex">Log your Food!</Link>
        </Button>{' '}
        <Link to="/users">Admin Only</Link>
      </div> */}
      <div className="backgroundMain">
        <Routes>
          <Route
            exact
            path="/FoodIndex"
            element={<FoodIndex token={props.token} />}
          />
          <Route
            exact
            path="/users"
            element={<UserIndex token={props.token} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
