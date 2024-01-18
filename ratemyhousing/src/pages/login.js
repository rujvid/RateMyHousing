import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful!');
      // You can redirect or perform other actions upon successful login
    } catch (error) {
      console.error('Error during login:', error.message);
      // Handle login error, e.g., display an error message to the user
    }
  };

  return (
    <form id="form1" className="login-formCSS" onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="PASSWORD"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="submit" className="login-formCSS" onClick={/* NOW ADD FUNCTION THAT GOES TO NAVEYAS SCREEN */}>
        LOGIN
      </button>
    </form>
  );
};

export default Login;
