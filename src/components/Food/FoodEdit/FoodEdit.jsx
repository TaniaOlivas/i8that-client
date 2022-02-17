import React, { useState } from 'react';
import {
  FormGroup,
  ModalBody,
  Modal,
  Form,
  Input,
  Label,
  Button,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  Container,
} from 'reactstrap';
import emoji from 'emoji-dictionary';
import ImageUpload from '../ImageUpload';

const FoodEdit = (props) => {
  const happy = emoji.getUnicode('grinning');
  const sad = emoji.getUnicode('pensive');
  const tired = emoji.getUnicode('hot');
  const energized = emoji.getUnicode('zany');
  const neutral = emoji.getUnicode('expressionless');

  const [editDate, setEditDate] = useState(props.foodToUpdate.date);
  const [editFood, setEditFood] = useState(props.foodToUpdate.food);
  const [editLocation, setEditLocation] = useState(props.foodToUpdate.location);
  const [editMood, setEditMood] = useState(props.foodToUpdate.mood);
  const [editCalories, setEditCalories] = useState(props.foodToUpdate.calories);
  const [editPhoto, setEditPhoto] = useState(props.foodToUpdate.photo);
  const [photo, setPhoto] = useState([]);

  const foodUpdate = (event, foodEntry) => {
    event.preventDefault();
    fetch(`http://localhost:4000/foodlog/${props.foodToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        date: editDate,
        food: editFood,
        location: editLocation,
        mood: editMood,
        calories: editCalories,
        photo: editPhoto,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchFood();
      props.updateOff();
    });
  };

  return (
    <Modal isOpen={true}>
      <Container>
        <ModalHeader closeButton>
          <h2 style={{ textAlign: 'center' }}>Log your food</h2>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={foodUpdate}>
            <FormGroup>
              <Label htmlFor="date">Edit Date:</Label>
              <Input
                name="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="food">Edit Food:</Label>
              <Input
                name="food"
                value={editFood}
                onChange={(e) => setEditFood(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="location">Edit Location:</Label>
              <Input
                name="location"
                value={editLocation}
                onChange={(e) => setEditLocation(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="calories">Edit Calories:</Label>
              <Input
                name="calories"
                value={editCalories}
                onChange={(e) => setEditCalories(e.target.value)}
              />
            </FormGroup>
            <FormGroup tag="fieldset" style={{ textAlign: 'center' }}>
              <FormGroup inline check>
                <Input
                  type="radio"
                  name="emoji"
                  value="Happy"
                  onChange={(e) => setEditMood(e.target.value)}
                  style={{ margin: '0px' }}
                />
                <Label
                  check
                  htmlFor="mood"
                  style={{ zoom: '2', margin: '0px' }}
                >
                  {happy}
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="radio"
                  name="emoji"
                  value="Sad"
                  onChange={(e) => setEditMood(e.target.value)}
                  style={{ margin: '0px' }}
                />
                <Label
                  check
                  htmlFor="mood"
                  style={{ zoom: '2', margin: '0px' }}
                >
                  {sad}
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="radio"
                  name="emoji"
                  value="Tired"
                  onChange={(e) => setEditMood(e.target.value)}
                  style={{ margin: '0px' }}
                />
                <Label
                  check
                  htmlFor="mood"
                  style={{ zoom: '2', margin: '0px' }}
                >
                  {tired}
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="radio"
                  name="emoji"
                  value="Energized"
                  onChange={(e) => setEditMood(e.target.value)}
                  style={{ margin: '0px' }}
                />
                <Label
                  check
                  htmlFor="mood"
                  style={{ zoom: '2', margin: '0px' }}
                >
                  {energized}
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="radio"
                  name="emoji"
                  value="Neutral"
                  onChange={(e) => setEditMood(e.target.value)}
                  style={{ margin: '0px' }}
                />
                <Label
                  check
                  htmlFor="mood"
                  style={{ zoom: '2', margin: '0px' }}
                >
                  {neutral}
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <ImageUpload
                token={props.token}
                setPhoto={setPhoto}
                setEditPhoto={setEditPhoto}
              />
              {/* <Label htmlFor="photo">Edit Photo:</Label>
              <Input
                name="photo"
                value={editPhoto}
                onChange={(e) => setEditPhoto(e.target.value)}
              /> */}
            </FormGroup>
            <ModalFooter>
              <Container style={{ textAlign: 'center' }}>
                <Button type="submit">Update food entry</Button>
                <br />
                <br />
                <Button>Close</Button>
              </Container>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Container>
    </Modal>
  );
};

export default FoodEdit;
