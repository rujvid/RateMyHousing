import React, { useState } from 'react';
import '../index.css';
import Login from './login'; // Import Login component
import Signup from './signup'; // Import Signup component

function Welcome() {
  const [activeTab, setActiveTab] = useState('form1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="beginning">
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
