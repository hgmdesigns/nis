import React from 'react';
import {
	View,
	Text,
	Image,
	Alert,
	StyleSheet
} from 'react-native';
import * as firebase from 'firebase';
import firebaseApp from './api/firebaseApp';

export default class ProfileScreen extends React.Component{
	static navigationOptions = {
		title: 'PROFILE',
	};
	constructor(){
		super();
		this.state = {
			grade: ''
		}}
	render(){
		const user = firebase.auth().currentUser;
		firebase.database().ref('users/' + user.uid + '/grade').on('value', snap => {
			this.setState({grade: snap.val()})
		})
		return(
			<View style={styles.conatiner}>
				<Image style={styles.profileAvat} source={{uri: user.photoURL}} />
				<Text style={styles.boldText}>{this.state.grade}</Text>
			</View>	
		) 
	}
}

const styles = StyleSheet.create({
	conatiner: {
	   flex: 1,
	   flexDirection: 'column',
	   justifyContent: 'flex-start',
	   alignItems: 'center',
	   backgroundColor: '#F5FAFF',
	},
	profileAvat: {
		width: 106,
		height: 106,
		borderRadius: 200,
		paddingTop: 32
	},
	boldText: {
		fontWeight: 'bold',
		color: '#0A1E30',
		fontSize: 32,


	}
})