import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Ispravan import za navigaciju

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Korištenje useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();  // Sprječavanje osnovnog ponašanja forme (osvježavanje stranice)

    console.log(`Email: ${email}, Password: ${password}`);

    navigate('/dashboard');  // Prijeusmjeravanje na dashboard
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#668DC0', minHeight: '100vh' }}>
      <div style={{WebkitTextFillColor:'#0f1c30'}}>
      <h1>Student Login</h1>
      </div>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <div style={{ margin: '10px 0' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius:5, backgroundColor:'#c2c6ce'}}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px',borderRadius:5, backgroundColor:'#c2c6ce' }}
          />
        </div>
        <div style={{ margin: '20px 0' }}>
          <button type="submit" style={{ padding: '10px 20px', fontSize: '16px',  borderRadius:5, backgroundColor:'#0f1c30', WebkitTextFillColor:'#c2c6ce' }}>
            Prijava
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;