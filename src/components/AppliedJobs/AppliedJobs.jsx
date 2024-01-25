import React from 'react';
import { useLocation } from 'react-router-dom';
import Job from '../Job/Job';

const AppliedJobs = () => {
    const location = useLocation();
    const {job} = location.state || {};

    const {id, logo, job_title, company_name, } = job;

    return (
        <div>
            <div className='job-details-container'>
                <h2>Applied Jobs</h2>
            </div>
            <div>
                <Job key={id} job={job}></Job>
            </div>
        </div>
    );
};

export default AppliedJobs;