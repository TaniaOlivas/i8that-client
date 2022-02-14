import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FoodCreate from './FoodCreate/FoodCreate';
import FoodEdit from './FoodEdit/FoodEdit';
import FoodTable from './FoodTable/FoodTable';

const FoodIndex = (props) => {
  const [foodEntrys, setFoodEntrys] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [refreshFoodTable, setRefreshFoodTable] = useState(true);
  const [foodToUpdate, setFoodToUpdate] = useState({});

  const fetchFood = () => {
    fetch('http://localhost:4000/foodlog/all', {
      method: 'GET',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then((res) => res.json())
    .then((logData) => {
      setFoodEntrys(logData)
      console.log(logData)
    })
  }

  const editUpdateFood = (foodEntry) => {
    setFoodToUpdate(foodEntry);
    console.log(foodEntry);
  }

  const updateOn = () => {
    setUpdateActive(true);
}
 
const updateOff = () => {
   setUpdateActive(false);
}

useEffect(() => {
  fetchFood()
}, []);

  return (
    <div>
    <Container>
      <Row>
        <Col md='3'>
          <FoodCreate
            token={props.token}
            refreshFoodTable={refreshFoodTable}
            setRefreshFoodTable={setRefreshFoodTable}
      />
      </Col>
        {updateActive ? <FoodEdit foodToUpdate={foodToUpdate} updateOff={updateOff} token={props.token} fetchFood={fetchFood}/> : <></>}
      </Row>

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
        </Container>
    </div>
  );
};

export default FoodIndex;
