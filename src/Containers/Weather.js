import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  loadWeatherData,
  selectWeather,
  selectIsLoadingWeather,
} from "../Containers/weatherSlice";

import './weather.css'


const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);
  const isLoading = useSelector(selectIsLoadingWeather);

  useEffect(() => {
    dispatch(loadWeatherData());
  }, [dispatch]);

  if (isLoading) return <div>Loading Weather</div>;
  if (!weather.current) return null;

  const degrees = weather.current.temp_c;
  const text = weather.current.condition.text
  const icon = `https:${weather.current.condition.icon}`

  return (
    <section className="weatherSection">
      <div className='weather'>
        <img src={icon} alt="icon" />
        <div className='weatherDisplay'>
          <p className="degrees">{degrees} °</p>
          <div className="weatherText">{text}</div>
        </div>
      </div>
    </section>
    )
};

export default Weather;
