import React from "react";
import classes from "./Forecast.module.css";
import Day from "./Day";

const Forecast = ({ weather }) => {
  const days = [];

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (let i = 0; i <= 6; i++) {
    const date = new Date(weather.daily.time[i]);
    date.setDate(date.getDate() + 1);

    days.push({
      day: daysOfWeek[date.getDay()],
      max: weather.daily.temperature_2m_max[i],
      min: weather.daily.temperature_2m_min[i],
      weatherCode: weather.daily.weathercode[i],
      weather,
    });
  }

  return (
    <div className={classes["forecast-container"]}>
      <h2>7-day forecast</h2>

      {days.map((day) => (
        <Day {...day} />
      ))}
    </div>
  );
};

export default Forecast;
