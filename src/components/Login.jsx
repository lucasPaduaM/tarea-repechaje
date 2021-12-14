/* eslint-disable */
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleEmail = (e) => {
    setEmail(e.target.value);
}

const handlePassword = (e) => {
    setPassword(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
}

    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Mail:
                <input name="email" onChange={handleEmail} type="text" name="username" />
            </label>
            <br />
            <label>
                Contraseña:
                <input name="password" onChange={handlePassword} type="password" name="password" />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
        </div>
  );
};

export default Login;
