import React, { useState, useEffect } from 'react';
import Auth from './components/auth/Auth';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken
    }
  }, []);

  return (
     <div>
       <Auth />
    </div>
  )}

export default App;
