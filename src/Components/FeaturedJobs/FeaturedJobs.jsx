import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {

  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setjobs(data));
  }, [])

  return (
    <div>
      <div className='text-center my-4'>
        <h2 className="text-5xl mb-3">Featured Jobs: {jobs.length} </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        {
          jobs.map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
    </div> 
  );
};

export default FeaturedJobs;