import React, { useState } from 'react';
import '../pages/auth.css';
import Login from './login'; // Import Login component
import Signup from './signup'; // Import Signup component
import ttaposter from '../assets/images/bluepostertheta.svg';

function Welcome() {
  const [activeTab, setActiveTab] = useState('form1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="beginning">
        <img src={ttaposter} alt='blue-theta-tau-logo'style={{ width: '80px', position: 'absolute', top: '10px', left: '10px', border: '2px solid #000', borderRadius: '8px'}}/>
        <h1>Welcome to Rate My Housing!</h1>
        <p>Brought to you by: Theta Tau</p>
        <div className="container">
            <ul className="tabs">
                <li className={activeTab === 'form1' ? 'active' : ''} onClick={() => handleTabClick('form1')}>
                Login
                </li>
                <li className={activeTab === 'form2' ? 'active' : ''} onClick={() => handleTabClick('form2')}>
                Sign up
                </li>
            </ul>
            <div className="tab-content">
                {activeTab === 'form1' && <Login />} {/* Use the Login component */}
                {activeTab === 'form2' && <Signup />} {/* Use the Signup component */}
            </div>
        </div>
    </div>

    
  );
}

export default Welcome;
