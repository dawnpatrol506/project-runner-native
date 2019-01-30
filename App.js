import React from 'react';
import { Provider, Button, Portal, Dialog } from 'react-native-paper';
import { NativeRouter as Router, Route } from 'react-router-native';
import Login from './components/Login';

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <Route exact path='/' component={ Login } />
        </Router>
      </Provider>
    );
  }
}

