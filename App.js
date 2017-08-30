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
import ProfileScreen from './src/profile'

import * as firebase from 'firebase';

//Initialize Firebase
const firebaseconfig = {
  apiKey: "AIzaSyBy11eOj1te5UBfqYmhrX6hLIsSaaE71do",
  authDomain: "hgmenis.firebaseapp.com",
  databaseURL: "https://hgmenis.firebaseio.com",
  storageBucket: "",
};

firebase.InitializeApp(firebaseconfig);

storeHighScore = (userId, score) => {
  firebase.database().ref('users/' + userId).set({
    highscore: score
  })
}

listner = userId => {
  firebase.database().ref('users/' + userId).on('value', (snapshot) => {
    const highscore = snapshot.val().highscore;
    console.log("New score: " + highscore);
    });
}


//Exporting the screen via react-navigatiob
export default MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: CalenderScreen },
  Paper: { screen: PaperScreen},
  Profile: { screen: ProfileScreen},
},);
