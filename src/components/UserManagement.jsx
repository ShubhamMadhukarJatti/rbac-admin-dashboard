import React, { useState, useEffect } from 'react';

// Sample data to simulate users
const initialUsers = [
  { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', role: 'User', status: 'Inactive' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ name: '', role: '', status: '' });

  // Function to handle adding new user
  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: '', role: '', status: '' });
  };

  // Function to handle deleting user
  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <div className="add-user">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <select
          value={newUser.status}
          onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleAddUser}>Add User</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
