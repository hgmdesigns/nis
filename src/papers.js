import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class PaperScreen extends React.Component {
  static navigationOptions = {
    title: 'PAPERS',
  };
  render() {
    return (
      <View>
        <Text>Chat with me!</Text>
      </View>
    );
  }
}
