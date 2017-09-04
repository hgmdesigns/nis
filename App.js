import React from 'react';
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Button,
  KeyboardAvoidingView 
} from 'react-native';
import { TabNavigator, TabView } from 'react-navigation';

//Importing all the screens
import CalenderScreen from './src/calendar';
import ChatScreen from './src/chat.js';
import PaperScreen from './src/papers.js';
import ProfileScreen from './src/profile';
import LogInScreen from './src/account/login';



//Exporting the screen via react-navigatiob
export default MainScreenNavigator = TabNavigator({
  LogIn: { screen: LogInScreen },
  Chat: { screen: ChatScreen },
  Calendar: { screen: CalenderScreen },
  Paper: { screen: PaperScreen},
  Profile: { screen: ProfileScreen},
},);
