import React from 'react';
import { Provider, DefaultTheme } from 'react-native-paper';
import { NativeRouter as Router, Route } from 'react-router-native';
import { View } from 'react-native';
import Login from './components/Login';
import AdminSplash from './components/AdminSplash';

const theme = {
  ...DefaultTheme,
}

export default class App extends React.Component {
  render() {
    return (
      <Provider theme={theme}>
        <Router>
          <View style={{width: '100%', height: '100%'}}>
            <Route exact path='/' component={Login} />
            <Route exact path="/admin" component={AdminSplash} />
          </View>
        </Router>
      </Provider>
    );
  }
}

