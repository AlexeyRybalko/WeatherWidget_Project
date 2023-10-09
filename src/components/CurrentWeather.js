const CurrentWeather = ({ data }) => {
  return (
    <>
      <div className="top">
        <div className="location">
          <h1>{data.name}</h1>
        </div>
        <div className="temp">
          {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].description}</p> : null}
        </div>
      </div>

      {data.name !== undefined && (
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like.toFixed()}°C</p>
            ) : null}
            <p>Ощущается как</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Влажность</p>
          </div>
          <div className="wind">
            {data.wind ? (
              <p className="bold">{data.wind.speed.toFixed()}м/с</p>
            ) : null}
            <p>Скорость ветра</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
