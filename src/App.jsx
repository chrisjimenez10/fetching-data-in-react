//This syntax imports EVERYTHING (*) that is being exported from the designated module and groups them inside the object we assign it to - in this case, we are calling that object "weatherService"
import * as weatherService from "./services/weatherService.js";
//Desctructure the object holding the functions as properties from the imported module
const {show} = weatherService;

const App = () => {

  const fetchData = async () => {
    const data = await show("Los Angeles");
    console.log("Data:", data)
  };
 

  return (
    <main>
      <h1>Weather API</h1>
      <button onClick={fetchData}>Fetch Weather Data</button>
    </main>
  );
}

export default App

