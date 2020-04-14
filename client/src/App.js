import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Current from "./components/pages/Current";
import Completed from "./components/pages/Completed";
import Navigation from "./components/Navigation"
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import AccountPage from './components/Account';
import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';

const App = () => (
      <Router>
      <div>
      <Navigation/>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.CURRENT} component={Current} />
      <Route path={ROUTES.COMPLETED} component={Completed} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      </div>
    </Router>
  );

 export default withAuthentication(App);