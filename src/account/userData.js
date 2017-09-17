import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';
import firebaseApp from '../api/firebaseApp';

export default class UserDataScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      grade: '',
      section: '',
    };
  }
  signUp(){
  	const user = firebase.auth().currentUser;
  	firebase.database().ref('users/' + user.uid).set({
  		name: this.state.name,
  		grade: this.state.grade,
  		section: this.state.section
  	})
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
        <ScrollView keyboardDismissMode={'interactive'}>
          <Feild
            placeholder="exp: amir, raju,etc..."
            title="Name"
            onChangeText={name => {
              this.setState({ name });
            }}
            value={this.state.name}
          />
          <Feild
            placeholder="1234536"
            title="Grade"
            onChangeText={grade => {
              this.setState({ grade });
            }}
            value={this.state.grade}
          />
          <Feild
            placeholder="A,B,C etc"
            title="Section"
            onChangeText={section => {
              this.setState({ section });
            }}
            value={this.state.section}
          />
        </ScrollView>
        <TouchableOpacity onPress={this.signUp.bind(this)}>
          <View style={styles.btn}>
            <Text style={styles.text}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

class Feild extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.title}</Text>
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.input}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#F5FAFF',
    paddingTop: 124,
  },
  input: {
    borderWidth: 1,
    borderColor: '#6D747A',
    borderRadius: 4,
    height: 44,
    padding: 8,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    color: '#0A1E30',
    paddingLeft: 16,
    marginBottom: 8,
  },
  text: {
    margin: 16,
    color: 'white',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2189C5',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
  },
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2189C5',
  },
});
