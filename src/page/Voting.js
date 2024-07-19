import React, { useState } from 'react';
import './Voting.css';
import img002 from './../asset/images/image2.jpg';
const candidates = [
  {
    id: 1,
    name: 'SALEH KHALFAN SAID',
    image: 'image2.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'SALMA NASSOR SULEIMAN',
    image: 'candidateB.jpg', // Replace with actual image path
  },
];

const Voting = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleVote = (id) => {
    setSelectedCandidate(id);
  };

  return (
    <div className="voting-container">
      <h1>Vote for Your Candidate</h1>
      <div className="candidates">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="candidate-card">
            <img src={candidate.image} alt={candidate.name} className="candidate-image"></img>
            <h2>{candidate.name}</h2>
            <label>
              <input
                type="checkbox"
                name="candidate"
                value={candidate.id}
                checked={selectedCandidate === candidate.id}
                onChange={() => handleVote(candidate.id)}
              />
              Select
            </label>
          </div>
        ))}
      </div>
      {selectedCandidate && (
        <div className="selected-info">
          You have selected: {candidates.find(c => c.id === selectedCandidate).name}
        </div>
      )}
    </div>
  );
};

export default Voting;
