import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import WeatherOutput from "./components/WeatherOutput";
import Error from "./components/Error";

export const locationType = {
  user: "user",
  custom: "custom",
};

const key = '269dba5452f7e8fb9d9acf5fd23b66cd'

function App() {
  const [data, setData] = useState(null);
  const [forecastData, setForecastData] = useState(null)
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const getUserLocation = (event, type) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          searchLocation(event, type, { latitude, longitude });
        },
        (error) => {
          console.error("Ошибка при получении геолокации", error);
        }
      );
    } else {
      console.log("Геолокация не поддерживается браузером");
    }
  };

  const searchLocation = (
    event,
    type,
    coords = { latitude: 0, longitude: 0 }
  ) => {
    event.preventDefault();
    let locationParams;
    if (type === locationType.custom) {
      locationParams = `q=${location}`;
    } else {
      locationParams = `lat=${coords.latitude}&lon=${coords.longitude}`;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?${locationParams}&lang=ru&&units=metric&appid=${key}`;

    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?${locationParams}&lang=ru&&units=metric&appid=${key}`

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError("Ошибка ввода местоположения! Попробуйте еще раз!");
      });

      axios
      .get(urlForecast)
      .then((response) => {
        setForecastData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError("Ошибка ввода местоположения! Попробуйте еще раз!");
      });

    setLocation("");
    setData(null);
  };

  return (
    <div className="app">
      <Search
        searchLocation={searchLocation}
        setLocation={setLocation}
        getUserLocation={getUserLocation}
        location={location}
      />

      <WeatherOutput data={data} forecastData={forecastData} />

      <Error error={error} />
    </div>
  );
}

export default App;
