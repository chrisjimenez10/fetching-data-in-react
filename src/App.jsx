//This syntax imports EVERYTHING (*) that is being exported from the designated module and groups them inside the object we assign it to - in this case, we are calling that object "weatherService"
import * as weatherService from "./services/weatherService.js";
//Desctructure the object holding the functions as properties from the imported module
import {useState} from "react";

const {show} = weatherService;

const App = () => {

  //State
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

  const fetchData = async () => {
    //We can pass the state variable to the function that fetches data from the API, after connecting the input feature to send the "city name" the user types in the input field
    const data = await show(city);
    setWeather({
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    })
    // console.log(data)
    
  };
 
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setCity(event.target.value);
  }

  return (
    <main>
      <h1>Weather API</h1>
      <input type="text" onChange={handleInputChange}/>
      <button onClick={fetchData}>Fetch Weather Data</button>
      <section>
        <h2>Weather Details</h2>
        <p>Location: {weather.location}</p>
        <p>temperature: {weather.temperature}</p>
        <p>condition: {weather.condition}</p>
      </section>
    </main>
  );
}

export default App

