import axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setlocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7358361b31277df94a86ab29a7e5d0e5`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setlocation("");
      console.log(data);
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setlocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="enter name"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()-273}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <h1>{data.weather[0].description}</h1> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
             {data.main ? (
              <p className="bold">{data.main.feels_like.toFixed()-273}°C</p>
             ) : null}
             <p>feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()}m/sec</p>
              ) : null}
              <p>wind speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
