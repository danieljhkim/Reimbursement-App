import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import reimClient from '../../remote/reim.client';
import UserContext from '../../context/UserContext';

const LoginPage: React.FC<unknown> = (props) => {
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { setAuthenticated, setRole, setUser } = useContext(UserContext);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await reimClient.post('/login', {id, password});
    sessionStorage.setItem('user', JSON.stringify(response));
    if (response !== undefined) {
      console.log('response is:', response.data);
      setAuthenticated(true);
      setRole(response.data.user.Role); 
      if(id !== undefined) {
        setUser(id);
      }
    }
  }

  return (
    <>
    <div id="login">
      <h3>Log-In</h3>
      <br/>
      <form onSubmit={handleFormSubmit}>
          <label htmlFor="usernameInput" className="form-label col-sm-2">Username</label><br/>
          <input type="text" className="form-control-sm" onChange={handleUsernameChange}/><br/>
          <label htmlFor="passwordInput" className="form-label col-sm-2">Password</label><br/>
          <input type="password" className="form-control-sm" onChange={handlePasswordChange}/><br/><br/>
          <input type="submit" className="btn btn-primary" value="Submit"/>
      </form>
    </div>
    </>
  );
};

export default LoginPage;