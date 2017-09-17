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


export default class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      response: '',
      loading: false
    };
    this.signUp = this.signUp.bind(this);
  }
  async signUp() {
      this.setState({
        loading: true
      })

    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        onSignUpSucess()
    } catch (error) {
      return this.onSignUpFail.bind(this)
    }
  }

   onSignUpFail(){
    this.setState({
      response: 'Acount created failed',
      loading: false
    })
   }

   onSignUpSucess(){
    this.setState({
      email: '',
      password: '',
      loading: false
    });
   }

   renderButton() {
      if(this.state.loading) {
        return <ActivityIndicator style={styles.spinner} size="large" />
      }

      return (
      <TouchableOpacity onPress={this.signUp}>
          <View style={styles.btn}>
            <Text style={styles.text}>NEXT</Text>
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

SignUpScreen.propType = {
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
