import React, { useState, useEffect } from 'react';
import FoodCreate from './FoodCreate/FoodCreate';

const FoodIndex = (props) => {
  const [refreshFoodTable, setRefreshFoodTable] = useState(true);
  return (
    <div>
      <FoodCreate
        token={props.token}
        refreshFoodTable={refreshFoodTable}
        setRefreshFoodTable={setRefreshFoodTable}
      />
    </div>
  );
};

export default FoodIndex;
