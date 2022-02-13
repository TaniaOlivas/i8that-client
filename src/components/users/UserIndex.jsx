import React from 'react';

import UserTable from './UserTable';

const UserIndex = (props) => {
  return (
    <div>
      <UserTable token={props.sessionToken} />
    </div>
  );
};

export default UserIndex;
