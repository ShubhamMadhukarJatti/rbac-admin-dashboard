import React, { useState } from "react";
import "./RBAC.css";

const RBAC = () => {
    const [activeTab, setActiveTab] = useState("users");

    return (
        <div>
            <h1>RBAC Dashboard</h1>
            <div className="tabs">
                <button onClick={() => setActiveTab("users")} className={activeTab === "users" ? "active" : ""}>
                    User Management
                </button>
                <button onClick={() => setActiveTab("roles")} className={activeTab === "roles" ? "active" : ""}>
                    Role Management
                </button>
            </div>

            {activeTab === "users" && <UserManagement />}
            {activeTab === "roles" && <RoleManagement />}
        </div>
    );
};

export default RBAC;
