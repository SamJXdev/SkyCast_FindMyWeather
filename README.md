# SkyCast - Find My Weather

> A responsive single-page React application that lets users enter a city name and view real-time weather using the OpenWeatherMap API.

---

## Date
23.07.2025

---

## Objective

To build a responsive React + Vite app that retrieves live weather data based on city input, demonstrating:
- Axios for API integration
- React Router DOM for navigation
- React Hooks for state and effect management
- Controlled components with validation
- Responsive styling using CSS

---

## Project Tasks

1. *Setup*
   - Initialize React app with Vite
   - Install dependencies:
     bash
     npm install axios react-router-dom
     

2. *Routing (App.jsx)*
   - Configure BrowserRouter
   - Create two routes:
     - / – Home page with input form
     - /weather – Results page displaying weather info

3. *Home Page (Home.jsx)*
   - Controlled input field
   - Input validation (not empty)
   - On form submit:
     - Store city name
     - Navigate to /weather

4. *Weather Page (Weather.jsx)*
   - Use Axios to call OpenWeatherMap API
   - Display:
     - Temperature (°C/°F via useMemo)
     - Humidity
     - Wind Speed
     - Weather Condition

5. *React Hooks*
   - useState, useEffect, useCallback, useMemo

6. *CSS Styling (App.css)*
   - Responsive layout
   - Styled form, buttons, weather card, navigation

---

## Technologies Used

- React + Vite
- Axios
- React Router DOM
- HTML & CSS

---
## Weather.jsx
```
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Weather({ place }) {
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!place) {
      navigate('/');
      return;
    }

    const key = '91a1dcf844967b00c27d548af8e7fcda';
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}&units=metric`)
      .then(res => setInfo(res.data))
      .catch(() => navigate('/'));
  }, [place, navigate]);

  if (!info) return <div className="box">Loading...</div>;

  return (
    <div className="box">
      <h2>{place}</h2>
      <div className="data">
        <p>Temp: {info.main.temp}°C</p>
        <p>Humidity: {info.main.humidity}%</p>
        <p>Conditions: {info.weather[0].main}</p>
      </div>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default Weather;
```
## Home.jsx
```
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ place, setPlace }) {
  const [input, setInput] = useState('');
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setHasError(true);
      return;
    }
    setPlace(input);
    navigate('/forecast');
  };

  return (
    <div className="box">
      <h2>Weather Check</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Search</button>
      </form>
      {hasError && <p className="error">Enter a location</p>}
    </div>
  );
}

export default Home;
```
## App.css
```
body {
  font-family: 'Times New Roman', Times, serif;
  margin: 0;
  padding: 20px;
  background: #f5f7fa;
}

.box {
  max-width: 500px;
  margin: 50px auto;
  padding: 25px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

input {
  padding: 8px;
  width: 70%;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background: #4a6fa5;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
}

.data {
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
}

.error {
  color: #c33;
}
```

## App.jsx
```
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Weather from './pages/Weather';

function App() {
  const [place, setPlace] = useState('');
  
  return (
    <Routes>
      <Route path="/" element={<Home place={place} setPlace={setPlace} />} />
      <Route path="/forecast" element={<Weather place={place} />} />
    </Routes>
  );
}

export default App;
```

## Output
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/60a9e52b-f2f9-4f73-9843-c6c7a8e28819" />
<img width="1915" height="1079" alt="image" src="https://github.com/user-attachments/assets/c0e79efa-a30f-422c-873b-4c7a02bb2ed9" />



## Result
A responsive single-page application using React that allows users to enter a city name and retrieve real-time weather information using the OpenWeatherMap API has been built successfully.
