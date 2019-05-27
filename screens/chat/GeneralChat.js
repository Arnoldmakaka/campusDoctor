import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {GiftedChat} from 'react-native-gifted-chat';
import firebase from 'react-native-firebase';

import GeneralChatting from './GeneralChatting';

export default class GeneralChat extends Component {
	render() {
		return (
    		<View style={{flex: 1, backgroundColor: '#e9ebee'}}>
		        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80, marginBottom: 10,}}>
		          <View style={{height: 24,}}>
		            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
		          </View>

		          <View style={{height: 56, flexDirection: 'row',}}>
		            <View style={{alignItems: 'center', justifyContent: 'center',}}>
		              <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}>
		                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
		              </TouchableOpacity>
		            </View>

		            <View style={{alignItems:  'center', justifyContent: 'center',}}>
		              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>General Doctor</Text>
		            </View>
		          </View>
		        </LinearGradient>

		        <View style={{flex: 1, backgroundColor: '#e9ebee'}}>
		        	
		        			<GeneralChatting />
		        		
		        </View>

		    </View>    
    	);
    }
}