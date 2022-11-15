import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/sections/nav';
import './App.css';
import AppRoutes from './router/AppRoutes';
import UserContext from "./context/UserContext";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState('');
  const [role, setRole] = useState('');
  return (
    <>
      <UserContext.Provider value={{ authenticated, setAuthenticated, user, setUser, role, setRole }}>
        <Router>
          <Nav/>
          <div> user is {`${authenticated ? "" : "not"} authenticated`} </div>
          <AppRoutes/>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
