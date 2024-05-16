import {useState} from "react";

const WeatherSearch = (props) => {
    const {fetchData} = props;
    

    //State
    const [city, setCity] = useState("");

    //Functions
    const handleSubmit = (event) =>{
        event.preventDefault();
        fetchData(city);
    }

  return (
    <section>
        <h1>Search</h1>
        <form onSubmit={handleSubmit}>
            <label>Enter a City: </label>
            <input type="text" onChange={(event)=> {
                setCity(event.target.value);
            }}
            value={city}/>
            <button type="submit">Search</button>
          
        </form>
    </section>
  )
}

export default WeatherSearch;