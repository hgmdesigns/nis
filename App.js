import React, { Component } from 'react';
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Button,
  KeyboardAvoidingView 
} from 'react-native';
import { TabNavigator } from 'react-navigation';


//Importing all the screens
import CalenderScreen from './src/calendar';
import ChatScreen from './src/chat.js';
import PaperScreen from './src/papers.js';
import ProfileScreen from './src/profile';
import LogInScreen from './src/account/logIn';



//Exporting the screen via react-navigatiob
export default MainScreenNavigator = TabNavigator({
  LogInScreen: { screen: LogInScreen },
  Chat: { screen: ChatScreen },
  Calendar: { screen: CalenderScreen },
  Paper: { screen: PaperScreen},
  Profile: { screen: ProfileScreen},
},);
