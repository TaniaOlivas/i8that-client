import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Container } from 'reactstrap';
import ImageUpload from '../ImageUpload';
import emoji from 'emoji-dictionary';

const FoodCreate = (props) => {
  const happy = emoji.getUnicode('grinning');
  const sad = emoji.getUnicode('pensive');
  const tired = emoji.getUnicode('hot');
  const energized = emoji.getUnicode('zany');
  const neutral = emoji.getUnicode('expressionless');

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
    <div style={{textAlign: 'center'}}>
      <Container style={{ width: '30%' }}>
        <h2>Log Food</h2>
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
          <FormGroup tag="fieldset" style={{ textAlign: 'center' }}>
            <FormGroup inline check>
              <Input
                type="radio"
                name="emoji"
                value="Happy"
                onChange={(e) => setMood(e.target.value)}
                style={{ margin: '0px' }}
              />
              <Label check htmlFor="mood" style={{ zoom: '3', margin: '0px' }}>
                {happy}
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Input
                type="radio"
                name="emoji"
                value="Sad"
                onChange={(e) => setMood(e.target.value)}
                style={{ margin: '0px' }}
              />
              <Label check htmlFor="mood" style={{ zoom: '3', margin: '0px' }}>
                {sad}
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Input
                type="radio"
                name="emoji"
                value="Tired"
                onChange={(e) => setMood(e.target.value)}
                style={{ margin: '0px' }}
              />
              <Label check htmlFor="mood" style={{ zoom: '3', margin: '0px' }}>
                {tired}
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Input
                type="radio"
                name="emoji"
                value="Energized"
                onChange={(e) => setMood(e.target.value)}
                style={{ margin: '0px' }}
              />
              <Label check htmlFor="mood" style={{ zoom: '3', margin: '0px' }}>
                {energized}
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Input
                type="radio"
                name="emoji"
                value="Neutral"
                onChange={(e) => setMood(e.target.value)}
                style={{ margin: '0px' }}
              />
              <Label check htmlFor="mood" style={{ zoom: '3', margin: '0px' }}>
                {neutral}
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <ImageUpload
              token={props.token}
              setPhoto={setPhoto}
              photo={photo}
            />
          </FormGroup>
          <FormGroup style={{ textAlign: 'center' }}>
            <Button type="submit">Submit</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};

export default FoodCreate;
