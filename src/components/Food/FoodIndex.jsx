import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FoodTable from './FoodTable/FoodTable';
import FoodCreate from './FoodCreate/FoodCreate';
import FoodEdit from './FoodEdit/FoodEdit';

const FoodIndex = (props) => {
  const [food, setFood] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [refreshFoodTable, setRefreshFoodTable] = useState(true);
  const [foodToUpdate, setFoodToUpdate] = useState({});

  const fetchFood = () => {
    fetch('http://localhost:4000/foodlog/all', {
      method: 'GET',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': `${props.token}`
      })
    }).then((res) => res.json())
    .then((logData) => {
      setFood(logData)
      console.log(logData)
    })
  }

  const editUpdateFood = (food) => {
    setFoodToUpdate(food);
    console.log(food);
  }

  const updateOn = () => {
    setUpdateActive(true);
}
 
const updateOff = () => {
   setUpdateActive(false);
}

  return (
    <Container>
      <Row>
        <Col md='3'>
          <FoodCreate
            token={props.token}
            refreshFoodTable={refreshFoodTable}
            setRefreshFoodTable={setRefreshFoodTable}
      />
      </Col>
      <Col md='3'>
        <FoodTable food={food} editUpdateFood={editUpdateFood} updateOn={updateOn} fetchFood={fetchFood} token={props.token} />
      </Col>
        {updateActive ? <FoodEdit foodToUpdate={foodToUpdate} updateOff={updateOff} token={props.token} fetchFood={fetchFood}/> : <></>}
      </Row>
    </Container>
  );
};

export default FoodIndex;
