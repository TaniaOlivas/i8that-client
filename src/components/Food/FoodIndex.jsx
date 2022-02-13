import React, { useState, useEffect } from 'react';
import FoodCreate from './FoodCreate/FoodCreate';
import FoodEdit from './FoodEdit/FoodEdit';

const FoodIndex = (props) => {
  const [refreshFoodTable, setRefreshFoodTable] = useState(true);
  return (
    <div>
      <FoodCreate
        token={props.token}
        refreshFoodTable={refreshFoodTable}
        setRefreshFoodTable={setRefreshFoodTable}
      />
      <FoodEdit />
    </div>
  );
};

export default FoodIndex;
