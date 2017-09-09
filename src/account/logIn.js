import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
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
      loading: false
    };
    this.signIn = this.signIn.bind(this);
  }
  async signIn() {
      this.setState({
        loading: true
      })

    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        onLoginSucess()
       console.log('Hurrah!');
    } catch (error) {
      return this.onLoginFail.bind(this)
    }
  }

   onLoginFail(){
    this.setState({
      response: 'Authentication Failed',
      loading: false
    })
   }

   onLoginSucess(){
    this.setState({
      email: '',
      password: '',
      loading: false
    })
   }

   renderButton() {
      if(this.state.loading) {
        return <ActivityIndicator style={styles.spinner} size="small" />
      }

      return (
      <TouchableOpacity onPress={this.signIn}>
          <View style={styles.btn}>
            <Text style={styles.text}>SIGN IN</Text>
          </View>
        </TouchableOpacity>
      );
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
