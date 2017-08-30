import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

export default class ProfileScreen extends React.Component{
	static navigationOptions = {
		title: 'PROFILE',
	};
	render(){
		return(
			<View>
				<Image />
				<Text>{this.state.name}</Text>
			</View>	
		) 
	}
}