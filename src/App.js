import React, { useState } from 'react';
import JobForm from './components/Jobform/JobForm.js';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  return (
    <div className="App">
      <h1>Job Application Tracker</h1>
      <h3>by Lamroj02</h3>
      <JobForm addJob={addJob} />
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job.company} - {job.position} ({job.status}) - Applied on {job.dateApplied}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
