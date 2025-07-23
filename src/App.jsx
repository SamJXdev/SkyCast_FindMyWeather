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