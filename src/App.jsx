import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Auth from './components/auth/Auth';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <FoodIndex token={sessionToken} /> : <Auth updateToken={updateToken} />)
  // }

  return (
     <div>
       {/* <Navbar clearToken={clearToken} />
       {protectedViews()} */}
       <Auth updateToken={updateToken}/>
    </div>
  );
}

export default App;
