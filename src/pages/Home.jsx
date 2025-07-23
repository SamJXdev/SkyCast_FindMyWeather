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