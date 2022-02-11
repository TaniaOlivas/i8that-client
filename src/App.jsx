import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
// import Navbar from './components/Navbar';
import FoodTable from './components/FoodTable';
=======
import FoodIndex from './components/Food/FoodIndex';
import Auth from './components/auth/Auth';
import Header from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> 3be5e68eee11aae03e287987a110fac8f198238c

function App() {
  const [sessionToken, setSessionToken] = useState('');

<<<<<<< HEAD
  {/* <Navbar /> */}
  <FoodTable />
=======
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);
>>>>>>> 3be5e68eee11aae03e287987a110fac8f198238c

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
