import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  loadWeatherData,
  selectWeather,
  selectIsLoadingWeather,
} from "../Containers/weatherSlice";

const weatherContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "80%",
  marginTop: "15px",
  marginRight:"15px",
  boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
  borderRadius: "10px",
}
const weatherDisplay = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "baseline",
  fontSize: "20px",
  color: "white",
  textShadow: "rgb(0, 0, 0) 1px 0px 5px"
}
const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);
  const isLoading = useSelector(selectIsLoadingWeather);

  // useEffect(() => {
  //   dispatch(loadWeatherData());
  // }, [dispatch]);

  if (isLoading) return <div>Loading Weather</div>;
  if (!weather.current) return null;

  const degrees = weather.current.temp_c;
  const text = weather.current.condition.text
  const icon = `https:${weather.current.condition.icon}`

  return (
    <div style={weatherContainer}>
      <img src={icon} alt="icon" />
      <div style={weatherDisplay}>
        <h1>{degrees} °</h1>
        <div>{text}</div>
      </div>
    </div>
    )
};

export default Weather;
