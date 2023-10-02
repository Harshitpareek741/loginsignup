import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignInForm() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/SignIn", {
        email,
        password,
      });

      if (response.data.status === "exist") {
        navigation("/home", { state: { id: email } });
      } else if (response.data.status === "notexist") {
        console.log("error");
      }
    } catch (error) {
      console.log("errror");
    }
  }

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
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

        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
