import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, ImageBackground, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')

import Header from "./components/header";
import Body from "./components/body";
import AddNote from "./components/addNote";
import NoteDetail from "./components/noteDetail";

export default class DosageHistory extends Component {
  state = {
    notes: [],
    showAddNote: false,
    newNote: "",
    showNoteDetail: false,
    currentNote: "",
  };

  loadNotes = async () => {
    try {
      let storedNotes = await AsyncStorage.getItem("notes");
      if(storedNotes)
        this.setState({notes: JSON.parse(storedNotes)});
    }catch (e) {
      console.log(e)
      alert(e);
    }
  };

  componentDidMount(){
    this.loadNotes();
  }

  save() {
    let listOfNotes = this.state.notes;
    let noteToAdd = this.state.newNote;
    let numberToAdd = this.state.newdate;
    let dateToAdd = this.state.newnumber;
    listOfNotes.unshift(noteToAdd);
    listOfdates.unshift(dateToAdd);
    listOfnumbers.unshift(numberToAdd);
    this.setState({
      notes: listOfNotes,
      dates: listOfdates,
      numbers: listOfnumbers,
      showAddNote: false
    });
    AsyncStorage.setItem("notes", JSON.stringify(listOfNotes));
    AsyncStorage.setItem("numbers", JSON.stringify(listOfnumbers));
    AsyncStorage.setItem("dates", JSON.stringify(listOfdates));
  }

  render() {
    Component;
    if (this.state.showAddNote) {
      return (
          <View style={styles.main}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80, marginBottom: 10,}}>
              <View style={{height: 24,}}>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
              </View>

              <View style={{height: 56, flexDirection: 'row',}}>
                <View style={{alignItems: 'center', justifyContent: 'center',}}>
                  <TouchableOpacity onPress={() =>this.setState({showAddNote: false})}>
                    <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
                  </TouchableOpacity>
                </View>

                <View style={{alignItems:  'center', justifyContent: 'center',}}>
                  <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Prescription</Text>
                </View>
              </View>
            </LinearGradient>
            <AddNote
                onInputChange={input =>
                    this.setState({
                      newNote: input
                    })
                }
                onInputdate={input =>
                    this.setState({
                      newdate: input
                    })
                }
                onInputnumber={input =>
                    this.setState({
                      newnumber: input
                    })
                }
                onSave={() => this.save()}
            />
          </View>
      );
    }

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
                <Body
                notesList={this.state.notes}
                handleDelete={index => {
                  let listOfNotes = this.state.notes;
                  let newNotes = listOfNotes.filter((note, i) => i !== index);
                  this.setState({
                    notes: newNotes
                  }, () => AsyncStorage.setItem("notes", JSON.stringify(newNotes)));
                }}
              />
              </ScrollView>  
              <View style={{elevation: 8, position: 'absolute', alignItems: 'center', justifyContent: 'center', right: 5, bottom: 5, marginHorizontal: 10, marginVertical: 5,}}>
                <TouchableOpacity style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
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
