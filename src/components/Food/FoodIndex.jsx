import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import FoodCreate from './FoodCreate/FoodCreate';
import FoodEdit from './FoodEdit/FoodEdit';
import FoodTable from './FoodTable/FoodTable';

const FoodIndex = (props) => {
  const [foodEntrys, setFoodEntrys] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [refreshFoodTable, setRefreshFoodTable] = useState(true);
  const [foodToUpdate, setFoodToUpdate] = useState({});
  const [isTableVisible, setIsTableVisible] = useState(true);

  const fetchFood = () => {
    fetch('http://localhost:4000/foodlog/mine', {
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

  const changeViewBtn = (e) => {
    e.target.style.background = '#54626F'
  }
  const changeViewBtnOff = (e) => {
    e.target.style.background = 'grey'
  }


  const editUpdateFood = (foodEntry) => {
    setFoodToUpdate(foodEntry);
    console.log(foodEntry);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    fetchFood();
  }, [refreshFoodTable]);

  function handleToggle() {
    setIsTableVisible(!isTableVisible);
  }

  return (
    <div>
      {isTableVisible === true ? (
        <FoodCreate
          token={props.token}
          refreshFoodTable={refreshFoodTable}
          setRefreshFoodTable={setRefreshFoodTable}
        />
      ) : (
        <FoodTable
          token={props.token}
          refreshFoodTable={refreshFoodTable}
          setRefreshFoodTable={setRefreshFoodTable}
          fetchFood={fetchFood}
          foodEntrys={foodEntrys}
          setFoodEntrys={setFoodEntrys}
          editUpdateFood={editUpdateFood}
          updateOn={updateOn}
        />
      )}

      {updateActive ? (
        <FoodEdit
          foodToUpdate={foodToUpdate}
          updateOff={updateOff}
          token={props.token}
          fetchFood={fetchFood}
        />
      ) : (
        <></>
      )}
      <div style={{borderWidth: 0, textAlign: "center", marginTop: 50}}>
      <Button onMouseEnter={changeViewBtn} onMouseLeave={changeViewBtnOff} classID="viewLogs" onClick={handleToggle}>View your Logs!</Button>
      </div>
    </div>
  );
};

export default FoodIndex;
