//Data
const API_KEY = "2a2c4318673849e382841946241505";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

//Functions
const show = async (city) =>{
    try {
        const queryString = `&q=${city}`;
        const response = await fetch(BASE_URL + queryString);
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
};

// show("Cicero"); //We can run functions in a React App BEFORE exporting it to a component by running the following comand - "node <file-path>" in this case it would be "node src/services/weatherService.js"

export {show};