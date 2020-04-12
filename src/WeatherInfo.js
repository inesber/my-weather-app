import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="inside-border">
      <div className="row">
        <div className="col-6">
          <img
            className="weather-icon"
            src={props.data.icon}
            alt={props.data.description}
          />
          <p className="weather-quote text-capitalize">
            {props.data.description}
          </p>
        </div>

        <div className="col-6">
          <div className="current-temperature">
            {Math.round(props.data.temperature)}ºC
          </div>

          <div className="wind-and-precipitation">
            <ul>
              <li>
                Wind:
                <span id="wind">{props.data.wind}</span> km/h
              </li>
              <li>
                Humidity:
                <span id="humidity">{props.data.humidity}</span>%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
