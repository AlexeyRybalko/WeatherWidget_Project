import { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

const WeatherOutput = ({ data, forecastData }) => {
  const [isCurrentWeather, setIsCurrentWeather] = useState(true);
  const [buttontext, setButtonText] = useState(true);

  const handleClick = () => {
    setButtonText(!buttontext);
  };

  return (
    <>
      {data && (
        <div className="container">
          <button
            className="forecast-switch-button"
            onClick={() => {
              setIsCurrentWeather(!isCurrentWeather);
              handleClick();
            }}
          >
            {buttontext ? "Прогноз на пять дней" : "Прогноз на сегодня"}
          </button>
          {isCurrentWeather ? (
            <CurrentWeather data={data} />
          ) : (
            <Forecast data={forecastData} />
          )}
        </div>
      )}
    </>
  );
};

export default WeatherOutput;
