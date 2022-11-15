import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../components/pages/loginPage';
import HomePage from '../components/pages/HomePage';
import EmployPage from '../components/pages/EmployPage';

const AppRoutes: React.FC<unknown> = (props) => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route path='/employee'>
        <EmployPage />
      </Route>
    </Switch>
  );
};

export default AppRoutes;