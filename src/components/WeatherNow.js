import React from "react";
import CenteredBox from "./UI/CenteredBox";

const WeatherNow = ({ weather, location, weatherCodes, children }) => {
  const description = weatherCodes[weather.current_weather.weathercode];
  return (
    <CenteredBox>
      <p>{location}</p>
      <CenteredBox direction={"row"}>
        {children}
        <CenteredBox>
          <p>{weather.current_weather.temperature} ºC</p>
          <p>{description}</p>
        </CenteredBox>
      </CenteredBox>

      {/* <CenteredBox direction={"row"}>
        <CenteredBox>
          <div>Lowest temperature:</div>
          <div>{weather.daily.temperature_2m_min[0]} ºC</div>
        </CenteredBox>
        <CenteredBox>
          <div>Highest temperature:</div>
          <div>{weather.daily.temperature_2m_max[0]} ºC</div>
        </CenteredBox>
      </CenteredBox> */}
    </CenteredBox>
  );
};

export default WeatherNow;
