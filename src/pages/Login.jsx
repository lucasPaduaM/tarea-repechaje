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

    function DoLogin() {
        const userToLogin = {
            email: email,
            password: password
        }
        axios.post('https://repechaje-backend.herokuapp.com/auth', userToLogin)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }
            )
    }


    return (
        <div>
            <h1>Login</h1>

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
            <button onClick={() => DoLogin(email, password)}>Login</button>
        </div>
    );
};

export default Login;
