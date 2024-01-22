import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import AdminHome from './components/AdminHome';




function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<SignIn/>}/>
    <Route path='/adminhome' element={<AdminHome/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
