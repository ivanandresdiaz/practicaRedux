/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { firebase } from '../firebase/firebaseconfig';
// import Spinner from '../components/Spinner';
import Home from '../containers/Home/Home';

import { login } from '../actions/authActions';
// import { AuthRouter } from './AuthRouter';
// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';
// import Favoritos from '../containers/favoritos/Favoritos';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
