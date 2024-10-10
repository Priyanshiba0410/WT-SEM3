import React,{useState} from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import './App.css';

const Loginandsingup = () => {
    const [activeTab, setActiveTab] = useState('login');
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    }
  return (
    <div className="app-container">
      <div className="tabs">
        <div className={`tab ${activeTab === 'login' && 'active'}`} onClick={() => handleTabChange('login')}>
          Sign In
        </div>
        <div className={`tab ${activeTab === 'signup' && 'active'}`} onClick={() => handleTabChange('signup')}>
          Sign Up
        </div>
      </div>
      <div className="form-container">
        {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}

export default Loginandsingup;