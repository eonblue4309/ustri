import React from "react";
import Masthead from "../components/Masthead";
import Home from "../paritals/Home";

const Header = () => (
  <header>
    <Masthead />
  </header>
);

export default () => (
  <div>
    <Header />
    <Home />
  </div>
);
