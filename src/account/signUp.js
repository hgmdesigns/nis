import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 15.5.10
// 15.5.10
// 15.5.10
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
// 0.3.1
// 0.3.1
import * as firebase from 'firebase';
// 4.3.0

export default class SignUpScreen extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBy11eOj1te5UBfqYmhrX6hLIsSaaE71do',
      authDomain: 'hgmenis.firebaseapp.com',
      databaseURL: 'https://hgmenis.firebaseio.com',
      projectId: 'hgmenis',
      storageBucket: 'hgmenis.appspot.com',
      messagingSenderId: '457564974792',
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      response: '',
    };
    this.signUp = this.signUp.bind(this);
  }
  async signUp() {
    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      this.setState({
        response: 'Account created!',
      });
    } catch(error) {
      console.log(error);
      this.setState({
        response: error.toString(), 
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Feild
          placeholder="type your email"
          title="Email"
          onChangeText={email => this.setState({ email })}
        />
        <Feild
          placeholder="type your password"
          title="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity onPress={this.signUp}>
          <View style={styles.btn}>
            <Text style={styles.text}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
        <KeyboardSpacer />
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

App.propType = {
  title: PropTypes.string.isRequired,
  password: PropTypes.string,
  email: PropTypes.string,
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
});
