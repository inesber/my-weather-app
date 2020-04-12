import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import FormattedDate from "./FormattedDate";
import FormattedHour from "./FormattedHour";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
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
      date: new Date(response.data.dt * 1000),
      hour: new Date(response.data.dt * 1000),
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
                  <li className="date">
                    <FormattedDate date={weatherData.date} />
                  </li>
                  <li className="hours">
                    {" "}
                    <FormattedHour hour={weatherData.hour} />
                  </li>
                </ul>
                <WeatherInfo data={weatherData} />
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

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
