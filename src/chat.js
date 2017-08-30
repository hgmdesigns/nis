import React from 'react';
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Button,
  KeyboardAvoidingView 
} from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatScreen extends React.Component{
  static navigationOptions: {
      title: 'CHATS',
      headerStyle: {
        backgroundColor: '#061B30',
      },
      headerTintColor: '#fff'
    };

  state = {
    messages: [],
  };



  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
          name: 'test'
        }}
      />
    );
  }

}
