import React, { Component } from 'react';
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';
import firebaseApp from './src/api/firebaseApp';
import LogInScreen from './src/account/logIn';
import MainScreenNavigator from './src/navigation/authorized';



export default class App extends Component {
	constructor() {
	super();
	this.state = {
		loggedIn: null,
	}

}
componentWillMount() {
	firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		this.setState({
			loggedIn: true
		})
	}
	else {
		this.setState({
			loggedIn: false
		})
	}})
}

renderContent(){
	switch (this.state.loggedIn) {
		case true:
			return <MainScreenNavigator />
		case false:
			return <LogInScreen />
		default:
			return <Text>11</Text>
	}
}
	render(){
		return this.renderContent()
}

}


