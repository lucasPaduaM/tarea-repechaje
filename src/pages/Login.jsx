import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
