import { Form } from "@remix-run/react";
import { useState } from 'react';
import SignUp from './SignUp';

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log('Login successful:', data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    await handleLogin(email, password);
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
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div className="passwordTab">
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>
        <input type="submit" value="Login" />
      </Form>
      <span style={{ marginTop: '10px' }}>Don&apos;t have an account?</span>
      <button onClick={handleSignupOpen}>Sign Up</button>
      {showSignup && <SignUp onClose={handleSignupClose} />}
    </div>
  );
};

export default Login;