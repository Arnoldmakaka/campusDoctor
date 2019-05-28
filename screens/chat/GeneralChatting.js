import React, {Component} from 'react';
import {YellowBox, ActivityIndicator, Alert, AsyncStorage} from 'react-native';
import firebase from 'react-native-firebase';

import {GiftedChat} from 'react-native-gifted-chat';

//react native gifted chat brings some Warnings, let's suppress them
YellowBox.ignoreWarnings(['Warning: componentWill'])

class GeneralChatting extends Component{
  state = {
    isAuthenticated: true,
    messages: [], 
    myid: ''
  };

  componentDidMount(){
    //check if Authenticated and then get the messages from db

    //firebase.auth().signInAnonymously()
      //.then(() => {
        //get messages from db
        //order them by date of creation
        firebase.database().ref('General')
          .orderByChild("createdAt")
          .on('child_added', (snap)=>{ //child_added listens to the new updates at the chats node
            let data = snap.val()

             this.setState(prev =>({
               isAuthenticated: true,
               messages: GiftedChat.append(prev.messages, data)
             }));

          });
      //});
      this._retrieveuserid()
  }

   _retrieveuserid = async () => {
      try {
        var ids = await AsyncStorage.getItem('@userid');
        var user = JSON.parse(ids)
        //alert(JSON.stringify(user))
        //alert(user.user.uid);
        this.setState({ myid: user.user.uid });
      }catch (error) {
        console.log(error)
        }
    }



  onSend(messages = []) {
    //send a new message to the db
    firebase.database().ref('/General')
      .push(messages[0]).catch((err)=>{
        Alert.alert('Internet Error', 'Please try again later')
      })
  }

  render() {

    let {isAuthenticated, myid} = this.state
     //alert("start render")
    if (!isAuthenticated){//if not Authenticated, show a spinner
      return <ActivityIndicator />
    }

    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: myid,
          //name:'Arnold',
          //avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP1675-CUSA11816_00-AV00000000000012//image?_version=00_09_000&platform=chihiro&w=720&h=720&bg_color=000000&opacity=100'
        }}

       showUserAvatar = {false}
      />
    );
  }
}

export default GeneralChatting;
