import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Pages/Login/login";
import Home from './Pages/Home/Home';
import { useState } from 'react';

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Login/>} />
        <Route path={"/Home"} element={<Home/>}/>
      </Routes>
    </Router>
  );
}