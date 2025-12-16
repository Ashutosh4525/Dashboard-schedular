"use client";

import axios from "axios";

export default function CreateUser() {
  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;

    await axios.post("/api/admin/create-user", {
      username: form.username.value,
      password: form.password.value,
      role: form.role.value,
    });

    alert("User created");
  };

  return (
    <form onSubmit={submit} className="space-y-4 max-w-md">
      <input name="username" placeholder="Username" className="w-full p-2" />
      <input name="password" placeholder="Password" className="w-full p-2" />
      <select name="role" className="w-full p-2">
        <option value="parent">Parent</option>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>
      <button className="bg-green-600 p-2 w-full">Create</button>
    </form>
  );
}
