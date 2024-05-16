//This syntax imports EVERYTHING (*) that is being exported from the designated module and groups them inside the object we assign it to - in this case, we are calling that object "weatherService"
import * as weatherService from "./services/weatherService.js";
//Desctructure the object holding the functions as properties from the imported module
import {useState} from "react";
import WeatherSearch from "./components/WeatherSearch.jsx";

const {show} = weatherService;

const App = () => {

  //State
  const [weather, setWeather] = useState({});
  // const [city, setCity] = useState("");

  const fetchData = async (city) => {
    //We can pass the state variable to the function that fetches data from the API, after connecting the input feature to send the "city name" the user types in the input field
    const data = await show(city);
    setWeather({
      location: data.location.name,
      region: data.location.region,
      country: data.location.country,
      condition: data.current.condition.text,
      temperature: data.current.temp_f,
      icon: data.current.condition.icon,

    })
  };


  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData}/>
      <h2>Weather Details</h2>
      <h4>Location: {weather.location}</h4>
      <h4>Region: {weather.region}</h4>
      <h4>Country: {weather.country}</h4>
      <h4>Condition: {weather.condition}</h4>
      <img src={weather.icon} />
      <h4>Temperature: {weather.temperature} </h4>
    </main>
  );
}

export default App

