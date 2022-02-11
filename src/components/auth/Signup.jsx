import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = (props) => {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/user/register', {
            method: 'POST',
            body: JSON.stringify({name: name, birthday: birthday, email: email, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='name'>Name</Label>
                    <Input onChange={(e) => setName(e.target.value)}
                    name='name' value={name} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='birthday'>Birthday</Label>
                    <Input onChange={(e) => setBirthday(e.target.value)}
                name='birthday' type='date' pattern='[0-9]{8}' value={birthday} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'>Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)}
                    name='email' value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)}
                    name='password' type='password' value={password} />
                </FormGroup>
                <Button type='submit'>Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup;