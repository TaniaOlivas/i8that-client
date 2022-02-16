import React, { useState } from 'react';
import { Table, Button, Container } from 'reactstrap';

const FoodTable = (props) => {

  const deleteFoodEntry = (foodEntry) => {
    fetch(`http://localhost:4000/foodlog/${foodEntry.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    }).then(() => props.fetchFood());
  };

  const changeEditBtn = (e) => {
    e.target.style.background = '#006400';
  } 

  const changeEditBtnOff = (e) => {
    e.target.style.background = '#86b13d';
  }

  const changeDeleteBtn = (e) => {
    e.target.style.background = '#e86100';
  }

  const changeDeleteBtnOff = (e) => {
    e.target.style.background = '#fe9233';
  }

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
          <td>
      
            <Button 
            style={{justifyContent: 'center', borderWidth: 0, textAlign: "center", alignItems: 'center', marginRight:50, width: 100, backgroundColor: '#86b13d'}}
              onClick={() => {
                props.editUpdateFood(foodEntry);
                props.updateOn();
              }} 
              onMouseEnter={changeEditBtn}
              onMouseLeave={changeEditBtnOff}>
              Edit
            </Button>
          </td>
          <td>
            <Button style={{borderWidth: 0, textAlign: "center", width: 100, backgroundColor: '#fe9233'}}
              onClick={() => {
                deleteFoodEntry(foodEntry);
              }}
              onMouseEnter={changeDeleteBtn}
              onMouseLeave={changeDeleteBtnOff}
            >
              Delete
            </Button>{' '}
          </td>
        </tr>
      );
    });
  };

  return (

    <div style={{textAlign: 'center'}}>
      <Container style={{width: '50%'}}>
        <div><h2>Food Entries</h2></div>
      <div>
      <Table hover style={{backgroundColor: 'white', borderRadius: 20 }}>
        <thead >
          <tr className='FoodTable'>
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
      </div>
      </Container>
    </div>
  );
};

export default FoodTable;
