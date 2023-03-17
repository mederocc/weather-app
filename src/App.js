import { useState, useEffect, useCallback } from "react";
import classes from "./App.module.css";
import TextField from "@mui/material/TextField";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  // PLACE TO COORDS
  //https://api.openweathermap.org/geo/1.0/direct?q=buenos%20aires&limit=1&appid=ced421fdfdce066f5456cd1ffef46304

  // GET TIMEZONE
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // GET LOCATION

  const handleWeather = useCallback(
    async (position) => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,weathercode&current_weather=true&timezone=${timeZone}`
      );

      setWeather(await response.json());

      const locationResponse = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
      );

      setLocation(await locationResponse.json());
    },
    [timeZone]
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleWeather);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [handleWeather]);

  return (
    <div className={classes["app-container"]}>
      <div className={classes.header}>
        <h1>WEATHER APP</h1>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          className={classes["search-bar"]}
        />
      </div>
      {weather && location && (
        <WeatherCard weather={weather} location={location.address.city} />
      )}
    </div>
  );
}

export default App;
