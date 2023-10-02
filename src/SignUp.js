import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function SignUpForm() {
  const history = useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
 
  async function handleOnSubmit(e) {
    e.preventDefault();
 
    try {
      const response = await axios.post("http://localhost:8000/SignUp", { // Correct endpoint URL
        email,
        password,
        name
      });

      if (response.data.status === "success") {
        history("/home", { state: { id: name } });
      } 
      else if (response.data.status === "exist") {
        alert("User already exists");
      }
    } catch (error) {
      console.error(error);
      alert("Wrong details or server error");
    }
  }

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
  <a href="#" className="social">
    <i className="fa fa-facebook" />
  </a>
  <a href="#" className="social">
    <i className="fa fa-google-plus" />
  </a>
  <a href="#" className="social">
    <i className="fa fa-linkedin" />
  </a>
</div>

        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
