import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import FoodIndex from './Food/FoodIndex';
import UserIndex from './users/UserIndex';
import fruitImage from '../assets/fruitphoto.jpg';

const MainPage = (props) => {
  return (
    <div className="backgroundMain">
      <div>
        <Link to="/FoodIndex">Log your Food!</Link>{' '}
        <Link to="/users">Admin Only</Link>
      </div>
      <div>
        {/* <img src={ fruitImage } style={{height:'auto',width:'100%'}} /> */}
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
