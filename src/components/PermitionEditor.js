// src/components/PermissionEditor.jsx
import React, { useState, useEffect } from "react";
import { getPermissions, updateRole } from "../services/api";

const PermissionEditor = ({ role }) => {
  const [permissions, setPermissions] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState(role.permissions);

  useEffect(() => {
    loadPermissions();
  }, []);

  const loadPermissions = async () => {
    const response = await getPermissions();
    setPermissions(response.data);
  };

  const handlePermissionChange = (permissionId) => {
    setSelectedPermissions((prev) =>
      prev.includes(permissionId)
        ? prev.filter((id) => id !== permissionId)
        : [...prev, permissionId]
    );
  };

  const handleSave = async () => {
    await updateRole(role.id, { ...role, permissions: selectedPermissions });
    alert("Permissions updated!");
  };

  return (
    <div>
      <h3>Edit Permissions for {role.name}</h3>
      {permissions.map((perm) => (
        <label key={perm.id}>
          <input
            type="checkbox"
            checked={selectedPermissions.includes(perm.id)}
            onChange={() => handlePermissionChange(perm.id)}
          />
          {perm.name}
        </label>
      ))}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default PermissionEditor;
