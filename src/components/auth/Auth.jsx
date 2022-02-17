import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import { Button } from 'reactstrap';

const Auth = (props) => {
  const [isLoginVisible, setisLoginVisible] = useState(true);

  function handleToggle() {
    setisLoginVisible(!isLoginVisible);
  }

  return (
    <div>
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
      <div style={{ textAlign: 'center' }}>
        <Button onClick={handleToggle}>Signup/Login</Button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Auth;
