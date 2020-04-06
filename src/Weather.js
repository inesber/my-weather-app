import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <div className="container">
        <div className="weather-app">
          <div className="row">
            <div className="col-12">
              <h1 className="current-city">Lisbon</h1>
              <ul className="day-and-time">
                <li className="date">15 March 2020</li>
                <li className="hours">Sunday, 18:19</li>
              </ul>
              <div className="inside-border">
                <div className="row">
                  <div className="col-6">
                    <img
                      className="weather-icon"
                      src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                      alt="weather prediction icon"
                    />
                    <p className="weather-quote">Broken Clouds</p>
                  </div>

                  <div className="col-6">
                    <div className="current-temperature">14ºC</div>

                    <div className="wind-and-precipitation">
                      <ul>
                        <li>
                          Wind:
                          <span id="wind">18</span> km/h
                        </li>
                        <li>
                          Humidity:
                          <span id="humidity">0</span>%
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

        <div className="footer">
          <p>
            <a href="https://github.com/inesber/my-weather-app" target="_blank">
              Open-Source Code
            </a>
            by Inês Bernardino
          </p>
        </div>
      </div>
    </div>
  );
}
