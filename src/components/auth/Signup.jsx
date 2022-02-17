import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';

const Signup = (props) => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/user/register', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        birthday: birthday,
        email: email,
        password: password,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
        props.setRefreshUserTable(!props.refreshUserTable);
      });
  };

  return (
    <div>
      <Container style={{ width: '25%', marginTop: '5%' }}>
        <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="birthday">Birthday</Label>
            <Input
              onChange={(e) => setBirthday(e.target.value)}
              name="birthday"
              type="date"
              pattern="[0-9]{8}"
              value={birthday}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              value={password}
              minLength="5"
            />
          </FormGroup>
          <div style={{ textAlign: 'center' }}>
            <Button type="submit">Sign Up</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;
