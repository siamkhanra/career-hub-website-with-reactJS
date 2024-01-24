import React from 'react';
import './Job.css';
import loc from '../../../public/icons/location2.png'
import mon from '../../../public/icons/money.png'
import { Link } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const Job = ({job, viewDetails}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;

    
    return (
        <div className='job-container'>
            <img src={logo} alt="" />
            <h3>{job_title}</h3>
            <p className='com-name'>{company_name}</p>
            <div className='job-type'>
                <p className='job-time'>{remote_or_onsite}</p>
                <p className='job-time'>{job_type}</p>
            </div>
            <div className='loc-info'>
                <p className='job-loc'>
                    <img src={loc} alt="" />{location}
                </p>
                <p className='job-loc'>
                    <img src={mon} alt="" />{salary}
                </p>
            </div>
            <div>
                <Link to={`../jobDetails/${id}`} state={{ job }}>
                    <button onClick={() => viewDetails(job)} className='apply-btn'>
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Job;