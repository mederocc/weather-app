import React from "react";
import classes from "./Day.module.css";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleFaIcon } from "../utils/faIcon";
import { weatherIcons } from "../utils/weatherCodes";

const Day = ({ day, max, min, weatherCode, weather }) => {
  const faIconKey = handleFaIcon(weather, weatherCode);
  // console.log(weather);

  return (
    <div className={classes["day-container"]}>
      <div>{day.slice(0, 3)}</div>
      <div style={{ fontSize: "1.6rem", color: "blue" }}>
        <FontAwesomeIcon icon={icons[weatherIcons[faIconKey]]} />
      </div>
      <div>{min}ºC</div>
      <div>{max}ºC</div>
      {/* <div>bar</div> */}
    </div>
  );
};

export default Day;
