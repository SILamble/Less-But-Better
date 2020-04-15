import React from "react";
import { withAuthorization } from "../Session";
const Home = () => (
  <div className="container">
    <h1>Welcome to Less But Better</h1>
    <p>Where we welcome you to break down tasks into smaller but better chunks.</p>
  </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Home);