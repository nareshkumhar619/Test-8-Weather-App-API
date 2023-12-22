import express from 'express';
import * as weatherController from '../controllers/weatherController.js';

const router = express.Router();

// Create (POST) Weather Data
router.post('/', weatherController.createWeather);

// Read (GET) Weather Data
router.get('/:location', weatherController.getWeather);

// Update (PUT) Weather Data
router.put('/:location', weatherController.updateWeather);

// Delete (DELETE) Weather Data
router.delete('/:location', weatherController.deleteWeather);

// Search (GET) All Weather Data
router.get('/', weatherController.getAllWeather);

export default router;
