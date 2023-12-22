// Import specific named exports from weatherService.js
import { fetchWeatherData } from '../services/weatherService.js';
import Weather from '../models/Weather.js';

export const createWeather = async (req, res, next) => {
  try {
    const weatherData = await fetchWeatherData(req.body.location);
    const newWeather = new Weather(weatherData);
    await newWeather.save();
    res.status(201).json(newWeather);
  } catch (error) {
    next(error);
  }
};

export const getWeather = async (req, res, next) => {
  try {
    const location = req.params.location;
    const weather = await Weather.findOne({ location });
    if (!weather) {
      return res.status(404).json({ message: 'Weather data not found for the location' });
    }
    res.json(weather);
  } catch (error) {
    next(error);
  }
};


export const updateWeather = async (req, res, next) => {
  try {
    const location = req.params.location;
    const updatedWeatherData = req.body;
    const updatedWeather = await Weather.findOneAndUpdate({ location }, updatedWeatherData, { new: true });
    if (!updatedWeather) {
      return res.status(404).json({ message: 'Weather data not found for the location' });
    }
    res.json(updatedWeather);
  } catch (error) {
    next(error);
  }
};

// Delete (DELETE) Weather Data
export const deleteWeather = async (req, res, next) => {
  try {
    const location = req.params.location;
    const deletedWeather = await Weather.findOneAndDelete({ location });
    if (!deletedWeather) {
      return res.status(404).json({ message: 'Weather data not found for the location' });
    }
    res.json(deletedWeather);
  } catch (error) {
    next(error);
  }
};

// Search (GET) Weather Data (All)
export const getAllWeather = async (req, res, next) => {
  try {
    const allWeather = await Weather.find();
    res.json(allWeather);
  } catch (error) {
    next(error);
  }
};