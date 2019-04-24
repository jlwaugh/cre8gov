var firebase = require("firebase");

// Initialize Firebase
var firebaseConfig = {
	apiKey: "AIzaSyDmH-qrwgmK9lKI7JlgK7KNQurcgBcwU-E",
	authDomain: "cre8gov.firebaseapp.com",
	databaseURL: "https://cre8gov.firebaseio.com",
	projectId: "cre8gov",
	storageBucket: "cre8gov.appspot.com",
	messagingSenderId: "560465654320"
};

firebase.initializeApp(firebaseConfig);