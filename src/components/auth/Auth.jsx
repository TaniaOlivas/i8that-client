import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Auth = (props) => {
  const [isLoginVisible, setisLoginVisible] = useState(true);

  function handleToggle() {
    setisLoginVisible(!isLoginVisible);
  }

  return (
    <div>
      <h1>Hello from Signup/Login</h1>
      {isLoginVisible === true ? (
        <Login
          updateLocalStorage={props.updateLocalStorage}
          updateToken={props.updateToken}
        />
      ) : (
        <Signup
          updateLocalStorage={props.updateLocalStorage}
          updateToken={props.updateToken}
          refreshUserTable={props.refreshUserTable}
          setRefreshUserTable={props.setRefreshUserTable}
        />
      )}
      <br />
      <button onClick={handleToggle}>Toggle Signup/Login</button>
    </div>
  );
};

export default Auth;
