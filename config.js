import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCsn8p75PWUHC45HR8f9qCF_Zyg-Yw6STc",
  authDomain: "booksanta-16592.firebaseapp.com",
  databaseURL: "https://booksanta-16592.firebaseio.com",
  projectId: "booksanta-16592",
  storageBucket: "booksanta-16592.appspot.com",
  messagingSenderId: "797956831812",
  appId: "1:797956831812:web:89d7ab89ff27552c0a1a11"
  };

  firebase.initializeApp(firebaseConfig);
 export default firebase.firestore()