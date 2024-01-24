import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { useParams, useLocation } from 'react-router-dom';
import money from '../../../public/icons/money.png';
import calendar from '../../../public/icons/calendar.png'
import phone from '../../../public/icons/phone.png';
import email from '../../../public/icons/email.png'
import address from '../../../public/icons/location2.png'


const JobDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const { job } = location.state || {};
    
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = job;

    const btnWidth = {
        width: '100%',
        marginTop: '20px',
    }

    return (
        <div className='job-details-main-container'>
            <div className='job-details-container'>
                <h1>Job Details</h1>
            </div>
            <div className='description-container'>
                <div>
                    <p><b>Job Description : </b>{job_description}</p>
                    <p><b>Job Responsibility : </b>{job_responsibility}</p>
                    <p><b>Educational Requirements : </b>{educational_requirements}</p>
                    <p><b>Experiences : </b>{experiences}</p>
                </div>
                <div>
                    <div className='details-container'>
                        <h3>Job Details</h3>
                        <div>
                            <img src={money} alt="" /><p><b>Salary : </b>{salary}</p>
                        </div>
                        <div>
                            <img src={calendar} alt="" /><p><b>Job Title : </b>{job_title}</p>
                        </div>
                        <h3>Contact Information</h3>
                        <div>
                            <img src={phone} alt="" /><p><b>Phone : </b>{contact_information.phone}</p>
                        </div>
                        <div>
                            <img src={email} alt="" /><p><b>Email : </b>{contact_information.email}</p>
                        </div>
                        <div>
                            <img src={address} alt="" /><p><b>Address : </b>{contact_information.address}</p>
                        </div>
                    </div>
                    <button className='apply-btn' style={btnWidth}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;