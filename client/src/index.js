import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Firebase, { FirebaseContext } from './components/Firebase';

//provide firebase authorisation context to all child components of App
ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById("root"));
registerServiceWorker();
