import React, { useState } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import googleimage from '../assets/images/google.svg';

const Signup = () => {
  //const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const creatingAccount = async() => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
      console.error(err);
    }
  };

  const signUpWithGoogle = async() => {
    try {
      await signInWithPopup(auth, googleProvider);
    }
    catch (err) {
      console.error(err);
    }
  };
  
  return (
    <form id="form2" className="signup-formCSS">
      {/* Form 2 content here */}
      {/*<input type="name" placeholder="NAME" onChange={(e) => setName(e.target.value)}/>
      <br />
      <br />*/}
      <input type="email" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)}/>
      <br />
      <br />
      <input type="password" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)}/>
      <br />
      <br />
      <button type="submit" className="signup-formCSS" onClick={creatingAccount}>SIGN UP</button>
      <br />
      <br />
      <button onClick={signUpWithGoogle}>Sign up with Google! <img src={googleimage} className='imageGoogle'alt='google-logo'/></button>
    </form>
  );
}

export default Signup;
