import axios from 'axios';

const apiKey = "a4e84aff64d287d70f26896316586f5d"
export const fetchWeatherData = async (location) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
  const { name, main, weather } = response.data;
  return {
    location: name,
    temperature: main.temp,
    description: weather[0].description,
  };
};
