import React, { useState, useEffect } from 'react';
import FoodCreate from './FoodCreate/FoodCreate';
import FoodTable   from './FoodTable/FoodTable';

const FoodIndex = (props) => {
  const [refreshFoodTable, setRefreshFoodTable] = useState(true);
  const [foodEntrys, setFoodEntrys] = useState([]);
  const fetchFood = () => {
    fetch(`http://localhost:4000/foodlog/all`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: props.token
        }),
    })
    .then((res) => res.json())
    .then((logData) => {
        console.log(logData);
        setFoodEntrys(logData);
    })
}
useEffect(() => {
  fetchFood()
}, []);
  return (
    <div>
      <FoodCreate
        token={props.token}
        refreshFoodTable={refreshFoodTable}
        setRefreshFoodTable={setRefreshFoodTable}
      />

      <FoodTable
        token={props.token}
        refreshFoodTable={refreshFoodTable}
        setRefreshFoodTable={setRefreshFoodTable}
        fetchFood={fetchFood}
        foodEntrys={foodEntrys}
        setFoodEntrys={setFoodEntrys}
        
      />
    </div>
  );
};

export default FoodIndex;
