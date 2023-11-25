import React from "react";
import "../styles/login.css";

function Login() {
  return (
    <div className="container">
      <div className="heading">Sign In</div>

      <form action="" className="form">
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <span className="forgot-password">Forgot Password ?</span>
        <input className="login-button" type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default Login;
