import React, { useState } from 'react';
import { createCandidate } from './apiService'; // import the service
import './CandidateForm.css';

const CandidateForm = () => {
  const [fullName, setFullName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [course, setCourse] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [position, setPosition] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const candidateData = {
      fullName,
      registrationNumber,
      course,
      yearOfStudy,
      position,
      reason,
    };

    try {
      const createdCandidate = await createCandidate(candidateData);
      console.log('Candidate created successfully:', createdCandidate);
      setFullName('');
      setRegistrationNumber('');
      setCourse('');
      setYearOfStudy('');
      setPosition('');
      setReason('');
    } catch (error) {
      console.error('Error creating candidate:', error);
    }
  };

  return (
    <div className='container3'>
      <div className="candidate-form">
        <h2><b>CANDIDATE FORM</b></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group3">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" value={fullName}
              onChange={e => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group3">
            <label htmlFor="registrationNumber">Registration Number:</label>
            <input type="text" id="registrationNumber" value={registrationNumber}
              onChange={e => setRegistrationNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <input type="text" id="course" value={course}
              onChange={e => setCourse(e.target.value)}
              required
            />
          </div><br />
          <div className="form-group3">
            <label htmlFor="yearOfStudy">Year of Study:</label>
            <input type="text" id="yearOfStudy" value={yearOfStudy}
              onChange={e => setYearOfStudy(e.target.value)}
              required
            />
          </div>
          <div className="form-group3">
            <label htmlFor="position">Position:</label>
            <input type="text" id="position" value={position}
              onChange={e => setPosition(e.target.value)}
              required
            />
          </div>
          <div className="form-group3">
            <label htmlFor="reason">Why do you want to enter the election?</label>
            <textarea id="reason" value={reason}
              onChange={e => setReason(e.target.value)}
              rows="4"
              required
            />
          </div><br />
          
          <button id="sub">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CandidateForm;
