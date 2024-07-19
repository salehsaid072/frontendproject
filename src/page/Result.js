import React from 'react';
import './Result.css';

const winner = {
  name: 'SALEH KHALFAN SAID',
  image: 'candidateA.jpg', // Replace with actual image path
  percentage: 65,
  votes: 1300,
};

const Result = () => {
  return (
    <div className="result-container">
      <h1>Election Results</h1>
      <div className="winner-card">
        <img src={winner.image} alt={winner.name} className="winner-image" />
        <h2>{winner.name}</h2>
        <p>Percentage of Votes: {winner.percentage}%</p>
        <p>Total Votes: {winner.votes}</p>
        <div className="congratulations">
          Congratulations to {winner.name} on winning the election! We wish you all the best in your new role.
        </div>
      </div>
    </div>
  );
};

export default Result;
