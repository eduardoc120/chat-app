import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import GetStarted from '../containers/GetStarted';
import Login from '../containers/Login';
import Signin from '../containers/Signin';
import Home from '../containers/Home';

const App = ({  user  }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={props => user ? <Home /> : <GetStarted />} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signin" component={Signin} />
    </Switch>
  </BrowserRouter>
);

const mapStateToProps = state => ({ user: state.currentUser });

export default connect(mapStateToProps, null)(App);
