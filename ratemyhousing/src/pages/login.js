import React from 'react';

const Login = () => {
  return (
    <form id="form1" className="login-formCSS">
      {/* Form 1 content here */}
      <input type="email" placeholder="EMAIL" />
      <br />
      <br />
      <input type="password" placeholder="PASSWORD" />
      <br />
      <br />
      <button type="submit" className="login-formCSS">LOGIN</button>
    </form>
  );
}

export default Login;
