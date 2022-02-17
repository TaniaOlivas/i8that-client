import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Auth from './components/auth/Auth';
import Header from './components/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/Footer/Footer';

function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [refreshUserTable, setRefreshUserTable] = useState(true);

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
      <MainPage token={sessionToken} />
    ) : (
      <Auth
        updateToken={updateToken}
        refreshUserTable={refreshUserTable}
        setRefreshUserTable={setRefreshUserTable}
      />
    );
  };

  return (
    <div>
      <Router>
        <Header
          clearToken={clearToken}
          // updateToken={updateToken}
          // token={sessionToken}
          protectedViews={protectedViews}
          // refreshUserTable={refreshUserTable}
          // setRefreshUserTable={setRefreshUserTable}
        />
        {protectedViews()}
        {/* <FoodIndex token={sessionToken} /> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
