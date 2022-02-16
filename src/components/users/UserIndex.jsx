import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import UserFood from './UserFoods';

import UserTable from './UserTable';

const UserIndex = (props) => {
  const [foodEntrys, setFoodEntrys] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(true);

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
      <div style={{textAlign: 'center'}}>
      <Button onClick={handleToggle}>View All Patient Logs</Button>
      </div>
    </div>
  );
};

export default UserIndex;
