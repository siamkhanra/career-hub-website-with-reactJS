import React, { useEffect, useState } from 'react';
import './Feature.css'
import Job from '../Job/Job';
import JobDetails from '../JobDetails/JobDetails';
import { Link, useNavigate } from 'react-router-dom';

const Feature = () => {
    const [jobs, setJobs] = useState([]);

    const navigate = useNavigate();

    useEffect( ()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);

    const viewDetails = (jobs) =>{
        const {id} = jobs;
        navigate(`/jobDetails/${id}`, { state: { jobs } });
    }


    return (
        <div className='feature-container'>
            <h2>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='feature-job-container'>
                {
                    jobs.map(job => <Job key={job.id} job={job} viewDetails={viewDetails}></Job>)
                }
            </div>
            <button className='apply-btn'>See All Jobs</button>
        </div>
    );
};

export default Feature;