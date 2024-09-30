import React, { useState, useEffect } from 'react';
import JobForm from './components/Jobform/JobForm.js';
import './App.css';

const isNull = (storedItem) => {
  return localStorage.getItem(storedItem) === null;
};

function App() {
  const [jobs, setJobs] = useState(
    isNull("jobs") ? [] : JSON.parse(localStorage.getItem("jobs"))
  );

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (newJob) => {
    setJobs((prevJobs) => {
      const updatedJobs = [...prevJobs, newJob];
      return updatedJobs;
    });
  };

  return (
    <div className="App">
      <h1>Job Application Tracker</h1>
      <h3>by Lamroj02</h3>
      <JobForm addJob={addJob} />
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Status</th>
            <th>Date Applied</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.company}</td>
              <td>{job.position}</td>
              <td>{job.status}</td>
              <td>{job.dateApplied}</td>
              <td><button type="button">Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
