import React from "react";
import { withAuthorization } from "../Session";
const LandingPage = () => (
  <div>
    <h1>Welcome to Less But Better</h1>
    <p>hst hthths</p>
  </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(LandingPage);