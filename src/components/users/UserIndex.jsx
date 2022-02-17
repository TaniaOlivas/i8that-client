import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import UserFood from './UserFoods';

import UserTable from './UserTable';

const UserIndex = (props) => {
  const [foodEntrys, setFoodEntrys] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(true);
  const [isOff, setIsOff] = useState(true);

  const fetchFood = () => {
    fetch('http://localhost:4000/foodlog/all', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        setFoodEntrys(logData);
        console.log(logData);
      });
  };

  useEffect(() => {
    fetchFood();
  }, []);

  function handleToggle() {
    setIsTableVisible(!isTableVisible);
    setIsOff(!isOff);
  }

  return (
    <div>
      {isTableVisible === true ? (
        <UserTable token={props.sessionToken} />
      ) : (
        <UserFood
          token={props.sessionToken}
          fetchFood={fetchFood}
          foodEntrys={foodEntrys}
          setFoodEntrys={setFoodEntrys}
        />
      )}
      <div style={{ borderWidth: 0, textAlign: 'center', marginTop: 10 }}>
        <Button onClick={handleToggle}>
          {isOff ? 'View All Patient Logs' : 'View all Patients'}
        </Button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default UserIndex;
