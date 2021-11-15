import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const Home = () => {
  useEffect(() => {
    authServices();
  }, []);

  async function authServices() {
    let response = await fetch("https://trs2500.ml/aln/Controller.php", {
      // let response = await fetch("http://localhost/aln/Controller.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "leantrs@gmail.com",
        password: "224566",
        pass: "login",
      }),
    });

    let json = await response.json();

    console.log(json);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> krn_and_Rsn.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
