import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    navigate('/Dashboard');
  };

  return (
    <div id="container1">
      <div id="login">
        <h2><b>LOGIN</b></h2>
      </div>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-group1">
          <label htmlFor="username">Username:</label>
          <div className='input'>
          <input type="text" id="username" name="username" value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className='input'>
          <input type="password" id="password" name="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
        </div><br />

        <div>
        <button id="buttonlogin">Login</button>
        <p className="sign">Don't have an account? <a href="/signup">SignUp</a>.</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
