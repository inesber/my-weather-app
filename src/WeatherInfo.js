import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHour from "./FormattedHour";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo inside-border">
      <h1 className="current-city">{props.data.city}</h1>
      <div className="day-and-time">
        {" "}
        <p className="date">
          <FormattedDate date={props.data.date} />
        </p>
        <p className="hours">
          {" "}
          <FormattedHour hour={props.data.hour} />
        </p>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <img
            className="weather-icon"
            src={props.data.icon}
            alt={props.data.description}
          />
          <p className="weather-quote text-capitalize">
            <em>{props.data.description}</em>
          </p>
        </div>

        <div className="col-6">
          <div className="current-temperature">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>

          <div className="wind-and-precipitation">
            <div>
              <p>
                Wind:
                <span id="wind">{props.data.wind}</span> km/h
              </p>
              <p>
                Humidity:
                <span id="humidity">{props.data.humidity}</span>%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
