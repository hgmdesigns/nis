import React, { Component } from 'react';
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Button,
  KeyboardAvoidingView 
} from 'react-native';
import { TabNavigator, NavigationActions } from 'react-navigation';

componentWillMount(){
const resetAction = NavigationActions.reset({
       index: 0,
       actions: [
            NavigationActions.navigate({ routeName: LogInScreen}),
       ]
       });
this.props.navigation.dispatch(resetAction);
}

//Importing all the screens
import CalenderScreen from './src/calendar';
import ChatScreen from './src/chat.js';
import PaperScreen from './src/papers.js';
import ProfileScreen from './src/profile';
import LogInScreen from './src/account/logIn';



//Exporting the screen via react-navigatiob
export default MainScreenNavigator = TabNavigator({
  Chat: { screen: ChatScreen },
  Calendar: { screen: CalenderScreen },
  Paper: { screen: PaperScreen},
  Profile: { screen: ProfileScreen},
},);
