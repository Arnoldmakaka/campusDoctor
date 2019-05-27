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
      dosageData: ["first_id"],
    }
  }

  componentDidMount(){
    //console.log('componentDidMount')
    AsyncStorage.getItem("@dosagehistory").then((r)=>{
    	var dosageData = JSON.parse(r)
    	if (dosageData == null) {
          this.setState({dosageData: []})
        }
        else{
          this.setState({dosageData}) 
        }  
    	
    })
  }

  _deletedosage = (j) => {
  	var dosageData = this.state.dosageData
  	dosageData.splice(j,1)
  	this.setState({dosageData})
  	AsyncStorage.setItem('@dosagehistory', JSON.stringify(dosageData))
  }

  _dosagelist = () => {
    var dosagelist = this.state.dosageData
    return dosagelist.map((i,j) => (
    	<View key={i} style={{marginHorizontal: 10, paddingVertical: 5,}}>
    		<View style={{flexDirection: 'row', justifyContent: 'space-between', borderColor: '#00528e', borderRadius: 4, borderWidth: 2,}}>
				<View style={{flex: 1, paddingHorizontal: 10, paddingVertical: 10,}}>

			        <View style={{flexDirection: 'row', paddingTop: 3, paddingBottom: 3, alignItems: 'center',}}>
			          <TouchableOpacity onPress={()=>this._deletedosage(j)} style={{height: 30, width: 60, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',
			          borderColor: '#00528e', borderRadius: 4, borderWidth: 1,}}>
			            <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 12, paddingHorizontal: 10,}}>Delete</Text>
			          </TouchableOpacity>
			        </View>
        
			        <View style={{flexDirection: 'row', paddingBottom: 3,}}>
			          <View>
			            <Text style={{ fontSize: 14, color: '#000000', fontWeight: '400',}}>Dose Name: </Text>
			          </View>
			          <View>  
			            <Text style={{ fontSize: 14, color: '#00528e', fontStyle: 'italic', }}>{i.drug}</Text>
			          </View>
			        </View>

			        <View style={{flexDirection: 'row', paddingBottom: 3,}}>
			          <View>
			            <Text style={{ fontSize: 14, color: '#000000', fontWeight: '400',}}>Tablets/Injections: </Text>
			          </View>
			          <View>  
			            <Text style={{ fontSize: 14, color: '#00528e', fontStyle: 'italic', }}>{i.tab}</Text>
			          </View>
			        </View>

			        <View style={{flexDirection: 'row',}}>
			          <View>
			            <Text style={{ fontSize: 14, color: '#000000', fontWeight: '400',}}>Reminder set on: </Text>
			          </View>
			          <View>  
			            <Text style={{ fontSize: 14, color: '#00528e', fontStyle: 'italic', }}>{i.date}</Text>
			          </View>
			        </View>

      			</View>  
			</View>
  		</View>    
      )
    )
  }



  render() {
  	let {date, tab, drug} = this.state
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

        <View style={{flex: 1, backgroundColor: '#e9ebee'}}>
          
            <View style={{flex: 1,}}>
              <ScrollView style={{flex: 1}}>
                {this._dosagelist()}
              </ScrollView>  
              <View style={{elevation: 8, position: 'absolute', alignItems: 'center', justifyContent: 'center', right: 5, bottom: 5, marginHorizontal: 10, marginVertical: 5,}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Pres')} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                  <Icon name="add" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
                </TouchableOpacity>
              </View>
            </View>
  
        </View>  
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#e9ebee'
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
