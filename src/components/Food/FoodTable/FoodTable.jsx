import React from 'react';
import { Table, Button, Container, Row, Col } from 'reactstrap';

const FoodTable = (props) => {
  return (
    <div>
      <h1>Hello from FoodTable</h1>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>Date</th>
            <th>What</th>
            <th>Where</th>
            <th>Calories</th>
            <th>Photo</th>
            <th>Mood</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );
};

export default FoodTable;
