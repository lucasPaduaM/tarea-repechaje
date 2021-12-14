/* eslint-disable */
import React from "react";
import axios from 'axios';

const Perfil = () => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleNombre = (e) => {
    setName(e.target.value);
  };

  const handleContraseña = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  function sendUser() {
    const user = {
      password,
      name,
      email,
    };
    axios.post('https://repechaje-backend.herokuapp.com/users', {
      user
    });
  }

  return (
    <div>
      <h1>Perfil - Registrarse</h1>
      <form onSubmit={sendUser}>
        <input onChange={handleNombre} name="name" type="text" placeholder="Nombre" />
        <input onChange={handleContraseña} name="password" type="password" placeholder="Contraseña" />
        <input onChange={handleEmail} name="email" type="text" placeholder="Email" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Perfil;