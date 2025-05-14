import React, { useEffect, useState } from 'react';
import '../styles/Netflix.css';

function Netflix() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/netflix/grouped') 
      .then(response => response.json())
      .then(data => setEntries(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>My Viewing Library</h1>
      <div className="scroll-container">
        {entries.map((entry, index) => (
          <div className="poster-card" key={index}>
            <img src={entry.poster_url} alt={entry.title} />
            <div className="title">{entry.title}</div>
            <div className="duration">
              Watched: {(entry.total_minutes / 60).toFixed(2)} hours
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Netflix;
