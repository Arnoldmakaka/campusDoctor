import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Welcomescreen from './Welcomescreen';
import WelcomeLogin from './WelcomeLogin';
import WelcomeVerify from './WelcomeVerify';
import Dashboard from './Dashboard';
import Mychat from './chat/Mychat';
import DosageHistory from './dosage/DosageHistory';
import Prescription from './dosage/Prescription';
import PeriodScreen from './period/PeriodScreen';
import EditPeriod from './period/EditPeriod';
import Profile from './period/Profile';
import Notebook from './period/Notebook';

class WelcomeNavigation extends Component{
  render() {
    return (
      <AppContainer />
    );
  }
}
export default WelcomeNavigation;

const AppBottomNavigator = createMaterialBottomTabNavigator({  
  Calendar: { screen: PeriodScreen,
              navigationOptions:{   
                tabBarIcon: ({ tintColor }) => (  
                  <View>  
                    <Icon style={[{color: tintColor}]} size={30} name={'calendar'}/>  
                  </View>),  
                  
              }   
        },  
  Notebook: { screen: Notebook,  
              navigationOptions:{   
                tabBarIcon: ({ tintColor }) => (  
                  <View>  
                    <Icon style={[{color: tintColor}]} size={30} name={'book'}/>  
                  </View>),  
                  
              }  
            },   
    },  
    {  
      sifting: true,
      initialRouteName: "Calendar",  
      activeColor: '#f0edf6',  
      inactiveColor: '#f0edf6', 
      labeled: true, 
      barStyle: { backgroundColor: '#00528e' },  
    },  
);

const AppSwitchNavigator = createSwitchNavigator({
	Welcome: {screen: Welcomescreen},
	Login: {screen: WelcomeLogin},
	Verify: {screen: WelcomeVerify},
	Dash: {screen: Dashboard},
	Chat: {screen: Mychat},
	Dose: {screen: DosageHistory},
  Pres: {screen: Prescription},
	BottomNavigator: {screen: AppBottomNavigator},
	Period: {screen: PeriodScreen},
	Edit: {screen: EditPeriod},
	Note: {screen: Notebook},
	PreProfile: {screen: Profile}
});

const AppContainer = createAppContainer(AppSwitchNavigator); 

