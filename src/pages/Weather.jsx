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