import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')

export default props => (
  <View style={{marginHorizontal: 10, paddingVertical: 5,}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', borderColor: '#00528e', borderRadius: 4, borderWidth: 2,}}>

      <View style={{flex: 1, paddingHorizontal: 10, paddingVertical: 5,}}>

        <View style={{flexDirection: 'row', paddingTop: 5, paddingBottom: 3, alignItems: 'center',}}>
          <TouchableOpacity style={{height: 35, width: 50, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',
          borderColor: '#00528e', borderRadius: 4, borderWidth: 1,}}>
            <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 12, paddingHorizontal: 10,}}>Del</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'row', paddingBottom: 3,}}>
          <View>
            <Text style={{ fontSize: 14, color: '#000000', fontWeight: '400',}}>Dose Name: </Text>
          </View>
          <View>  
            <Text style={{ fontSize: 14, color: '#00528e', fontStyle: 'italic', }}>{props.drug}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', paddingBottom: 3,}}>
          <View>
            <Text style={{ fontSize: 14, color: '#000000', fontWeight: '400',}}>Tablets/Injections: </Text>
          </View>
          <View>  
            <Text style={{ fontSize: 14, color: '#00528e', fontStyle: 'italic', }}>{props.tabs}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row',}}>
          <View>
            <Text style={{ fontSize: 14, color: '#000000', fontWeight: '400',}}>Reminder set on: </Text>
          </View>
          <View>  
            <Text style={{ fontSize: 14, color: '#00528e', fontStyle: 'italic', }}>{moment().format("YYYY-MM-D")} {props.date}</Text>
          </View>
        </View>

      </View>  

      
    
    </View>
  </View>
);
