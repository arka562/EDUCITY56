import React from "react";

const Register = () => {
  return (
    <div className="input">
      <div className="header">
        <h2>Register Now</h2>
      </div>
      <form action="" className="in">
        <label htmlFor="name"> First Name</label>
        <input type="text" id="name" placeholder="please enter first name" />
        <br />
        <label htmlFor="name"> Last Name</label>
        <input type="text" id="name2" placeholder="please enter last name" />
        <br />
        <label htmlFor="email">Email I'd</label>
        <input type="email" id="email" placeholder="please enter email" />
        <br />
        <label htmlFor="phno">Contact No</label>
        <input
          type="phno"
          id="contact"
          placeholder="please enter phone number"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" id="Password" placeholder="please enter password" />
        <br />
        <label htmlFor="password"> Confirm Password</label>
        <input
          type="text"
          id="Password 2 "
          placeholder="please reenter password"
        />
        <br />
      </form>
      <div className="butt">
        <button className="signup">SignUp</button>
        <div className="signin">
          <p>Already have an Account?</p>
          <button>SignIn</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
