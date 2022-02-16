import React from 'react';
import { Container, Table } from 'reactstrap';

const UserFood = (props) => {
  const foodTableMapper = () => {
    return props.foodEntrys.map((foodEntry, index) => {
      return (
        <tr key={index}>
          <td style={{ width: '20%' }}>{foodEntry.date}</td>
          <td>{foodEntry.food}</td>
          <td>{foodEntry.location}</td>
          <td>{foodEntry.calories}</td>
          <td>{foodEntry.mood}</td>
          <td>
            <img src={foodEntry.photo} alt="" style={{ width: '30%' }} />
          </td>
        </tr>
      );
    });
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <Container style={{ width: '50%' }}>
        <h2>Patient Entries</h2>
        <Table hover style={{ backgroundColor: 'white', borderRadius: 20 }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Food</th>
              <th>Location</th>
              <th>Calories</th>
              <th>Mood</th>
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
