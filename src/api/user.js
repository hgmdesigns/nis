import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Button } from 'react-native';
import * as firebase from 'firebase';
import firebaseApp from './firebaseApp';

export default class Grade extends Component {
  constructor(){
    super();
    const dbRef = firebase.database();
    const userRef = dbRef.ref('users/');
    const user = userRef.child('gMhYcAPtogPPVR4TOPyKquOfFZH2/grade');
    const userData = user.once('value', snap => {
      this.setGrade(snap.val());
    })

    Alert.alert(this.state.grade);
  }
  setGrade(snap) {
    this.setState({grade: snap})
    }
   render() {
    return (
      <Text>
      {this.state.grade}
      </Text>
      )
  }
}
