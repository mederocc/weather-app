import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const SearchBar = ({ handleLocation }) => {
  // PLACE TO COORDS
  //https://api.openweathermap.org/geo/1.0/direct?q=buenos%20aires&limit=1&appid=ced421fdfdce066f5456cd1ffef46304

  const [input, setInput] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleLocation(e.target.value);
      setInput("");
    }
  };

  return (
    <TextField
      onChange={(e) => {
        setInput(e.target.value);
      }}
      value={input}
      onKeyDown={handleEnter}
      id="standard-search"
      label=" Try a different location"
      type="search"
      variant="standard"
      style={{
        width: "30%",
        backgroundColor: "rgb(249, 249, 249)",
        borderRadius: "0.2rem",
        overflow: "hidden",
        marginRop: "3rem",
      }}
    />
  );
};

export default SearchBar;
