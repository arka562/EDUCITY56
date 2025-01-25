import React from "react";

const Login = () => {
  return (
    <div className="login">
      <h2>Log in to your Account</h2>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="please enter email" />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="please enter password"
        />
      </form>
    </div>
  );
};

export default Login;
