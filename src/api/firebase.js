import * as firebase from 'firebase';

//Initialize Firebase
const firebaseconfig = {
	apiKey: "AIzaSyBy11eOj1te5UBfqYmhrX6hLIsSaaE71do",
	authDomain: "hgmenis.firebaseapp.com",
	databaseURL: "https://hgmenis.firebaseio.com",
	storageBucket: "",
};

firebase.InitializeApp(firebaseconfig);

storeHighScore = (userId, score) => {
	firebase.database().ref('users/' + userId).set({
		highscore: score
	})
}

listner = userId => {
	firebase.database().ref('users/' + userId).on('value', (snapshot) => {
		const highscore = snapshot.val().highscore;
		console.log("New score: " + highscore);
		});
}