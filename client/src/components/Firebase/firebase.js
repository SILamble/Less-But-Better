import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDC34k1fL1WeZOyzm6CSBIapBixeIly_D8",
    authDomain: "less-but-better-188af.firebaseapp.com",
    databaseURL: "https://less-but-better-188af.firebaseio.com",
    projectId: "less-but-better-188af",
    storageBucket: "less-but-better-188af.appspot.com",
    messagingSenderId: "668537763477",
    appId: "1:668537763477:web:7ae6148f0f08790099cd9c",
    measurementId: "G-WBP92LKGXG"
}

    class Firebase {
        constructor() {
          app.initializeApp(config);
          this.auth = app.auth();
        }

        doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

        doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

        doSignOut = () => this.auth.signOut();

        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
        doPasswordUpdate = password =>
          this.auth.currentUser.updatePassword(password);


      }
      export default Firebase;