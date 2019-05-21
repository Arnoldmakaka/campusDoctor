import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, ImageBackground, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')


export default props => (
  <View style={{paddingVertical: 10, paddingHorizontal: 20, borderBottomWidth: 0.7, borderBottomColor: "rgba(0,0,0,0.1)", flex: 9}}>
    <ScrollView style={{flex: 1}}> 
      <Text style={{ fontSize: 18, color: '#00528e' }}>{props.note}</Text>
    </ScrollView>
  </View> 
);
