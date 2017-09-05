import React from 'react';
import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBy11eOj1te5UBfqYmhrX6hLIsSaaE71do",
    authDomain: "hgmenis.firebaseapp.com",
    databaseURL: "https://hgmenis.firebaseio.com",
    projectId: "hgmenis",
    storageBucket: "hgmenis.appspot.com",
    messagingSenderId: "457564974792",
};

export const firebaseApp = firebase.initializeApp(config);