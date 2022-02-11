import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const FoodCreate = (props) => {
  const [date, setDate] = useState('');
  const [food, setFood] = useState('');
  const [location, setLocation] = useState('');
  const [mood, setMood] = useState('');
  const [calories, setCalories] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/foodlog/', {
      method: 'POST',
      body: JSON.stringify({
        date: Date(date),
        food: food,
        location: location,
        mood: mood,
        calories: Number(calories),
        photo: photo,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        props.setRefreshFoodTable(!props.refreshFoodTable);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h3>Log your food!</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="date" />
          <Input
            type="date"
            name="date"
            pattern="[0-9]{8}"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="food" />
          <Input
            type="text"
            name="food"
            placeholder="Food"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="location" />
          <Input
            type="text"
            name="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormGroup>
        <FormGroup check inline>
          <Input name="mood" type="checkbox" />
          <Label htmlFor="mood" check>
            Happy
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input name="mood" type="checkbox" />
          <Label htmlFor="mood" check>
            Sad
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input name="mood" type="checkbox" />
          <Label htmlFor="mood" check>
            Tired
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input name="mood" type="checkbox" />
          <Label htmlFor="mood" check>
            Energized
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input name="mood" type="checkbox" />
          <Label htmlFor="mood" check>
            Indifferent
          </Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="calories" />
          <Input
            type="text"
            name="calories"
            placeholder="Calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="photo" />
          <Input
            type="text"
            name="photo"
            placeholder="Photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default FoodCreate;