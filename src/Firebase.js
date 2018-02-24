  import * as firebase from 'firebase'
  
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDAhzRXDtaOsDCMY1BS9D3CRZzU_JXWbUA",
    authDomain: "forumtemplate.firebaseapp.com",
    databaseURL: "https://forumtemplate.firebaseio.com",
    projectId: "forumtemplate",
    storageBucket: "forumtemplate.appspot.com",
    messagingSenderId: "399466195005"
  }
  firebase.initializeApp(config)

  export const database = firebase.database().ref('users/')
  