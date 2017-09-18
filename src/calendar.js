import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import * as firebase from 'firebase';
import firebaseApp from './api/firebaseApp';

export default class CalenderScreen extends React.Component {
  static navigationOptions = {
    title: 'CALENDER',
  };
  constructor() {
    super();
    this.state = {
      items: {},
    };
}
componentWillMount() {
  const user = firebase.auth().currentUser.uid;
  const gradeRef = firebase.database().ref(`users/${user}/grade`);
  gradeRef.on('value', grade => {
     this.grade = grade.val().toString();
   });
}
grade = '';
 loadItems() {
  const dbRef = firebase.database().ref().child(`events/${this.grade}`);
  dbRef.on('value', snap => {
        this.setState({
          items: snap.val()
        });
      });
    }
timeToString(time) {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}
rowHasChanged(r1, r2) {
  return r1.name !== r2.name;
}
renderEmptyDate() {
  return (
    <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
  );
}
renderItem(item) {
  return (
    <View style={[styles.item, { height: item.height }]}><Text>{ item.name }</Text></View>
  );
}
render() {
  return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});
