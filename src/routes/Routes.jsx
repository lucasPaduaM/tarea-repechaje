import React from 'react';
import { Switch } from 'react-router-dom';
import Perfil from '../components/Perfil';
import NavBar from '../components/NavBar';
import NavRouter from './NavRouter';
import Home from '../components/Home';
import Login from '../components/Login';
import Posts from '../components/Posts';

const Routes = () => (
  <Switch>
    <NavRouter path="/">
      <NavBar />
      <Home />
    </NavRouter>
    <NavRouter path="/login">
      <Login />
    </NavRouter>
    <NavRouter path="/register">
      <Perfil />
    </NavRouter>
    <NavRouter path="/posts">
      <Posts />
    </NavRouter>
  </Switch>
);

export default Routes;
