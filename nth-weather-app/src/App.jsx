import React from "react";
import { useState } from "react";
import "./App.css";
import { dateToString } from "./utils/date-format";

const api = {
  key: "e94102957f5acd1fdac20bbf20e7aaae",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const currentDate = dateToString(new Date());
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      search(evt);
    }
  };

  const weatherTemperatureClass = weather?.main?.temp > 16 ? "warm" : "cold";
  const appClass = weather.main ? weatherTemperatureClass : "";

  return (
    <div className={`app ${appClass}`}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyDown={handleKeyDown}
          />
        </div>
        {weather?.main ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{currentDate}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          <div class="no-data-container">
            <h2>
              Search for a warm place like Dubai or a cold place like
              Stockholm... Or any other city
            </h2>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;