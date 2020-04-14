import React from 'react';
import { withFirebase } from '../Firebase';
import "./style.css"


const SignOutButton = ({ firebase }) => (
  <button type="button" className ="button-clear signOut" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);
export default withFirebase(SignOutButton);