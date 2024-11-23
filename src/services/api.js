// src/services/api.js
import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getUsers = () => axios.get(`${BASE_URL}/users`);
export const createUser = (data) => axios.post(`${BASE_URL}/users`, data);
export const updateUser = (id, data) => axios.put(`${BASE_URL}/users/${id}`, data);
export const deleteUser = (id) => axios.delete(`${BASE_URL}/users/${id}`);

export const getRoles = () => axios.get(`${BASE_URL}/roles`);
export const createRole = (data) => axios.post(`${BASE_URL}/roles`, data);
export const updateRole = (id, data) => axios.put(`${BASE_URL}/roles/${id}`, data);
export const deleteRole = (id) => axios.delete(`${BASE_URL}/roles/${id}`);

export const getPermissions = () => axios.get(`${BASE_URL}/permissions`);
