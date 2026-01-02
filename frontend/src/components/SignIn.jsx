import React, { useEffect, useState } from "react";

const SignIn = () => {
  let [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", users);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border border-gray-300 p-6 rounded-lg shadow-lg"
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        id="name"
        value={users.name}
        onChange={(e) => setUsers({ ...users, name: e.target.value })}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        id="email"
        value={users.email}
        onChange={(e) => setUsers({ ...users, email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        id="password"
        value={users.password}
        onChange={(e) => setUsers({ ...users, password: e.target.value })}
      />
      <input type="submit" />
    </form>
  );
};

export default SignIn;
