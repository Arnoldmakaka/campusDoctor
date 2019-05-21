import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, Alert, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')


export default class Prescription extends Component {
  constructor(){
    super()
    this.state = {
      date: new Date(),
      tab: '',
      drug: '',
    }
  }

  _doasageData = async () => {
    const {tab, date, drug} = this.state
    if (this.state.tab != '' && this.state.drug != ''){
      var dosageData = {
        tab: this.state.tab,
        date: this.state.date,
        drug: this.state.drug
      }
      try {
        await AsyncStorage.setItem('@key_dosage', JSON.stringify(dosageData));
          this.props.navigation.navigate('Dose')
          alert(JSON.stringify(this.state.tab))
          //alert(typeof(this.state.perioddate))
        }catch (error) {
        //alert("failed")
        }
    } 
    else{Alert.alert('Missing Fields', 'Please fill in all the required fields');}
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
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Dose')}>
                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
              </TouchableOpacity>
            </View>

            <View style={{alignItems:  'center', justifyContent: 'center',}}>
              <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>New Prescriptions</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={{flex: 1,}}>
          <ScrollView style={{flex: 1}}>
            <KeyboardAvoidingView style={{flex: 1, marginHorizontal: 10,}} behavior="padding" enabled>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16, fontStyle: 'normal', color: '#00528e', paddingVertical: 5, fontWeight: '700',}}>Drug Details</Text>
                <TextInput onChangeText={(drug)=>this.setState({drug})} placeholder="Name of drug" style={{textAlign: 'left', color: '#00528e', height: 40, borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
                <TextInput onChangeText={(tab)=>this.setState({tab})} placeholder="Number of tablets/Injections" style={{textAlign: 'left', height: 40, color: '#00528e', borderBottomColor: '#00528e', borderBottomWidth: 2, marginVertical: 7}}/>
                <Text style={{fontSize: 16, fontStyle: 'normal', color: '#00528e', paddingVertical: 5, fontWeight: '700',}}>Time Details</Text>
                <Text style={{fontSize: 12, fontStyle: 'normal', color: '#00528e', paddingBottom: 5, fontWeight: '700',}}>Tap the date box to set reminder</Text>
                <DatePicker
                  style={{width: 300, marginVertical: 10,}}
                  date={this.state.date}
                  mode="time"
                  placeholder="select date"
                  format="YYYY-MM-DD / h:mm:ss a"
                  minDate= {new Date().toDateString()}
                  maxDate= {moment().add(1, 'days').calendar()}
                  hideText={false} 
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                    dateText: {
                      color: '#00528e',
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {this.setState({date: date})}}
                />
              </View>
              
              <View style={{justifyContent: 'center', alignItems: 'flex-end', marginVertical: 25,}}>
                <TouchableOpacity onPress={()=>this._doasageData()} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                  <Icon name="checkmark" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
                </TouchableOpacity>
              </View> 
            </KeyboardAvoidingView>  
          </ScrollView>
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1
  },
});
