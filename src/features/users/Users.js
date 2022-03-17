import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <ul>
        Users!
        {users.map((user, index) => (
          <div key={index}>
            <b>{user.username}</b> - {user.hometown}
          </div>
        ))}
        Total Users: {users.length}
      </ul>
    </div>
  );
}

export default Users;
