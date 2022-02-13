import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

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
    <div>
      <h1>Users:</h1>
      <Table>
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
    </div>
  );
};

export default UserTable;