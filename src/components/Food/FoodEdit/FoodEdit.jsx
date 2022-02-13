import React, { useState } from 'react';
import { FormGroup, ModalBody, Modal, Form, Input, Label, Button, ModalHeader } from 'reactstrap';

const FoodEdit = (props) => {
    const [editDate, setEditDate] = useState(props.foodToUpdate.date);
    const [editFood, setEditFood] = useState(props.foodToUpdate.food);
    const [editLocation, setEditLocation] = useState(props.foodToUpdate.location);
    const [editMood, setEditMood] = useState(props.foodToUpdate.mood);
    const [editCalories, setEditCalories] = useState(props.foodToUpdate.calories);
    const [editPhoto, setEditPhoto] = useState(props.foodToUpdate.photo);

    const foodUpdate = (event, food) => {
        event.preventDefault();
        fetch(`http:localhost:4000/log/${props.foodToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({log: {date: editDate, food: editFood, location: editLocation, mood: editMood, calories: editCalories, photo: editPhoto}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `${props.token}`
            })
        }).then((res) => {
            props.setRefreshFoodTable();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalBody>
                <Form onSubmit={foodUpdate}>
                    <FormGroup>
                        <Label htmlFor='date'>Edit Date:</Label>
                        <Input name='date' value={editDate} onChange={(e) => setEditDate(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='food'>Edit Food:</Label>
                        <Input name='food' value={editFood} onChange={(e) => setEditFood(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='location'>Edit Location:</Label>
                        <Input name='location' value={editLocation} onChange={(e) => setEditLocation(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='mood'>Edit Mood:</Label>
                        <Input name='mood' value={editMood} onChange={(e) => setEditMood(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='calories'>Edit Calories:</Label>
                        <Input name='calories' value={editCalories} onChange={(e) => setEditCalories(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='photo'>Edit Photo:</Label>
                        <Input name='photo' value={editPhoto} onChange={(e) => setEditPhoto(e.target.value)}/>
                    </FormGroup>
                    <Button type='submit'>Update the food entry</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default FoodEdit;