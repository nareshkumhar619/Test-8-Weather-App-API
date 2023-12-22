# Weather App API



## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [API Documentation](#api-documentation)
  - [1. Create (POST) Weather Data](#1-create-post-weather-data)
  - [2. Read (GET) Weather Data](#2-read-get-weather-data)
  - [3. Update (PUT) Weather Data](#3-update-put-weather-data)
  - [4. Delete (DELETE) Weather Data](#4-delete-delete-weather-data)
  - [5. Search (GET) All Weather Data](#5-search-get-all-weather-data)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Description

The Weather App API allows you to fetch, store, update, delete, and search for weather data for various locations. This API is designed to provide weather information using the OpenWeatherMap API.

## Features

- Create weather data for a specific location.
- Retrieve weather data for a specific location.
- Update weather data for a specific location.
- Delete weather data for a specific location.
- Retrieve all weather data.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version X.X.X)
- npm (version X.X.X)
- MongoDB (version X.X.X)
- OpenWeatherMap API Key

### Installation

Clone the repository:

```bash
   git clone https://github.com/yourusername/your-repo.git
```
### Environment Variables
Create a .env file in the root directory with the following content:

```bash
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
WEATHER_API_KEY=your_openweathermap_api_key

```

### Running the App
Start the server:

```bash
node server.js
```

### API Documentation
#### 1. Create (POST) Weather Data
Endpoint: POST /api/weather
Description: Create weather data for a specific location.
Request Body:

```bash
{
  "location": "Your_Location"
}

```
#### Response
```bash
{
  "_id": "6585a911a7b751b7c0bedc9b",
  "location": "London",
  "temperature": 285.08,
  "description": "overcast clouds",
  "timestamp": "2023-12-22T15:19:45.183Z",
  "__v": 0
}


```

#### 2. Read (GET) Weather Data
Endpoint: GET /api/weather/:location
Description: Retrieve weather data for a specific location.
Example Response:

```bash
{
  "_id": "6585a911a7b751b7c0bedc9b",
  "location": "London",
  "temperature": 285.08,
  "description": "overcast clouds",
  "timestamp": "2023-12-22T15:19:45.183Z",
  "__v": 0
}


```
#### 3. Update (PUT) Weather Data
Endpoint: PUT /api/weather/:location
Description: Update weather data for a specific location.
Request Body:

```bash
{
  "temperature": 25,
  "description": "Updated_Weather_Description"
}

```
#### Response

```bash
{
  "_id": "6585a911a7b751b7c0bedc9b",
  "location": "London",
  "temperature": 25,
  "description": "Updated_Weather_Description",
  "timestamp": "2023-12-22T15:19:45.183Z",
  "__v": 0
}

```
#### 4. Delete (DELETE) Weather Data
Endpoint: DELETE /api/weather/:location
Description: Delete weather data for a specific location.
Response:

```bash
{
  "_id": "6585a911a7b751b7c0bedc9b",
  "location": "London",
  "temperature": 25,
  "description": "Updated_Weather_Description",
  "timestamp": "2023-12-22T15:19:45.183Z",
  "__v": 0
}
```
#### 4. Search (GET) All Weather Data
Endpoint: GET /api/weather
Description: Retrieve all weather data.
Example Response:

```bash
[
  {
    "_id": "6585a911a7b751b7c0bedc9b",
    "location": "London",
    "temperature": 285.08,
    "description": "overcast clouds",
    "timestamp": "2023-12-22T15:19:45.183Z",
    "__v": 0
  },
  {
    "_id": "6585a911a7b751b7c0bedc9c",
    "location": "New York",
    "temperature": 290.50,
    "description": "clear sky",
    "timestamp": "2023-12-

```



## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License - see the LICENSE file for details.



