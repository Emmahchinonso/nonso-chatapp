import React from "react";
import "./UsersOnline.css";

const UsersOnline = ({users}) => {
  return (
    <section className="users-section">
      <h2>All users</h2>
      <ul className="users-list">
        {users.map((user, index) => <li key={index}>{user.name}</li>)}
      </ul>
    </section>
  )
};

export default UsersOnline;