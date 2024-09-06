import { Form } from "@remix-run/react";
import { useState } from 'react';
import SignUp from './SignUp';
import Portal from './Portal';
import { createContainer } from './Portal';

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleSignupOpen = () => {
    setShowSignup(true);
  };

  const handleSignupClose = () => {
    setShowSignup(false);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <div className="emailTab">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="passwordTab">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <input type="submit" value="Login" />
      </Form>
      <span>Don&apos;t have an account? <button onClick={handleSignupOpen}>Sign Up</button></span>
      {showSignup && <SignUp />}


    </div>
  );
};

export default Login;