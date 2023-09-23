import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import './Featured.css'

const FeaturedJobs = () => {

  

  const [jobs, setjobs] = useState([]);
  // this is not the best way to load show all data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setjobs(data));
  }, [])

  return (
    <div>
      <div className="text-center my-4">
        <h2 className="text-5xl mb-3">Featured Jobs: {jobs.length} </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length ? 'hidden' : ''}>
        <button
        onClick={() => setDataLength(jobs.length)}  className="btn-grad btn ">See All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;