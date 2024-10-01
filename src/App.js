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

  //CRUD Operations

  const addJob = (newJob) => {
    setJobs((prevJobs) => {
      const updatedJobs = [...prevJobs, newJob];
      return updatedJobs;
    });
  };

  const sortJobs = (sortBy) => {
    let sortedJobs = [];
    if(sortBy==='company'){

    }
    else if(sortBy==='position'){

    }
    else if(sortBy==='status'){

    }
    else{
      sortedJobs = [...jobs].sort((a, b) => a.company.localeCompare(b.company));
    } 
    setJobs(sortedJobs);
  };

  const remJob = (delJob) => {
    setJobs((prevJobs) => {
      return prevJobs.filter(_jobs => _jobs !== delJob)
    });
  };

  const updateJob = (delJob, newJob) => {
    setJobs((prevJobs) => {
      prevJobs = prevJobs.filter(_jobs => _jobs !== delJob);
      return [...prevJobs, newJob];
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
            <th className='modTh'></th>
            <th className='modTh'></th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.company}</td>
              <td>{job.position}</td>
              <td>
                <select value={job.status} onChange={(e) => updateJob(job,{
                  company: job.company,
                  position: job.position,
                  status: e.target.value,
                  dateApplied: job.dateApplied,
                })}>
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
              <td>{job.dateApplied}</td>
              <td><button onClick={() => {
                    if (window.confirm("Are you sure you want to delete this job?")) {
                      remJob(jobs[index]);
                    }
                  }}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
