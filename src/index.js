import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WeatherSearch from "./WeatherSearch";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <small>
        <a href="https://github.com/wecodeschool/react-weather">
          Open-source code
        </a>
        , by <a href="https://www.matdelac.io">Sara Hosseinabadi</a>
      </small>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
