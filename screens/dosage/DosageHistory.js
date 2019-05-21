import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, ImageBackground, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')


export default class DosageHistory extends Component {
  constructor(){
    super()
    this.state = {
      date: '',
      tab: '',
      drug: '',
    }
  } 

  componentDidMount(){
    console.log('componentDidMount')
    AsyncStorage.getItem("@key_dosage").then((r)=>{
      var dosageData = JSON.parse(r)
      console.log('r:'+r)
     this.setState({
        date: dosageData.date,
        tab: dosageData.tab,
        drug: dosageData.drug
      })
    })
  }

  render() {
    return (
      <View style={styles.main}>
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
              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Dosage History</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={{flex: 1,}}>
          <ImageBackground source={require('../../assests/logo.png')} style={{width: '100%', height: '100%', flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.5)',}}>
              <ScrollView style={{flex: 1}}>
                
              </ScrollView>  
              <View style={{elevation: 8, position: 'absolute', alignItems: 'center', justifyContent: 'center', right: 5, bottom: 5, marginHorizontal: 10, marginVertical: 5,}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Pres')} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                  <Icon name="add" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>  
        </View>  
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  btn: {
    position: "absolute",
    bottom: 35,
    right: 30,
    backgroundColor: "#5F85F0",
    width: 60,
    height: 60,
    borderRadius: 30
  },
  btnTxt: {
    fontSize: 45,
    alignSelf: "center",
    color: "#FFF"
  },
  backArrow: {
    fontSize: 28,
    color: "#FFF"
  },
  backBtn: {
    paddingTop: 35,
    paddingLeft: 10
  }
});
