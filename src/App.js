import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
       
        <footer>
          This project was coded by Ekaterina Filatova and is{" "}
          <a
            href="https://github.com/Superdegot/weather-react-hw5"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>

      </div>
    </div>
  );
}

export default App;
