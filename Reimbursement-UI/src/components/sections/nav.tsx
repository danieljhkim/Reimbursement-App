import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import reimClient from '../../remote/reim.client';
import UserContext from '../../context/UserContext';

const Nav: React.FC<unknown> = (props) => {

  const {setAuthenticated, setUser, setRole, authenticated } = useContext(UserContext);

  const handleLogout = async () => {
      const response = await reimClient.get('/logout');
      sessionStorage.clear();
      setAuthenticated(false);
      setUser('');
      setRole('');
      console.log(response.data);
      }
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top" id='myNav'>
      <div id="nav" className="container-fluid">
        <NavLink className="navbar-brand" to="/">Reimbursement</NavLink>
          <ul className="navbar-nav s-auto">
          {!authenticated &&
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
            </>
          }
            {authenticated &&
              <> 
                <li className="nav-item">
                  <NavLink className="nav-link" to="/employee">Work-Page</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" onClick={handleLogout} to="/login">Log-out</NavLink>
                </li>
              </>
            }

          </ul>
        </div>
    </nav>
  )
}

export default Nav;
