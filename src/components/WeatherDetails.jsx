
//Child Component
const WeatherDetails = (props) => {
    const {weather} = props;

  return (
    <>
        <h2>Weather Details</h2>
        <h4>Location: {weather.location}</h4>
        <h4>Region: {weather.region}</h4>
        <h4>Country: {weather.country}</h4>
        <h4>Condition: {weather.condition}</h4>
        <img src={weather.icon} />
        <h4>Temperature: {weather.temperature}</h4> 
      </>
  )
}

export default WeatherDetails;