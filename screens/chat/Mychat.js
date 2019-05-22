import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ImageBackground, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import ChatViews from './components/ChatViews';

export default class Mychat extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80,}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row',}}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Dash')}>
                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
              </TouchableOpacity>
            </View>

            <View style={{alignItems:  'center', justifyContent: 'center',}}>
              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Doctors</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
          <ImageBackground source={require('../../assests/logo.png')} style={{width: '100%', height: '100%', flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.9)',}}>          
              <View style={{flex: 1, marginHorizontal: 10, alignItems: 'center', justifyContent:'center',}}>
                <View style={{flexDirection: 'row', alignItems: 'center',  marginVertical: 7, justifyContent: 'space-between',}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Gen')} style={{flex: 1, justifyContent: 'space-between', alignItems: 'center',}}>
                    <ChatViews imageUri={require('../../assests/gen.png')} label = "General Doctor"/>
                  </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center',  marginVertical: 7, justifyContent: 'space-between',}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Skin')} style={{flex: 1, justifyContent: 'space-between', alignItems: 'center',}}>
                    <ChatViews imageUri={require('../../assests/skin.png')} label = "Skin Doctor"/>
                  </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center',  marginVertical: 7, justifyContent: 'space-between',}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Sex')} style={{flex: 1, justifyContent: 'space-between', alignItems: 'center',}}>
                    <ChatViews imageUri={require('../../assests/gyn.png')} label = "Sexual Health Doctor"/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>  
          </ImageBackground>  
        </View>

      </View>   
    );
  }
}

const styles = StyleSheet.create({
  
});
