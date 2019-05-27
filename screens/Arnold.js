import React, {Component} from 'react';
import {Platform, ImageBackground, Button, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';

import ToDashboard from './ToDashboard';

export default class Arnold extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+256',
      confirmResult: null,

      sex: 'Male',
      college: 'Mak',
      name: '',
      email: '',
    };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+256',
          confirmResult: null,
        });
      }
    });

    SplashScreen.hide();
  }

  componentWillUnmount() {
     if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    const {sex, college, name, email, phoneNumber} = this.state
    this.setState({ message: 'Sending code ...' });

    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then((confirmResult) => { 
        this.setState({ confirmResult, message: 'Code has been sent!' })
        firebase.database().ref('UserList').push({
          Sex: sex,
          Email: email,
          College: college,
          Name: name,
          PhoneNumber: phoneNumber
        })
      //alert(confirmResult)
      this.onVerify()
      })
    .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
  };

  onVerify = async () => {
    const {name} = this.state
    var loginData = {
      name: this.state.name
    }
    try {
      await AsyncStorage.setItem('@key_login', JSON.stringify(loginData));
        console.log("success")
      }catch (error) {
        Alert.alert("Network Error", "Please try again later")
      }
  }


  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          this.setState({ message: 'Code Confirmed!' });
          this.props.navigation.navigate('ToDash')
        })
        .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  }

  //To input phone number for verification
  renderPhoneNumberInput() {
   const { phoneNumber } = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#e9ebee'}}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80, marginBottom: 10,}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row',}}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')}>
                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
              </TouchableOpacity>
            </View>

            <View style={{alignItems:  'center', justifyContent: 'center',}}>
              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Enter Login Details</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={{flex: 1, backgroundColor: '#e9ebee'}}>
          <ScrollView>
            <KeyboardAvoidingView style={{flex: 1, paddingHorizontal: 10}} behavior="padding" enabled>
              <View>
                <TextInput autoFocus onChangeText={(name)=>this.setState({name})} placeholder="Your full name" style={{textAlign: 'left', color: '#00528e', height: 40, borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
                <TextInput onChangeText={(email)=>this.setState({email})} placeholder="Your email" style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
                <Picker selectedValue={this.state.sex} style={{height: 50, width: 300, color: '#00528e',}} onValueChange={(itemValue, itemIndex) => this.setState({sex: itemValue}) }>
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>

                <Picker selectedValue={this.state.college} style={{height: 50, width: 300, color: '#00528e',}} onValueChange={(itemValue, itemIndex) => this.setState({college: itemValue}) }>
                  <Picker.Item label="Makerere University" value="MAK" />
                  <Picker.Item label="Kyambogo University" value="KYU" />
                  <Picker.Item label="Uganda Christian University" value="UCU" />
                  <Picker.Item label="Mbarara University" value="MUST" />
                  <Picker.Item label="Islamic University" value="IU" />
                  <Picker.Item label="Ndejje University" value="Ndejje" />
                  <Picker.Item label="Kampala International University" value="KIU" />
                </Picker>  

                <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'normal', fontWeight: '400', color: '#00528e', paddingVertical: 10,}} >Enter Phone Number for Verification</Text>

                <TextInput value={phoneNumber} onChangeText={value => this.setState({ phoneNumber: value })} placeholder="Your mobile number" style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>

              </View>  

              <View style={{justifyContent: 'center', alignItems: 'flex-end', marginVertical: 15,}}>
                <TouchableOpacity onPress={this.signIn} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                  <Icon name="arrow-forward" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
                </TouchableOpacity>
              </View> 
            </KeyboardAvoidingView>
          </ScrollView>  
        </View>

        <View>
        
      </View>
      
      </View>

    );
  }














  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    return (
      <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
    );
  }



  //To input verification message
  renderVerificationCodeInput() {
    const { codeInput } = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#e9ebee'}}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80, marginBottom: 10,}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row',}}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
              </TouchableOpacity>
            </View>

            <View style={{alignItems:  'center', justifyContent: 'center',}}>
              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Enter Code for Verification</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={{flex: 1, backgroundColor: '#e9ebee'}}>
          <ScrollView>
            <KeyboardAvoidingView style={{flex: 1, paddingHorizontal: 10}} behavior="padding" enabled>
              <View style={{marginVertical: 15,}}>
                <Text style={{textAlign: 'center', fontSize: 13, fontStyle: 'italic', color: '#00528e',}}>A code has been sent to your mobile number for verification.</Text>
                <TextInput autoFocus value={codeInput} onChangeText={value => this.setState({ codeInput: value })} placeholder="Enter verification code" style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'flex-end', marginVertical: 15,}}>
                <TouchableOpacity onPress={this.confirmCode} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                  <Icon name="arrow-forward" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>    
        </View>
       
      </View>
    );
  }

  render() {
    const { user, confirmResult } = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#e9ebee'}}>

        {!user && !confirmResult && this.renderPhoneNumberInput()}

        {!user && confirmResult && this.renderVerificationCodeInput()}

        {user && (
          <ToDashboard />
        )}
      </View>
    );
  }
}