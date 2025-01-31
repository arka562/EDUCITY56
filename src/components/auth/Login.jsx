import React from "react";

const Login = () => {
  return (
    <div className="login1">
      <h2>Welcome Back</h2>
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
      <div className="butt">
        <button className="signup">Log In</button>
        <div className="signin">
          <p>Don't have an account?</p>
          <button className="logsignup">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
