import React, { Component } from 'react';
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Button,
  KeyboardAvoidingView 
} from 'react-native';
import { Tabs } from './src/navigation/routes';


export default class App extends Component {
  render(){
    return <Tabs />
  }
}
