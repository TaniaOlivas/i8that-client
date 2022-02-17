import React from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import FoodIndex from './Food/FoodIndex';
import UserIndex from './users/UserIndex';
import { Button, Nav, Navbar, NavItem } from 'reactstrap';
import logo from '../assets/orangelogolight.png';

const MainPage = (props) => {
  return (
    <div>
      <header className="secondHeader">
        <Navbar style={{ paddingTop: 0, marginLeft: '20px' }}>
          <Nav navbar className="ms-auto" style={{ textAlign: 'right' }}>
            <NavItem>
              <NavLink
                style={{ textDecoration: 'none', color: 'black' }}
                to="/users"
              >
                Admin Only
              </NavLink>
              <br />
              <NavLink
                style={{ textDecoration: 'none', color: 'black' }}
                to="/FoodIndex"
              >
                Log your Food{' '}
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
      <div>
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
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </div>
  );
};

export default MainPage;
