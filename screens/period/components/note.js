import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, Image, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')

let shortenText = text => {
  if (text.indexOf("\n") === -1) return text;
  
  return text.split("\n")[0];
};

export default props => (
  <View style={{marginHorizontal: 10,}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12, borderColor: '#00528e', borderRadius: 4, borderWidth: 2,}}>

      <View style={{flex: 1, paddingHorizontal: 10, paddingVertical: 5,}}>

        <TouchableOpacity onPress={() => {props.handleDelete(props.position)}}style={{paddingVertical: 5, paddingHorizontal: 5, height: 30, width: 50, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',
          borderColor: '#6f82c6', borderRadius: 4, borderWidth: 1,}}>
          <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 12,}}>Delete</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 3, }} onPress={() => {props.displayNote(props.position);}}>
          <View>  
            <Text style={{ fontSize: 16, color: '#00528e', fontStyle: 'italic', }}>{shortenText(props.note)}</Text>
          </View>
        </TouchableOpacity>        

      </View>  

      
    
    </View>
  </View>
);
