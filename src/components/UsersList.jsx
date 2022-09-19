import React from "react";

const UsersList = ({ users, deleteUsers, selectUsers }) => {
  return (
    <div className="List">
      <ul>
        <h1>Users List</h1>
        <div className="listUsers">
            {users.map((user) => (
            <li className="list-users" key={user.id}>
            <div>
              <b>
                {user.first_name} {user.last_name}
              </b>
            </div>
            <div>
              <b>{user.email}</b>
            </div>
            <div>
              <b>{user.birthday}</b>
            </div>
            <button onClick={() => deleteUsers(user.id)}>Delete</button>
            <button onClick={() => selectUsers(user)}>Update</button>
            </li>
            ))}
          </div>
        
      </ul>
    </div>
  );
};

export default UsersList;
