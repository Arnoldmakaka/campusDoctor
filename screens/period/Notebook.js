import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, ImageBackground, Text, View, StatusBar, KeyboardAvoidingView, Picker, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
var moment = require('moment')


import Body from "./components/body";
import AddNote from "./components/addNote";
import NoteDetail from "./components/noteDetail";


export default class Notebook extends Component {
  
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
    listOfNotes.unshift(noteToAdd);
    this.setState({
      notes: listOfNotes,
      showAddNote: false
    });
    AsyncStorage.setItem("notes", JSON.stringify(listOfNotes));
  }

  render() {
    Component;
    if (this.state.showAddNote) {
      return (
          <View style={styles.main}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80,}}>
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
                  <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Add New Note</Text>
                </View>
              </View>
            </LinearGradient>
            <AddNote
                onInputChange={input =>
                    this.setState({
                      newNote: input
                    })
                }
                onSave={() => this.save()}
            />
          </View>
      );
    }

    if (this.state.showNoteDetail) {
      return (
          <View style={styles.main}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#263c91', '#6f82c6', '#d71a3a']} style={{height: 80,}}>
              <View style={{height: 24,}}>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
              </View>
        
              <View style={{height: 56, flexDirection: 'row',}}>
                <View style={{alignItems: 'center', justifyContent: 'center',}}>
                  <TouchableOpacity onPress={() =>this.setState({showNoteDetail: false, currentNote: ""})}>
                    <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#ffffff'}} size={30} />
                  </TouchableOpacity>
                </View>
                <View style={{alignItems:  'center', justifyContent: 'center',}}>
                  <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Notebook Details</Text>
                </View>
              </View>
            </LinearGradient>
            <NoteDetail note={this.state.currentNote}/>
          </View>
      );
    }

    return (
      <View style={styles.main}>
        <ImageBackground source={require('../../assests/14.png')} style={{width: '100%', height: '100%', flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.5)'}}>
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
                  <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20 }}>Notebook</Text>
                </View>
              </View>
            </LinearGradient>

            <View style={{flex:1,}}>
              <Body
                notesList={this.state.notes}
                handleDelete={index => {
                  let listOfNotes = this.state.notes;
                  let newNotes = listOfNotes.filter((note, i) => i !== index);
                  this.setState({
                    notes: newNotes
                  }, () => AsyncStorage.setItem("notes", JSON.stringify(newNotes)));
                }}
                displayNote={index => {
                  let listOfNotes = this.state.notes;
                  this.setState({
                    currentNote: listOfNotes[index],
                    showNoteDetail: true
                  });
                }}
              />  
            </View>

            <View style={{justifyContent: 'flex-end', marginHorizontal: 10, alignItems: 'flex-end', marginVertical: 15,}}>
              <TouchableOpacity onPress={() =>this.setState({showAddNote: true})} style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#00528e', justifyContent: 'center', alignItems: 'center',}}>
                <Icon name="add" style={{paddingHorizontal: 15, paddingVertical: 15, color: '#ffffff'}} size={30} />
              </TouchableOpacity>
            </View>
          </View>  
        </ImageBackground>
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
