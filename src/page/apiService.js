import axios from 'axios';

const API_URL = 'http://localhost:8080/candidates';

const createCandidate = async (candidateData) => {
  try {
    const response = await axios.post(API_URL, candidateData);
    return response.data;
  } catch (error) {
    console.error('There was an error creating the candidate!', error);
    throw error;
  }
};

export { createCandidate };
