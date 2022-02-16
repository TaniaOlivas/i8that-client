import React from 'react';
import { Container, Table } from 'reactstrap';

const UserFood = (props) => {
  const foodTableMapper = () => {
    return props.foodEntrys.map((foodEntry, index) => {
      return (
        <tr key={index}>
          <td>{foodEntry.date}</td>
          <td>{foodEntry.food}</td>
          <td>{foodEntry.location}</td>
          <td>{foodEntry.mood}</td>
          <td>{foodEntry.calories}</td>
          <td>{foodEntry.photo}</td>
        </tr>
      );
    });
  };
  return (
    <div style={{textAlign: 'center'}}>
      <Container style={{width: '50%'}}>
      <h1>Hello from FoodTable</h1>
      <Table hover style={{backgroundColor: 'white', borderRadius: 20 }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Food</th>
            <th>Location</th>
            <th>Mood</th>
            <th>Calories</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>{foodTableMapper()}</tbody>
      </Table>
      </Container>
    </div>
  );
};

export default UserFood;
