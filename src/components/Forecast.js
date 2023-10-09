import { WiHumidity, WiStrongWind } from "react-icons/wi";

const dayInMs = 1000 * 60 * 60 * 24;

const Forecast = ({ data }) => {
  let newDay = 0;

  const list = data?.list.filter((item) => {
    const time = new Date(item.dt_txt).getTime();

    if (newDay === 0 || time >= newDay) {
      newDay = time + dayInMs;
      return true;
    } else {
      return false;
    }
  });

  const getWeekDay = (date) => {
    const days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];

    return days[date.getDay()];
  };

  return (
    <div className="forecast">
      <h1 className="location">{data.city.name}</h1>
      <ul className="weather-list">
        {list?.map((item) => {
          return (
            <li key={item?.dt} className="weather-item">
              <div className="day-name, bold">
                <p>{getWeekDay(new Date(item.dt * 1000))}</p>
              </div>

              <div className="forecast-temp">
                {item.main ? <p>{item.main.temp.toFixed()}°C</p> : null}
              </div>

              <div className="forecast-description">
                {item.weather ? <p>{item.weather[0].description}</p> : null}
              </div>

              <div className="forecast-humidity">
                {item.main ? (
                  <p>
                    <WiHumidity className="humidity-icon"></WiHumidity>
                    {item.main.humidity.toFixed()}%
                  </p>
                ) : null}
              </div>

              <div className="forecast-wind">
                {item.wind ? (
                  <p>
                    <WiStrongWind className="wind-icon"></WiStrongWind>
                    {item.wind.speed.toFixed()}м/с
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Forecast;
