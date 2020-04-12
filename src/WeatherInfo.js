import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHour from "./FormattedHour";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo inside-border">
      <h1 className="current-city">{props.data.city}</h1>
      <ul className="day-and-time">
        <li className="date">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="hours">
          {" "}
          <FormattedHour hour={props.data.hour} />
        </li>
      </ul>
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
            <WeatherTemperature celsius={props.data.temperature} />
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
