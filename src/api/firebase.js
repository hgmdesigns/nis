import * as firebase from 'firebase';

class Backend {
	uid = '';
	messagesRef = null;
	//Initialize Firebase
	constructor() {
	firebase.initializeApp({
		apiKey: "AIzaSyBy11eOj1te5UBfqYmhrX6hLIsSaaE71do",
	    authDomain: "hgmenis.firebaseapp.com",
	    databaseURL: "https://hgmenis.firebaseio.com",
	    projectId: "hgmenis",
	    storageBucket: "hgmenis.appspot.com",
	    messagingSenderId: "457564974792",
		});
		firebase.auth().onAuthStateChanged((user) => {
		 	if (user) {
		 		this.setUid(user.uid);
		 	} else {
		 		firebase.auth().signInAnonymously().catch((error) => {
		 			alert(error.message);
		 		});
		 	  }  
		   }); 
	     }
	     setUid(value) {
	     	this.uid = value;
	     }
	     getUid() {
	     	return this.uid;
	     }
	     // retrive the messages from the Backend
	     loadMessages(callback) {
	     	this.messagesRef = firebase.database().ref('messages');
	     	this.messagesRef.off();
	     	const onReceive = (data) => {
	     		const message = data.val();
	     		callback({
	     			_id: data.key,
	     			text: message.text,
	     			createdAt: new Date(message.createdAt),
	     			user: {
	     				_id: message.user._id,
	     				name: message.user.name,
	     			},
	     		});
	     	};
	     	this.messagesRef.limitToLast(20).on('child_added', onReceive);
	     }
	     // send the message to the Backend
	     sendMessage(message) {
	     	for (let i = 0; 1 < message.length; i++) {
	     		this.messagesRef.push({
	     			text: message[i].text,
	     			user: message[i].user,
	     			createdAt: firebase.database.ServerValue.TIMESTAMP,
	     		});
	     	}
	     }
	     // close the connection to the Backend
	     closeChat() {
	     	if (this.messagesRef) {
	     		this.messagesRef.off();
	     	}
	     }
	 }


export default new Backend();