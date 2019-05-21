import React, {Component} from 'react';
import {Platform, StyleSheet, Text, YellowBox, View} from 'react-native';
YellowBox.ignoreWarnings(['Warning: componentWill'])
import WelcomeNavigation from './screens/WelcomeNavigation';

export default class App extends Component {
  render() {
    return (
      <WelcomeNavigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
