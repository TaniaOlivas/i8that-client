import React, { useState, useEffect } from 'react';
import { Container, Table } from 'reactstrap';

const UserTable = (props) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch('http://localhost:4000/user/all', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        console.log(data.users);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const userMapper = () => {
    return users.map((user, index) => {
      return (
        <tr key={index}>
          <th scope="row">{user.id}</th>
          <td>{user.name}</td>
          <td>{user.birthday}</td>
          <td>{user.email}</td>
        </tr>
      );
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Container style={{ width: '50%' }}>
        <h2>Patients</h2>
        <Table hover style={{ backgroundColor: 'white', borderRadius: 20 }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Birthday</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{userMapper()}</tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserTable;
