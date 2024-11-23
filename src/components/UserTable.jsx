// src/components/UserTable.jsx
import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers(); // Reload users after deletion
  };

  return (
    <div className="container">
      <h2>User Management</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.roles.join(", ")}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => alert("Edit User")}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
