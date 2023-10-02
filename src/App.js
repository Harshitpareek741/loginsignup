import React, { useState } from "react";
import "./styles.css";
import SignInForm from "./SignIn";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignUpForm from "./SignUp";
import Home from "./Home"
import LoginPage from "./LoginPage"

export default function App() {
  
  return (

    <div className="App">
      <Router>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </Router>
   </div>
  );
}
