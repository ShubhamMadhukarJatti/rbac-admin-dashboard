import React, { useState } from 'react';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [roleName, setRoleName] = useState("");

  const addRole = () => {
    if (roleName.trim()) {
      setRoles([...roles, { name: roleName, permissions: { read: false, write: false, delete: false } }]);
      setRoleName("");
    }
  };

  const togglePermission = (roleIndex, permission) => {
    const updatedRoles = [...roles];
    updatedRoles[roleIndex].permissions[permission] = !updatedRoles[roleIndex].permissions[permission];
    setRoles(updatedRoles);
  };

  const deleteRole = (index) => {
    setRoles(roles.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-3">
      <h2>Role Management</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter role name"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={addRole}>Add Role</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Read</th>
            <th>Write</th>
            <th>Delete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td>{role.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={role.permissions.read}
                  onChange={() => togglePermission(index, 'read')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={role.permissions.write}
                  onChange={() => togglePermission(index, 'write')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={role.permissions.delete}
                  onChange={() => togglePermission(index, 'delete')}
                />
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteRole(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
