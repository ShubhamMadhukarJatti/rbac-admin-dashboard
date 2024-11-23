// src/components/RoleManager.jsx
import React, { useState, useEffect } from "react";
import { getRoles, createRole } from "../services/api";

const RoleManager = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = async () => {
    const response = await getRoles();
    setRoles(response.data);
  };

  const handleAddRole = async () => {
    await createRole({ name: newRole, permissions: [] });
    setNewRole("");
    loadRoles();
  };

  return (
    <div className="container">
      <h2>Role Management</h2>
      <input
        type="text"
        placeholder="New Role"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
      />
      <button onClick={handleAddRole}>Add Role</button>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManager;
