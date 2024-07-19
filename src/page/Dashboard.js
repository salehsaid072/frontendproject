import React from 'react';
import './Dashboard.css';
import img001 from './../asset/images/image1.PNG';
function Dashboard() {
  return (
    <div>
      <header>
        <h1>University Voting System</h1>
        <nav>
          <ul>
            <li><a href="dashboard">Dashboard</a></li>
            <li><a href="candidateform">CandidateForm</a></li>
            <li><a href="voting">Voting</a></li>
            <li><a href="result">Result</a></li>
            <li><a href="aboutus">AboutUs</a></li>


          </ul>
        </nav>
      </header>
      <main>
        <h2>Welcome to the University Voting System</h2>
        <p>This system allows you to vote for your favorite candidates in the university elections.</p>
        <img src={img001} alt="image1"></img>
      </main>
      <footer>
        <p>&copy; 2024 University Voting System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
