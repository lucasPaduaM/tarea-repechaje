import React from 'react';
import { Switch } from 'react-router-dom';
import Perfil from '../pages/Perfil';
import NavRouter from './NavRouter';
import App from '../App';
import Login from '../pages/Login';
import Posts from '../pages/Posts';

const Routes = () => (
  <Switch>
    <NavRouter path="/login">
      <Login />
    </NavRouter>
    <NavRouter path="/register">
      <Perfil />
    </NavRouter>
    <NavRouter path="/posts">
      <Posts />
    </NavRouter>
    <NavRouter path="/">
      <App />
    </NavRouter>
  </Switch>
);

export default Routes;
