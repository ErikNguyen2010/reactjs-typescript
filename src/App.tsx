import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import HomeTemplate from './template/HomeTemplate/HomeTemplate';

function App() {
  return (
    <BrowserRouter>
      <HomeTemplate path={'/home'} component={Home}/>
      <HomeTemplate path ={'/contact'} component = {Contact}/>
      <HomeTemplate path ={'/login'} component = {Login}/>
      <HomeTemplate path ={'/'} component = {Home}/>
    </BrowserRouter>
  );
}

export default App;
