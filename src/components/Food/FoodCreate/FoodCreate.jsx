import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Container,
  ButtonGroup,
  ButtonToolbar,
} from 'reactstrap';
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
      <Container style={{ width: '33%' }}>
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
          <FormGroup>
            <Label htmlFor="mood"></Label>
            <br />
            <div style={{ textAlign: 'center' }}>
              <Button
                color="warning"
                outline
                style={{ textAlign: 'center', width: '19%' }}
                value={mood}
                onClick={(e) => setMood(e.target.value)}
              >
                <option value="Tired">{tired}</option>
              </Button>{' '}
              <Button
                color="warning"
                outline
                style={{ textAlign: 'center', width: '19%' }}
              >
                {sad}
              </Button>{' '}
              <Button
                color="warning"
                outline
                style={{ textAlign: 'center', width: '19%' }}
              >
                {neutral}
              </Button>{' '}
              <Button
                color="warning"
                outline
                style={{ textAlign: 'center', width: '19%' }}
              >
                {energized}
              </Button>{' '}
              <Button
                color="warning"
                outline
                style={{ textAlign: 'center', width: '19%' }}
              >
                {happy}
              </Button>
              {/* <Label htmlFor="mood" />
            <Input
              type="button"
              name="mood"
              value="Mood"
              onChange={(e) => setMood(e.target.value)}
            ></Input>
            <Input
              type="button"
              name="mood"
              value={happy}
              onChange={(e) => setMood(e.target.value)}
            ></Input> */}
              {/* <Input
              type="select"
              name="mood"
              placeholder="Mood"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            >
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Indifferent">Indifferent</option>
              <option value="Tired">Tired</option>
              <option value="Energized">Energized</option>
            </Input> */}
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="photo" />
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
