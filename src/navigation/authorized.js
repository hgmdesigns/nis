import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import CalenderScreen from '../calendar';
import ChatScreen from '../chat.js';
import PaperScreen from '../papers.js';
import ProfileScreen from '../profile';



//Exporting the screen via react-navigatiob
  export default MainScreenNavigator = TabNavigator({
  Chat: { screen: ChatScreen },
  Calendar: { screen: CalenderScreen },
  Paper: { screen: PaperScreen},
  Profile: { screen: ProfileScreen},
});
