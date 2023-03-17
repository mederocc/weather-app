import React from "react";
import classes from "./Day.module.css";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleFaIcon } from "../utils/faIcon";
import { weatherIcons } from "../utils/weatherCodes";

const Day = ({ day, max, min, weatherCode, weather }) => {
  const faIconKey = handleFaIcon(weather, weatherCode);

  return (
    <div className={classes["day-container"]}>
      <p>{day.slice(0, 3)}</p>
      <div style={{ fontSize: "1.6rem", color: "blue" }}>
        <FontAwesomeIcon icon={icons[weatherIcons[faIconKey]]} />
      </div>
      <p>{max}ºC</p>
      <p>bar</p>
      <p>{min}ºC</p>
    </div>
  );
};

export default Day;
