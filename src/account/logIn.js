import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import * as firebase from 'firebase';
import firebaseApp from '../api/firebaseApp';


export default class LogInScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      response: '',
      loading: false,
    };
    this.signUp = this.signUp.bind(this);
  }
  async signUp() {
      this.setState({
        loading: true
      })

    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      const user = firebase.auth().currentUser;
      this.onSignUpSucess(user)
    } catch (error) {
      this.onSignUpFail();
      Alert.alert('auth' + error.toString());
    }
  }

   onSignUpFail(){
    this.setState({
      response: 'Acount created failed',
      loading: false
    })
   }

   onSignUpSucess(user){
    this.setState({
      email: '',
      password: '',
      loading: false,
    });
    user.updateProfile({
        displayName: 'Karim',
        photoURL: 'https://firebase.google.com/_static/4273b0fc6c/images/firebase/lockup.png',
      }).then(() => {
        
      }).catch((error) => {
        Alert.alert(error);
      });
   }

   renderButton() {
      if(this.state.loading) {
        return <ActivityIndicator style={styles.spinner} size="large" />
      }

      return (
      <TouchableOpacity onPress={this.signUp}>
          <View style={styles.btn}>
            <Text style={styles.text}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      );
    }

  render() {
    return (
      <View style={styles.container}>
        <Feild
          placeholder="exp: me@gmail.com"
          title="Email"
          onChangeText={email => this.setState({ email })}
        />
        <Feild
          placeholder="should be more then 6 characters"
          title="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        {this.renderButton()}
      </View>
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
        />
      </View>
    );
  }
}

LogInScreen.propType = {
  title: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

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
  }
});
