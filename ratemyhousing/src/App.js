import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <div>
        {/*<Link to="/pages/login">Go to login!</Link>*/}
        <br />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
