import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import Backend from './api/firebase';


export default class Chat extends React.Component {
  static navigationOptions: {
      title: 'CHATS',
    };
  state = {
    messages: [],
    loadEarlier: true,
    isLoadingEarlier: true,
  };
  componentDidMount() {
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
        loadEarlier={true}
      />
    );
  }
}
Chat.defaultProps = {
  name: 'Hassan',
};

Chat.propTypes = {
  name: React.PropTypes.string,
};
