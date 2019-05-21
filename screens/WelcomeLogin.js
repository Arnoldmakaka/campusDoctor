import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Alert, View, StatusBar, AsyncStorage, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase'

export default class WelcomeLogin extends Component {
  constructor(props) {
    super(props);
  }

  state ={
    sex: 'Male',
    college: 'Mak',
    name: '',
    email: '',
    pno: '',
    confirmResult: '',
  }

  _loginData = () => {
    const {sex, college, name, email, pno} = this.state
      //if (this.state.email != '' && this.state.pno != '' && this.state.name != ''){
        //firebase.auth().signInWithPhoneNumber(pno)
        //.then((confirmResult) => {
              //this.setState({ confirmResult });
              //this.gaiish()
              this.props.navigation.navigate('Verify')
          // }).catch((error) => {
            //const { code, message } = error;
            //Alert.alert('Error Occured', 'Please try again later')
            // For details of error codes, see the docs
            // The message contains the default Firebase string
            // representation of the error
          //});  
    //}
    //else{
      //Alert.alert('Missing Fields', 'Please fill in all the required fields');
    //}
  }
  
  gaiish = async () => {
    var loginData = {
      confirmResult: this.state.confirmResult
    }
    try {
      await AsyncStorage.setItem('@key_login', JSON.stringify(loginData));
        firebase.database().ref('UserList').push({
          Sex: sex,
          Email: email,
          College: college,
          Name: name,
          PhoneNumber: pno
        })
        alert("Data saved")
      }catch (error) {
        alert("failed")
      }
  }

  render() {
    let {sex, college} = this.state
    return (
      <View style={styles.container}>
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

        <View style={{flex: 1,}}>
          <ScrollView>
            <KeyboardAvoidingView style={{flex: 1, paddingHorizontal: 10}} behavior="padding" enabled>
              <View>
                <TextInput onChangeText={(name)=>this.setState({name})} placeholder="Your full name" style={{textAlign: 'left', color: '#00528e', height: 40, borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
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

                <TextInput onChangeText={(pno)=>this.setState({pno})} placeholder="Your mobile number" style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
              </View>  

              <View style={{justifyContent: 'center', alignItems: 'flex-end', marginVertical: 15,}}>
                <TouchableOpacity onPress={()=>this._loginData()} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
