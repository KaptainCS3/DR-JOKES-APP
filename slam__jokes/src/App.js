import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import Welcome from "./components/Welcome";
import Jokes from "./components/Jokes";
import CreateJoke from "./components/CreateJoke";
import Container from "./components/Container";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="lg:flex">
      <Nav />
      <Welcome />
      <Jokes />
      <CreateJoke />
      <Container />
      <Container />
      <Footer />
    </div>
  );
};

export default App;
