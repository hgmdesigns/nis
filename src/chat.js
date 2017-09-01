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
import Backend from './api/firebase';

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
  componentWillMount() {

  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          name: this.props.name,
        }}
      />
    );
  }
  ComponentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
          };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}


  ChatScreen.defaultProps = {
    name: "Hassan",
  };

