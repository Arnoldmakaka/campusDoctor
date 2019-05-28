import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Welcomescreen from './Welcomescreen';
import ToDashboard from './ToDashboard';

class WelcomeNavigation extends Component{
  render() {
    return (
      <AppContainer />
    );
  }
}
export default WelcomeNavigation;


const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: Welcomescreen},
  ToDash: {screen: ToDashboard}
});

const AppContainer = createAppContainer(AppSwitchNavigator); 

