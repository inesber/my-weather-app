import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="container">
          <div className="weather-app">
            <div className="row">
              <div className="col-12">
                <h1 className="current-city">{weatherData.city}</h1>
                <ul className="day-and-time">
                  <li className="date">15 March 2020</li>
                  <li className="hours">Sunday, 18:19</li>
                </ul>
                <div className="inside-border">
                  <div className="row">
                    <div className="col-6">
                      <img
                        className="weather-icon"
                        src={weatherData.icon}
                        alt={weatherData.description}
                      />
                      <p className="weather-quote text-capitalize">
                        {weatherData.description}
                      </p>
                    </div>

                    <div className="col-6">
                      <div className="current-temperature">
                        {Math.round(weatherData.temperature)}ºC
                      </div>

                      <div className="wind-and-precipitation">
                        <ul>
                          <li>
                            Wind:
                            <span id="wind">{weatherData.wind}</span> km/h
                          </li>
                          <li>
                            Humidity:
                            <span id="humidity">{weatherData.humidity}</span>%
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <form>
                      <input
                        type="search"
                        placeholder="Type a city..."
                        autocomplete="off"
                        class="search-bar"
                        id="search-input"
                      />
                      <input
                        type="submit"
                        placeholder="search"
                        class="btn btn-dark"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0c7738f69f93f7a10985af2c2d89420a";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
