import React from "react";
import { Button } from "react-bootstrap";
import logo from "../logo.svg";

//Hola que ase loki flow

const Al = () => alert("hola");

const Home = () => {
  return (
    <div className="page">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={Al} variant="primary">
          Primary
        </Button>
      </div>
    </div>
  );
};

export default Home;
