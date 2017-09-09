import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';
import * as firebase from 'firebase';
import firebaseApp from './api/firebaseApp';

export default class ProfileScreen extends React.Component{
	static navigationOptions = {
		title: 'PROFILE',
	};
	const user = firebase.auth().currentUser;
	console.log(user);
	render(){
		return(
			<View>
				<Text>{user.displayName}</Text>
			</View>	
		) 
	}
}