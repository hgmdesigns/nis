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
	render(){
		const user = firebase.auth().currentUser;
		return(
			<View>
				<Text>{user.displayName}</Text>
			</View>	
		) 
	}
}