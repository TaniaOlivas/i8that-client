import React, { useState, useEffect } from 'react';
import FoodIndex from './components/Food/FoodIndex';
import Auth from './components/auth/Auth';
import Header from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem('token') ? (
      <FoodIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div>
      <Router>
        <Header
          clearToken={clearToken}
          updateToken={updateToken}
          token={sessionToken}
          protectedViews={protectedViews}
        />
        {/* {protectedViews()} */}
        {/* <FoodIndex token={sessionToken} /> */}
      </Router>
    </div>
  );
}

export default App;
