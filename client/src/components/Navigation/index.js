import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import { AuthUserContext } from "../Session";
import * as ROUTES from "../../constants/routes";
import "./style.css"

const Navigation = ({ authUser }) => (
  <div>    <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer></div>
);

//navigation options if user signed in
const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.CURRENT}>Current</Link>
    </li>
    <li>
      <Link to={ROUTES.COMPLETED}>Completed</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

//navigation options of user not signed in
const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;