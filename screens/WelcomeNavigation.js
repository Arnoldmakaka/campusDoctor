import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Welcomescreen from './Welcomescreen';
import ToDashboard from './ToDashboard';
import WelcomeLogin from './WelcomeLogin';
import WelcomeVerify from './WelcomeVerify';
import Arnold from './Arnold';

class WelcomeNavigation extends Component{
  render() {
    return (
      <AppContainer />
    );
  }
}
export default WelcomeNavigation;


const AppSwitchNavigator = createSwitchNavigator({
  Makaka: {screen: Arnold},
	Welcomescreen: {screen: Welcomescreen},
  Chat: {screen: WelcomeLogin},
  Dose: {screen: WelcomeVerify},
  ToDash: {screen: ToDashboard}
});

const AppContainer = createAppContainer(AppSwitchNavigator); 

