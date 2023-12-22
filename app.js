import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import weatherRoutes from './routes/weatherRoutes.js';
import { handleErrors } from './utils/errorHandler.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/weather', weatherRoutes);

// Error Handler
app.use(handleErrors);

export default app;
