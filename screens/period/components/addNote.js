import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, Text, View, ImageBackground, StatusBar, Image, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')

export default props => {
  state = {
    date: new Date()
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <ImageBackground source={require('../../../assests/14.png')} style={{width: '100%', height: '100%', flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.5)'}}>
          <ScrollView>
            <KeyboardAvoidingView style={{flex: 1, marginHorizontal: 10,}} behavior="padding" enabled>
              <View style={{flex: 1}}>
                <TextInput underlineColorAndroid="transparent" placeholder="My note" onChangeText={props.onInputChange} style={{textAlign: 'left', fontSize: 16, color: '#00528e', height: 40, borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
                
              </View>
              
              <View style={{justifyContent: 'center', alignItems: 'flex-end', marginVertical: 25,}}>
                <TouchableOpacity onPress={props.onSave} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                  <Icon name="checkmark" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
                </TouchableOpacity>
              </View> 
            </KeyboardAvoidingView>  
          </ScrollView>
        </View>  
      </ImageBackground>  
    </View>
  );
};
