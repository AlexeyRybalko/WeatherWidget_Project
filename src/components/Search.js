import { locationType } from "../App";

const Search = ({ searchLocation, setLocation, getUserLocation, location }) => {
  return (
    <div className="search">
      <form onSubmit={(event) => searchLocation(event, locationType.custom)}>
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Город"
        ></input>
      </form>

      <button
        className="geolocation"
        onClick={(event) => getUserLocation(event, locationType.user)}
      >
        Мое местоположение
      </button>
    </div>
  );
};

export default Search;
