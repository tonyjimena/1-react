import React from "react";
import Hello from "./Hello";
import Posts from "./Posts";
import { Jumbotron, Button } from "react-bootstrap";
// import { AllPosts } from '../api/api'

export default function Primer() {
  const helloName = ["paco", "jesus", "martin"];
  return (
    <div className="page">
      <div className="container">
        <div></div>
        <br />
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Posts />
        <h1>Primer</h1>
        <Hello names={helloName} />
      </div>
    </div>
  );
}
